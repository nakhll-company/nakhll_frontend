import { ToastContainer } from "react-toastify";


function EmptyLayout({ children }) {
  return <>
  <ToastContainer />
  {children}</>;
}

export default EmptyLayout;
