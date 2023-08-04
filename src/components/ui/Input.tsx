'use client';

import { ErrorMessage } from '@hookform/error-message';
import {
  FieldErrorsImpl,
  Path,
  PathValue,
  UseFormRegister
} from 'react-hook-form';

type InputProps<T> = {
  register: UseFormRegister<T>;
  errors?: Partial<FieldErrorsImpl>;
  classes?: string;
  textarea?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  required?: boolean;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  'name' | 'value'
> & { name: Path<T>; value?: PathValue<T, Path<T>> | undefined };

export const Input = <T extends object>({
  register,
  errors,
  classes,
  textarea,
  onChange,
  onClick,
  required,
  ...props
}: InputProps<T>) => {
  const sharedClasses =
    'w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 bg-gray-100 dark:text-black';

  const emailPattern = {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Enter a valid email.'
  };

  const { type, name, value } = props;

  const renderInput = () => {
    return !textarea ? (
      <input
        type={type}
        className={
          type !== 'checkbox'
            ? `${sharedClasses} ${classes || ''}`
            : `accent-gray-900 ${classes || ''}`
        }
        {...register?.(name, {
          onChange,
          value,
          required: required
            ? `${name.charAt(0).toUpperCase()}${name.slice(1)} is required.`
            : undefined,
          pattern: name === 'email' ? emailPattern : undefined
        })}
        onClick={(e) => {
          e.stopPropagation();
          onClick;
        }}
        {...props}
      />
    ) : (
      <textarea
        className={`${sharedClasses} ${classes || ''}`}
        {...register?.(name, {
          onChange,
          value,
          required: required
            ? `${name.charAt(0).toUpperCase()}${name.slice(1)} is required.`
            : undefined
        })}
        onClick={(e) => {
          e.stopPropagation();
          onClick;
        }}
        {...props}
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
