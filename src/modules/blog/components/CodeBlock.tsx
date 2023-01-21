'use client';

import { ReactNode, useEffect, useState } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

export const CodeBlock = (props: {
  children: {
    props: { className: string; children: ReactNode; highlights: string };
  };
}) => {
  const [copied, setCopied] = useState(false);
  const [isNavigatorClipboard, setIsNavigatorClipboard] = useState(false);

  useEffect(() => {
    if (navigator && navigator.clipboard) {
      setIsNavigatorClipboard(true);
    }
  }, []);

  const copyToClipboard = async (str: string) => {
    await navigator?.clipboard
      .writeText(str)
      .catch((err) => console.error('Could not copy text: ', err));
  };

  const code = (props.children?.props?.children as string)?.trim();

  return (
    <div className="bg-slate-600 rounded-lg p-4 my-4 font-md not-prose">
      <div className={'flex justify-end relative'}>
        {isNavigatorClipboard && (
          <span
            className="cursor-pointer"
            aria-label="Copy to clipboard"
            onClick={() => {
              copyToClipboard(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1000);
            }}
          >
            {copied ? ' ✅' : '📋'}
          </span>
        )}
      </div>
      <div className={'overflow-auto px-2 p-6'}>
        <Highlight
          {...defaultProps}
          code={code}
          language={'javascript' as Language}
          theme={theme}
        >
          {({ className, style, tokens, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                backgroundColor: 'transparent',
                minWidth: '100%'
              }}
            >
              {tokens.map((line, i) => (
                <div key={`${line}-${i}`}>
                  {line.map((token, key) => (
                    <span
                      key={`${key}-${token}`}
                      {...getTokenProps({ token })}
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
