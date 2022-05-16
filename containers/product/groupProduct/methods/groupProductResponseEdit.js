import { errorMessage } from "../../../../utils/toastifyMessage";
import { hasActiveHojrehGroupProductAddEditPermission } from "./hasActiveHojrehGroupProductAddEditPermission";

export function groupProductResponseEdit(userInfo, activeHojreh, router) {
  let hasPermission = hasActiveHojrehGroupProductAddEditPermission(
    userInfo,
    activeHojreh
  );
  if (hasPermission) {
    return router.push(`/fp/product/groupProductEdit/`);
  } else {
    return errorMessage(`.این ویژگی مخصوص کاربران حرفه ای می باشد`);
  }
}
