import {
    test,
    expect
} from "@playwright/test";

test("login and go to banck page", async({
    page
}) => {
    // Go to https://nakhll.com/
    await page.goto("https://nakhll.com/");
    // Click text=ثبت نام / ورود
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://nakhll.com/login/' }*/ ),
        page.locator("text=ثبت نام / ورود").click(),
    ]);
    // Click [placeholder="مثال \: \*\*\*\*\*\*\*0913"]
    await page
        .locator('[placeholder="مثال \\: \\*\\*\\*\\*\\*\\*\\*0913"]')
        .click();
    // Fill [placeholder="مثال \: \*\*\*\*\*\*\*0913"]
    await page
        .locator('[placeholder="مثال \\: \\*\\*\\*\\*\\*\\*\\*0913"]')
        .fill("09139939426");
    // Click button:has-text("ورود")
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://nakhll.com/login/password/' }*/ ),
        page.locator('button:has-text("ورود")').click(),
    ]);
    // Click input[name="user_key"]
    await page.locator('input[name="user_key"]').click();
    // Fill input[name="user_key"]
    await page.locator('input[name="user_key"]').fill("254512");
    // Click text=ادامه
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://nakhll.com/' }*/ ),
        page.locator("text=ادامه").click(),
    ]);
    // Click .LinerProducts_products__algVc.row.px-5 > div > .card > .card-body > ._product_card_price > div > .btn >> nth=0
    await page
        .locator(
            ".LinerProducts_products__algVc.row.px-5 > div > .card > .card-body > ._product_card_price > div > .btn"
        )
        .first()
        .click();
    // Click .LinerProducts_products__algVc.row.px-5 > div:nth-child(2) > .card > .card-body > ._product_card_price > div > .btn
    await page
        .locator(
            ".LinerProducts_products__algVc.row.px-5 > div:nth-child(2) > .card > .card-body > ._product_card_price > div > .btn"
        )
        .click();
    // Click .LinerProducts_products__algVc.row.px-5 > div:nth-child(3) > .card > .card-body > ._product_card_price > div > .btn
    await page
        .locator(
            ".LinerProducts_products__algVc.row.px-5 > div:nth-child(3) > .card > .card-body > ._product_card_price > div > .btn"
        )
        .click();
    // Click text=محصولاتحجره دار شویدوبلاگدرباره ماتماس با مادسته بندی محصولاتمحصولاتحجره دار شوی >> svg >> nth=3
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://nakhll.com/cart/' }*/ ),
        page
        .locator(
            "text=محصولاتحجره دار شویدوبلاگدرباره ماتماس با مادسته بندی محصولاتمحصولاتحجره دار شوی >> svg"
        )
        .nth(3)
        .click(),
    ]);
    // Click button:has-text("ادامه خرید")
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://nakhll.com/cart/address/' }*/ ),
        page.locator('button:has-text("ادامه خرید")').click(),
    ]);
    // Click button:has-text("ادامه و تایید نشانی")
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://nakhll.com/cart/send/' }*/ ),
        page.locator('button:has-text("ادامه و تایید نشانی")').click(),
    ]);
    // Click button:has-text("ادامه")
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://nakhll.com/cart/payment/' }*/ ),
        page.locator('button:has-text("ادامه")').click(),
    ]);
    // Click button:has-text("پرداخت آنلاین")
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://pec.shaparak.ir/NewIPG/?token=199687476782364&AspxAutoDetectCookieSupport=1' }*/ ),
        page.locator('button:has-text("پرداخت آنلاین")').click(),
    ]);
    // Click h1:has-text("پرداخت اینترنتی تجارت الکترونیک پارسیان")
    await page
        .locator('h1:has-text("پرداخت اینترنتی تجارت الکترونیک پارسیان")')
        .click();
});