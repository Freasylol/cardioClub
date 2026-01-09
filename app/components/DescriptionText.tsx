import styles from "../styles/DescriptionText.module.css";

export default function DescriptionText({
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