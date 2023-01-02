import { MutableRefObject } from 'react';

interface InputProps {
  id?: string;
  ref?: MutableRefObject<HTMLInputElement | null>;
  textareaRef?: MutableRefObject<HTMLTextAreaElement | null>;
  type?: string;
  classes?: string;
  name: string;
  placeholder?: string;
  textarea?: boolean;
  value?: string | string[];
  onChange?: (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const Input = ({
  id,
  ref,
  textareaRef,
  type = 'text',
  classes,
  name,
  placeholder,
  textarea,
  value,
  onChange
}: InputProps) => {
  const sharedClasses =
    'w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 bg-gray-100 text-gray-700';

  if (type === 'checkbox') {
    return (
      <input
        id={id}
        ref={ref}
        type={type}
        className={`accent-gray-900 ${classes || ''}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  return !textarea ? (
    <input
      id={id}
      ref={ref}
      type={type}
      className={`${sharedClasses} ${classes || ''}`}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  ) : (
    <textarea
      id={id}
      ref={textareaRef}
      className={`${sharedClasses} ${classes || ''}`}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
