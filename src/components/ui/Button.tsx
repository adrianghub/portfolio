import { ReactNode } from 'react';

type ButtonCommonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  type?: ButtonCommonType;
  children?: ReactNode;
  classes?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  type = 'button',
  classes,
  children,
  onClick,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const sharedClasses =
    'prose transition duration-300 ease hover:bg-button-wenge-600 inline-block bg-button-wenge-700 text-lg rounded-full px-8 py-3 cursor-pointer text-button-wenge-100';

  return (
    <button
      type={type}
      className={`${sharedClasses} ${classes || ''}`}
      onClick={onClick}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
