import { useSelector } from "react-redux";
import _ from "lodash";
export const IsLoginUser = () => {
    const userData = useSelector((state) => state.User.userInfo);

    if (_.isEmpty(userData)) {
        console.log(`true`, "true");
        return true;
    } else {
        console.log(`false`, "false");
        return false;
    }
};