import styles from "../../../styles/components/custom/badge.module.scss";

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
