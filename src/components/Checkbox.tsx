import React from 'react';

type CheckboxProps = {
  onChange: () => void;
};

const Checkbox = ({ onChange }: CheckboxProps) => {
  return <input
    className='text-5xl bg-zinc-300  flex flex-row w-8 h-8 border rounded-full appearance-none border-black checked:bg-zinc-800' 
    type="checkbox"
    onChange={onChange} 
   />;
};

export default Checkbox;