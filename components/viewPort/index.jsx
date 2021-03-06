// node libraries
import React from "react";

const useViewport = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (process.browser) {
      setWidth(window.innerWidth);
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  // Return the width so we can use it in our components
  return { width };
};
// export
export default useViewport;
