'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { subscribe } from 'shared/services';
import { Input, Button, Form } from 'shared/components';

interface FormValues {
  name: string;
  email: string;
}

export const SubscribeForm = () => {
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
          <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
            Subscribe to my newsletter
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
              name="name"
              classes="py-2 px-4"
              placeholder="Name"
              register={register}
            />
            <Input
              name="email"
              classes="py-2 px-4"
              placeholder="Email"
              register={register}
              errors={errors}
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
          <p className="text-lg sm:text-xl font-semibold mt-3 text-center">
            You're about to join my newsletter community! 🎉
          </p>
          <p className="text-lg sm:text-xl font-semibold mt-3 text-center">
            Please confirm your email address.
          </p>
        </div>
      )}
    </Form>
  );
};
