import { test } from "@playwright/test";

// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
// 1. Sản phẩm 1: 2 sản phẩm
// 2. Sản phẩm 2: 3 sản phẩm
// 3. Sản phẩm 3: 1 sản phẩm

test('add to cart', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 2: Product page" }).click();

    // 1. Sản phẩm 1: 2 sản phẩm
    await page.locator("button[class='add-to-cart'][data-product-id='1']").click({ clickCount: 2 });
    // 2. Sản phẩm 2: 3 sản phẩm
    await page.locator("button[class='add-to-cart'][data-product-id='2']").click({ clickCount: 3 });
    // 3. Sản phẩm 3: 1 sản phẩm
    await page.locator("button[class='add-to-cart'][data-product-id='3']").click();
});