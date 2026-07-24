import React from 'react';
import './Button.css';

/**
 * Button component with support for variants, sizes, and full-width layout.
 * Built with a focus on modern aesthetics and accessibility.
 */

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  // Constructing class names following the requested pattern
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const fullWidthClass = fullWidth ? 'btn--full-width' : '';

  const combinedClasses = [
    'btn',
    variantClass,
    sizeClass,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
