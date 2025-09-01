import React from 'react';

interface TopicItensProps {
  title: string;
  description: string;
}
export default function TopicItem(props: TopicItensProps) {
  return (
    <div className="p-4  rounded-2xl shadow-lg border bg-card ">
      <h4 className="h4 font-semibold mb-4">{props.title}</h4>
      <p className="small opacity-75">{props.description}</p>
    </div>
  );
}
