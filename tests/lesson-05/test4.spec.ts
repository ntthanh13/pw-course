import { test } from "@playwright/test";

// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”.
// 1. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
//  1.1. Field “Title”: điền nội dung ở cột “Tên action”
//  1.2. Field “Content”: điền nội dung ở cột “Mô tả”
// 2. Thực hiện search với keyword “một hoặc nhiều”

test('single updload', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 4: Personal notes" }).click();
    // 1. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
    //  1.1. Field “Title”: điền nội dung ở cột “Tên action”
    //  1.2. Field “Content”: điền nội dung ở cột “Mô tả”
    const actionList = [
        {action: "click", actionDescription: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"},
        {action: "fill", actionDescription: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"},
        {action: "type", actionDescription: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"},
        {action: "hover", actionDescription: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"},
        {action: "check", actionDescription: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"},
        {action: "uncheck", actionDescription: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"},
        {action: "selectOption", actionDescription: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"},
        {action: "press", actionDescription: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"},
        {action: "dblclick", actionDescription: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"},
        {action: "dragAndDrop", actionDescription: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"},
    ];

    for (let i=0; i<actionList.length; i++){
        await page.locator("input[id='note-title']").fill(actionList[i].action);
        await page.locator("textarea[id='note-content']").fill(actionList[i].actionDescription);
        await page.locator("button[id='add-note']").click();
    }
    // 2. Thực hiện search với keyword “một hoặc nhiều”
    await page.locator("input[id='search'][placeholder='Search notes...']").fill("một hoặc nhiều");
});