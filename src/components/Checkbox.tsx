import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="text-gray-900 font-medium">Checkbox label</span>
    </label>
  );
}
