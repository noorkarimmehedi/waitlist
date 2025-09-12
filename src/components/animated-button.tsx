'use client';

import styles from './animated-button.module.css';

interface AnimatedButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export default function AnimatedButton({ 
  onClick, 
  disabled = false, 
  children, 
  className = '',
  type = 'button'
}: AnimatedButtonProps) {
  const PlusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  );

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.animatedButton} font-normal ${className}`}
      aria-label="Join Waitlist"
    >
      <span className={styles.corners}>
        <span>
          <PlusIcon />
        </span>
        <span>
          <PlusIcon />
        </span>
        <span>
          <PlusIcon />
        </span>
        <span>
          <PlusIcon />
        </span>
      </span>
      <span>{children}</span>
    </button>
  );
}
