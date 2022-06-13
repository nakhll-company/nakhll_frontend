import { test, expect } from "@playwright/test";

test("click on product card and click bu", async ({ page }) => {
  // Go to https://nakhll.com/
  await page.goto("https://nakhll.com/");
  // Click text=عسل با موم 900 گرمی شافی >> nth=3
  await page.locator("text=عسل با موم 900 گرمی شافی").nth(3).click();
  // Go to https://nakhll.com/shop/neil-market-food-store/product/neil-market-food-store-6260540200009-%D8%B9%D8%B3%D9%84-%D8%A8%D8%A7-%D9%85%D9%88%D9%85-900-%DA%AF%D8%B1%D9%85%DB%8C-%D8%B4%D8%A7%D9%81%DB%8C/
  await page.goto(
    "https://nakhll.com/shop/neil-market-food-store/product/neil-market-food-store-6260540200009-%D8%B9%D8%B3%D9%84-%D8%A8%D8%A7-%D9%85%D9%88%D9%85-900-%DA%AF%D8%B1%D9%85%DB%8C-%D8%B4%D8%A7%D9%81%DB%8C/"
  );
  // Click button:has-text("خرید")
  await page.locator('button:has-text("خرید")').click();
});
