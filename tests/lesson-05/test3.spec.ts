import { test } from "@playwright/test";

// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”. 
// 1. Thêm mới 100 todo item có nội dung “Todo <i>”
// 2. Xoá các todo có số lẻ
test('todo list', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 3: Todo page" }).click();
    // 1. Thêm mới 100 todo item có nội dung “Todo <i>”
    const countItem = 10;
    const countList = countItem - 1;
    for (let i = 1; i <= countItem; i++) {
        await page.getByPlaceholder("Enter a new task").fill(`Todo ${i}`);
        await page.getByRole('button', { name: "Add Task" }).click();
    }
    // 2. Xoá các todo có số lẻ
    page.on('dialog', async dialog => dialog.accept());
    for (let j = countList; j >= 0; j--) {
        console.log(j);
        if ((j + 1) % 2 !== 0) {
            await page.locator(`button[onclick='deleteTask(${j})']`).click();
        };
    }
    // Giải thích: nếu delete từ trên xuống, bộ đếm có khả năng bị lệch (delete(0)= Todo1 => delete(0)= Todo2)
    // Trường hợp này cần kiểm tra bằng cách tách chuỗi để so, khó hơn 
    // => quyết định sử dụng đếm ngược để giữ nguyên id của list trước khi thực hiện xóa phần tử
});