export const showFilter = (data) => {
    let message = {
        Price: "ارزانتر",
        "-Price": "گرانتر",
        "-DiscountPrecentage": "بیشترین تخفیف",
        "-DateCreate": "تازه ها",
    };
    if (data == undefined) {
        return "مرتبط‌ترین";
    }
    return message[data];
};