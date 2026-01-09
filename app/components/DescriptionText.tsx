import styles from "../styles/DescriptionText.module.css";

interface DescriptionTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function DescriptionText({
  children,
  className = "",
  ...props
}: DescriptionTextProps) {
  return (
    <p
      className={`${styles.text} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}