'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'shared/components';
import {
  DONATION_VALUE,
  MAX_DONATION_VALUE,
  MIN_INPUT_VALUE,
  PRESETS
} from '../constants';

import coffeeCup from '../../../../public/assets/icons/coffee-cup.svg';
import Image from 'next/image';

interface FormValues {
  quantity: string;
}

const CoffeeForm = () => {
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [message, setmMessage] = useState('');

  const {
    formState: { errors, isSubmitting },
    register,
    reset,
    handleSubmit
  } = useForm<FormValues>();

  function handleChange(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setQuantity((prevVal) => {
      const valInNum = parseInt(evt.target.value, 10);

      if (valInNum < MIN_INPUT_VALUE) {
        return MIN_INPUT_VALUE;
      }

      if (valInNum <= MAX_DONATION_VALUE / DONATION_VALUE) {
        return valInNum;
      }

      return prevVal;
    });
  }

  return (
    <div className="flex flex-col sm:flex-row xl:flex-col">
      <div className="flex flex-col xl:flex-row items-center justify-between flex-nowrap mb-8 sm:mr-8 xl:mr-0">
        <Image src={coffeeCup} alt="Coffee cup" />

        <span className=" my-4 xl:my-0 xl:mx-4 text-xl font-bold">X</span>

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
          value={quantity}
          min={MIN_INPUT_VALUE}
        />
        <Button classes="my-4 xl:my-0">
          Donate {quantity * (DONATION_VALUE / 100)}€ ({quantity}
          {quantity > 1 ? ' cups' : ' cup'})
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
