'use client';

import { subscribe } from '@/lib/api-requests';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from './Button';
import { Form } from './Form';
import { Input } from './Input';

interface FormValues {
  name: string;
  email: string;
}

export const NewsletterForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>();
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    register,
    reset,
    handleSubmit
  } = useForm<FormValues>();

  const onSubmitComment: SubmitHandler<FormValues> = async (data) => {
    await subscribe(data).then(() => {
      setShowSuccessMessage(true);
      reset();
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitComment)}>
      {isSubmitSuccessful ? null : (
        <>
          <h3 className="text-md sm:text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
            Subscribe to my newsletter
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              register={register}
              classes="py-2 px-4"
              name="name"
              placeholder="Name (optional)"
            />
            <Input
              register={register}
              errors={errors}
              classes="py-2 px-4"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mt-8">
            <Button type="submit" disabled={isSubmitting || showSuccessMessage}>
              Send
            </Button>
          </div>
        </>
      )}

      {showSuccessMessage && (
        <div className="grid place-items-center">
          <p className="text-md sm:text-xl font-semibold mt-3 text-center">
            {"You're about to join my newsletter community! 🎉"}
          </p>
          <p className="text-lg sm:text-xl font-semibold mt-3 text-center">
            Please confirm your email address.
          </p>
        </div>
      )}
    </Form>
  );
};
