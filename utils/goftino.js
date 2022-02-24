
export function Goftino(userData) {
    Object.keys(userData).length > 0 && window.addEventListener('goftino_ready', function () {
        Goftino.setUser({
            name: `${userData.user.first_name} ${userData.user.last_name}`,
            phone: `${userData.mobile_number}`,
            about: `${userData.shops[0]} - ${userData.state} - ${userData.big_city} - ${userData.city}`,
            forceUpdate: true
        });
    });
}