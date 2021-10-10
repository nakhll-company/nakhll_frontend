import { errorMessage } from '../../../../containers/utils/message'
import {hasActiveHojrehGroupProductAddEditPermission} from './hasActiveHojrehGroupProductAddEditPermission'
export function groupProductResponse(userInfo, activeHojreh, router) {
    let hasPermission = hasActiveHojrehGroupProductAddEditPermission(userInfo, activeHojreh);
    if (hasPermission) {
        return router.push(`/fp/product/groupProduct/`)
    } else {
        return errorMessage(`.این ویژگی مخصوص کاربران حرفه ای می باشد`)
    }
}