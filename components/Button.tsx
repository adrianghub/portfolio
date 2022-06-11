import { ReactNode } from 'react';

type ButtonCommonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  type?: ButtonCommonType;
  children?: ReactNode;
  additionalClasses?: string;
  onClick?: () => void;
}

const Button = ({
  type = 'button',
  additionalClasses,
  children,
  onClick,
  ...otherProps
}: ButtonProps) => {
  const sharedClasses =
    'transition duration-300 ease hover:bg-button-wenge-600 inline-block bg-button-wenge-700 text-lg rounded-full px-8 py-3 cursor-pointer text-button-wenge-100';

  return (
    <button
      type={type}
      className={`${sharedClasses} ${additionalClasses || ''}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
