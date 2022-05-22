export const CustomList = ({ className, onClick, title }) => {
  return (
    <li className={`sort-item   ${className && " active"} `}>
      <a onClick={onClick}>{title}</a>
    </li>
  );
};
