import React from 'react';

type CheckboxProps = {
  onChange: () => void;
};

const Checkbox = ({ onChange }: CheckboxProps) => {
  return <input
    className=' bg-zinc-300  flex flex-row w-16 h-16 border rounded-full appearance-none border-black checked:bg-zinc-800' 
    type="checkbox"
    onChange={onChange} 
   />;
};

export default Checkbox;