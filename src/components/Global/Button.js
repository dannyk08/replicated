import React from 'react';

import './Button.css';

export default function Button({
  children,
  className,
  disabled,
  onClick,
}) {
  return <button
    className={className}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
}
