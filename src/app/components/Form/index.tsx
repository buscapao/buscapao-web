import { Input } from '@/components/ui/input';
import React, { InputHTMLAttributes } from 'react';
import '@/app/style/globals.css';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  endIcon?: React.ReactNode;
}

export default function CustomInput({
  label,
  endIcon,
  ...props
}: CustomInputProps) {
  return (
    <div>
      <label className="p  block mb-2">{label}</label>
      <div className="relative flex w-full items-center">
        <Input
          {...props}
          className={`
            input-form placeholder:text-grey
            w-full border border-gray-300
            rounded-md bg-gray-50 p-3
            focus:!border-primary-b focus:!bg-gray-100
            focus:!ring-0 focus:!outline-none
            ${endIcon ? 'pr-10' : ''}
          `}
        />
        {endIcon && <div className="absolute right-0 pr-3">{endIcon}</div>}
      </div>
    </div>
  );
}
