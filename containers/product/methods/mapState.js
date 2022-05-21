export function mapState({ Product, User }) {
  return {
    productList: Product.productList,
    activeHojreh: User.activeHojreh,
    userInfo: User.userInfo,
  };
}
