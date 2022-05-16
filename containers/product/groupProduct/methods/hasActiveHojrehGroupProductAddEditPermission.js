export function hasActiveHojrehGroupProductAddEditPermission(
  userInfo,
  activeHojreh
) {
  let shop = userInfo.shops.filter((value) => value.slug === activeHojreh)[0];
  return shop.has_product_group_add_edit_permission;
}
