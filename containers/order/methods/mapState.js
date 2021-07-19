export function mapState({ Orders, User }) {
    return {
        ordersList: Orders.ordersList,
        activeHojreh: User.activeHojreh,
    }
}