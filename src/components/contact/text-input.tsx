import React from 'react';

interface TextInputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
  isTextArea?: boolean;
  minLength?: number;
  maxLength?: number;
  rows?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  type,
  label,
  placeholder,
  required = false,
  isTextArea = false,
  minLength,
  maxLength,
  rows,
}) => {
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-sm font-medium">
        {label}
      </label>
      <InputComponent
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        rows={rows}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextInput;