import { FormEventHandler, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const Form = ({ children, onSubmit }: FormProps) => (
  <form
    onSubmit={onSubmit}
    className="border border-gray-300 rounded-lg p-8 mb-8 w-full md:w-auto"
  >
    {children}
  </form>
);
