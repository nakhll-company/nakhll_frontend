import styles from "./badge.module.scss";

const CustomBadge = ({
  title,
  customBadgeClass,
  customBadgeStyle,
  backgroundColor,
  color,
  otherProps,
}) => {
  return (
    <span
      className={`${styles.customBadge}
        ${customBadgeClass !== undefined && customBadgeClass}`}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        ...customBadgeStyle,
      }}
      {...otherProps}
    >
      {title}
    </span>
  );
};
// export
export default CustomBadge;
