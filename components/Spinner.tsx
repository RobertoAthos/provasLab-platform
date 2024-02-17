import React from "react";
import cn from "classnames";
import { LuLoader2 } from "react-icons/lu";

type Size = 'sm' | 'md' | 'lg';

interface Configs {
  size?: Size;
  color?: string;
}

export default function Spinner({ size = 'md', color = 'white-300' }: Configs) {
  const sizeClassMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const className = cn(
    'animate-spin',
    `text-${color} fill-${color} mr-2`,
    sizeClassMap[size],
  );
  return (
    <div
      role="status"
    >
      <LuLoader2 className={className} />
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
