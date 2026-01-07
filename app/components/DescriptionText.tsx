import styles from "../styles/DescriptionText.module.css";

export default function Text({
  children,
  className = "",
  ...props
}) {
  return (
    <p
      className={`${styles.text} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}