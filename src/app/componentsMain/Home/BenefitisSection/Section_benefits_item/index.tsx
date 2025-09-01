import React from 'react';
import '@/app/style/globals.css';

interface BenefitsItemProps {
  title: string;
  description: string;
}

export default function BenefitsItem(props: BenefitsItemProps) {
  return (
    <div className="bg-card   flex flex-col justify-between  p-4 rounded-2xl shadow-lg border ">
      <h5 className="h4 text-primary-black text-xl font-semibold mb-2">
        {props.title}
      </h5>
      <p className="small opacity-75">{props.description} </p>
    </div>
  );
}
