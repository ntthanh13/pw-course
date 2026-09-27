import { test } from "@playwright/test";

// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page (có đủ các element)”
// 1. Nhập thông tin cho các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography
// 2. Click button Register
test('register page', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole('link', { name: "Bài học 1: Register Page (có đủ các element)" }).click();
    // 1. Nhập thông tin cho các field
    // Username
    await page.locator("//input[@id='username']").fill("username_test_1");
    // Email
    await page.locator("//input[@id='email']").fill("test_1@gmail.com");
    // Gender
    await page.locator("//input[@id='male']").check();
    // Hobbies
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//input[@id='cooking']").check();
    // Interests
    await page.locator("//select[@id='interests']").selectOption(["technology", "music", "sports"]);
    // Country
    await page.locator("//select[@id='country']").selectOption("australia");
    // Date of Birth
    await page.locator("//input[@id='dob']").fill("1996-05-20");
    // Profile Picture
    await page.locator("//input[@id='profile']").setInputFiles("D:/CodePlaywright/Demo-file/ava-1.png")
    // Biography
    await page.locator("//textarea[@id='bio']").fill("Throughout my career, I have worked on complex systems in domains such as banking, e-wallet, and enterprise platforms.");

    // 2. Click button Register
    await page.getByRole('button', { name: "Register" }).click();
});