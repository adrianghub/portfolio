'use client';

import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errors?: Partial<FieldErrorsImpl>;
  name: string;
  value?: string;
  classes?: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const Input = ({
  register,
  errors,
  name,
  value,
  classes,
  type = 'text',
  placeholder,
  textarea,
  required = false,
  onChange
}: InputProps) => {
  const sharedClasses =
    'w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 bg-gray-100 text-gray-700';

  const emailPattern = {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Enter a valid email.'
  };

  const renderInput = () => {
    return !textarea ? (
      <input
        type={type}
        className={
          type !== 'checkbox'
            ? `${sharedClasses} ${classes || ''}`
            : `accent-gray-900 ${classes || ''}`
        }
        placeholder={placeholder}
        {...register?.(name, {
          onChange,
          value,
          required: required
            ? `${name.charAt(0).toUpperCase()}${name.slice(1)} is required.`
            : undefined,
          pattern: name === 'email' ? emailPattern : undefined
        })}
      />
    ) : (
      <textarea
        className={`${sharedClasses} ${classes || ''}`}
        placeholder={placeholder}
        {...register?.(name, {
          onChange,
          value,
          required: required
            ? `${name.charAt(0).toUpperCase()}${name.slice(1)} is required.`
            : undefined
        })}
      />
    );
  };

  return (
    <>
      {renderInput()}
      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-sm text-red-400">{message}</p>
          )}
        />
      )}
    </>
  );
};
