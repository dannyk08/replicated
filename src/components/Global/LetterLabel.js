import React from 'react';

import './LetterLabel.css';
export default function LetterLabel({
  children,
  className,
}) {
  return (
    <p className={`letter-label ${className || ''}`}>
      {children}
    </p>
  )
}
