import { useSelector } from "react-redux";
import _ from "lodash";
export const IsLoginUser = () => {
    const userData = useSelector((state) => state.User.userInfo);

    if (_.isEmpty(userData)) {

        return true;
    } else {

        return false;
    }
};