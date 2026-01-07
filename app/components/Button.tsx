'use client';

import { ButtonHTMLAttributes } from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export default function Button({ 
  children, 
  fontSize, 
  padding, 
  borderRadius, 
  backgroundColor,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={styles.button}
      style={{
        '--button-font-size': fontSize || '1.25rem',
        '--button-padding': padding || '.9375rem 1.5625rem',  
        '--button-border-radius': borderRadius || '.625rem',
        '--button-background-color': backgroundColor || '#4480EA'
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
}
