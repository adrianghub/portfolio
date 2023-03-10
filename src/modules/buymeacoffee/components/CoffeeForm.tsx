'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/shared/components';
import {
  DONATION_VALUE,
  MAX_DONATION_VALUE,
  MIN_INPUT_VALUE,
  PRESETS
} from '../constants';

import coffeeCup from '../../../../public/assets/icons/coffee-cup.svg';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { checkout } from '@/shared/services';

interface FormValues {
  quantity: string;
}

const CoffeeForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number | null>(null);
  const router = useRouter();

  const {
    formState: { errors },
    register,
    reset
  } = useForm<FormValues>();

  function handleChange(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const num = Math.min(MAX_DONATION_VALUE, parseInt(evt.target.value, 10));
    setQuantity(num);
  }

  async function handleCheckout() {
    setError(null);

    try {
      const res = await checkout({ quantity });

      reset();

      if (res.url) {
        router.push(res.url);
      }

      setError(res.error);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        return;
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row xl:flex-col">
      {error && <div>{error}</div>}

      <div className="flex flex-col xl:flex-row items-center justify-between flex-nowrap mb-8 sm:mr-8 xl:mr-0">
        <Image
          src={coffeeCup}
          alt="Coffee cup"
          className="relative right-1 animate-pulse"
        />

        <AiOutlineClose className="my-4 xl:my-0 xl:mx-4 text-xl font-bold" />

        <div>
          {PRESETS.map((preset) => (
            <Button
              key={preset}
              classes="mr-2 last:mr-0 my-4"
              onClick={() => setQuantity(preset)}
            >
              {preset}
            </Button>
          ))}
        </div>
        <Input
          classes="w-[100px] p-4 my-4 xl:my-0"
          onChange={handleChange}
          register={register}
          errors={errors}
          name="quantity"
          type="number"
          value={String(quantity) || ''}
          min={MIN_INPUT_VALUE}
          placeholder="0"
        />
        <Button classes="my-4 xl:my-0" disabled={true} onClick={handleCheckout}>
          Donate{' '}
          {quantity ? (
            <>
              {quantity * (DONATION_VALUE / 100)}€ ({quantity}
              {quantity > 1 ? ' cups' : ' cup'})
            </>
          ) : (
            ''
          )}
        </Button>
      </div>
      <div className="flex-[2_2_0%]">
        <h3 className="text-lg xl:text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
          List of donations
        </h3>
      </div>
    </div>
  );
};

export default CoffeeForm;
