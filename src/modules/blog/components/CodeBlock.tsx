'use client';

import { ReactNode, useEffect, useState } from 'react';
import rangeParser from 'parse-numeric-range';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Button } from '../../../shared/components/Button';

export const CodeBlock = (props: {
  children: {
    props: { className: string; children: ReactNode; highlights: string };
  };
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isNavigatorClipboard, setIsNavigatorClipboard] = useState(false);

  useEffect(() => {
    if (navigator && navigator.clipboard) {
      setIsNavigatorClipboard(true);
    }
  }, []);

  const calculateLinesToHighlight = (raw: string) => {
    const lineNumbers = rangeParser(raw);
    if (lineNumbers) {
      return (index: number) => lineNumbers.includes(index + 1);
    } else {
      return () => false;
    }
  };

  const copyToClipboard = async (str: string) => {
    await navigator?.clipboard
      .writeText(str)
      .catch((err) => console.error('Could not copy text: ', err));
  };

  const className = props.children.props.className || '';
  const code = (props.children?.props?.children as string)?.trim();
  const language = className.replace(/language-/, '');
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ''
  );

  return (
    <div className="bg-slate-600 rounded-lg px-2 pb-4 font-md">
      <div className={'flex justify-end relative'}>
        {isNavigatorClipboard && (
          <Button
            additionalClasses="m-4"
            onClick={() => {
              void copyToClipboard(code);
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 1000);
            }}
          >
            {isCopied ? ' ✅ Copied!' : 'Copy'}
          </Button>
        )}
      </div>
      <div className={'overflow-auto px-2 pb-6'}>
        <Highlight
          {...defaultProps}
          code={code}
          language={language as Language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                backgroundColor: 'transparent',
                float: 'left',
                minWidth: '100%'
              }}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  key={`${line}-${i}`}
                  style={{
                    background: highlights(i) ? '#00f5c426' : 'transparent',
                    display: 'block'
                  }}
                >
                  {line.map((token, key) => (
                    <span
                      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                      key={`${key}-${token}`}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
