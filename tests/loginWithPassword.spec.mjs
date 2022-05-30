import {
    test,
    expect
} from "@playwright/test";

test("login with password", async({
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

    // Click text=بازار اجتماعی نخل
    await page.locator("text=بازار اجتماعی نخل").click();
});