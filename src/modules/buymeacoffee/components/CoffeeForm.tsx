import { useState } from 'react';
import { Input } from 'shared/components';

const CoffeeForm = () => {
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [message, setmMessage] = useState('');
  const presets = [1, 3, 5];

  return (
    <>
      {presets.map((preset) => (
        <button key={preset} onClick={() => setQuantity(preset)}>
          {preset}
        </button>
      ))}

      <Input classes="p-4 my-4" placeholder="Value" name="value" />
    </>
  );
};

export default CoffeeForm;
