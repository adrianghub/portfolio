import { MutableRefObject } from 'react';

interface InputProps {
  id?: string;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  textareaRef?: MutableRefObject<HTMLTextAreaElement | null>;
  type?: string;
  additionalClasses?: string;
  name: string;
  placeholder?: string;
  textarea?: boolean;
  value?: string | string[];
  onChangeInput?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Input = ({
  id,
  inputRef,
  textareaRef,
  type = 'text',
  additionalClasses,
  name,
  placeholder,
  textarea,
  value,
  onChangeInput,
  onChangeTextarea
}: InputProps) => {
  const sharedClasses =
    'w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 bg-gray-100 text-gray-700';

  if (type === 'checkbox') {
    return (
      <input
        id={id}
        ref={inputRef}
        type={type}
        className={`accent-gray-900 ${additionalClasses || ''}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
    );
  }

  return !textarea ? (
    <input
      id={id}
      ref={inputRef}
      type={type}
      className={`${sharedClasses} ${additionalClasses || ''}`}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
    />
  ) : (
    <textarea
      id={id}
      ref={textareaRef}
      className={`${sharedClasses} ${additionalClasses || ''}`}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChangeTextarea}
    />
  );
};
