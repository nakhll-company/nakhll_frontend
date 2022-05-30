export const handelAccording = (accord, icon) => {
    
    const element = document.getElementById(accord);
    if (element.style.height == "0px") {
      element.style.height = "unset";
      document.getElementById(icon).className = "fas fa-angle-up";
    } else {
      element.style.height = "0";
      element.style.overflow = "hidden";
      document.getElementById(icon).className = "fas fa-angle-down";
    }
    
  };