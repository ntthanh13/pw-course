> Ngày tạo: 21/09/2026
# Playwright basic

## Playwright basic syntax
### Test và step
- **test**: khai báo đơn vị testcase cho playwright
- **step**: đơn vị nhỏ hơn test, dùng để khai báo từng test cho testcase
```typescript
import { test, expect } from '@playwright/test';

test ('tên test', async({page}) => {
    // code của test
    await test.step('step 1', async () => {
    // Code
    });  
});
```
**Note:** 
- Trong 1 testcase có bao nhiêu step thì viết bấy nhiêu step trong code
- Nên có await ở mỗi action trong step
---
### Navigate
Đi tới 1 trang nào đó
```typescript
    await page.goto('https://material.playwrightvn.com/');
```

- Có thể thêm option refer để xác định truy cập từ đâu (ví dụ: google)
```typescript
    await page.goto('https://material.playwrightvn.com/',{
        referer: 'https://google.com',
    });
```
- Option timeout
```typescript
    await page.goto('https://material.playwrightvn.com/',{
        timeout: 10_000
    });
```
- Option wait until
```typescript
    await page.goto('https://material.playwrightvn.com/',{
        waitUntil: 'commit'
    });
```
- Các option waitUntil và trường hợp sử dụng:
    - **commit**: 
        - Nhanh nhất vì chạy xong ngay khi nhận được response từ server và bắt đầu tải tài nguyên
        - Thường dùng khi chỉ cần kiểm tra hệ thống có response hay không, kiểm tra redirect, không quan tâm nội dung trang
        - *Không* nên dùng khi cần tương tác với web
    - **domcontentloaded**: 
        - Nhanh. Chạy xong khi đã parse xong DOM
        - Dùng khi cần tương tác với element ngay
        - Không cần đợi image/css load hết
        - *Không* dùng khi cần kiểm tra font, image,...
    - **load**:
        - Chạy xong sau khi tải tất cả tài nguyên đã xong
        - Dùng khi muốn chắc chắn giao diện hiển thị đầy đủ
        - Cần test UI
        - Cần screenshot
    - **networkidle**:
        - Không khuyên dùng. Nếu trong 500ms không có request nào phát sinh và các request hiện tại đã hoàn thành hết => networkidle chạy xong
        - *Chỉ dùng khi* biết chắc trang sẽ idle hoặc trang load qua AJAX sau khi render
        - Còn không thì không nên dùng vì chậm, không đáng tin cậy và hiếm gặp
---
### Selector
Chọn, thực hiện action đối với 1 element tương ứng
> Reference: https://playwright.dev/docs/locators
```typescript
    page.getByRole('link', { name: 'Bài học 1: Register page' }).click();
    // Nếu có nhiều phần tử cùng loại, sử dụng những cách sau để lấy theo mong muốn: 
    // Lấy phần tử đầu tiên
    page.getByRole('link').first();
    // Lấy phần tử cuối cùng
    page.getByRole('link').last();
    // Lấy phẩn tử thứ n
    page.getByRole('link').nth(n-1); // Index từ 0 như array
```
---
### Locate
Sử dụng để chọn phần tử trên trang
```typescript
page.locator("//input[@id=email]"); // bên trong locator() có thể truyền vào xpath hoặc css selector
```

---
### Click
Dùng để thực hiện action click trên màn hình
```typescript
  await page.goto('https://material.playwrightvn.com/018-mouse.html');
  // get click area
  const clickArea = page.locator("//div[@id='clickArea']");

  // click action
  await clickArea.click();  // click bình thường vào giữa vùng click
  await clickArea.click({ button: "right" }); // click chuột phải
  await clickArea.click({ clickCount: 20 });  // click 20 lần
  await clickArea.click({ force: true });     // force click vào 1 vùng ko thể click, mặc định là false
  await clickArea.click({ modifiers: ['Alt'] });  // click kèm phím Alt
  await clickArea.click({ position: { x: 100, y: 100 } });  // click vào tọa độ x=100, y=100 trong vùng click
  await clickArea.click({ trial: true });  // để kiểm tra vùng đó có thể click hay ko
```
---
### Input (text-based)
```typescript
  await page.goto('https://material.playwrightvn.com/03-input-practice.html');
  // get input field
  const inputUsername = page.locator("//input[@id='username']");

  // input thường
  await inputUsername.fill("thanhnt");  // paste thẳng text vào field

  // input option 
  await inputUsername.fill("thanhnt", {
    force: true,    // bắt buộc nhập ko cần biết field có enable hay chưa
    timeout: 2_000  // timeout sau 2000ms
  });
  // nhập từng ký tự vào field
  await inputUsername.pressSequentially("Nguyen Tien Thanh", {
    delay: 3_000    // thời gian delay giữa những lần nhập ký tự
  });
  // nhấn 1 phím trên bàn phím
  await inputUsername.press("h");
```
---
### Input (date time)
Input date time có các option input tương tự input text
```typescript
  await page.goto('https://material.playwrightvn.com/03-input-practice.html');
  // get input field
  const inputDateTime = page.locator("//input[@id='birthday']");
  const inputDateTimeLocal = page.locator("//input[@id='meeting']");
  const inputTime = page.locator("//input[@id='alarm']");
  const inputMonth = page.locator("//input[@id='start-month']");
  const inputWeek = page.locator("//input[@id='work-week']");

  // input date time: YYYY-MM-DD
  await inputDateTime.fill("1996-05-20");
  // input date time local: YYYY-MM-DDTHH:mm
  await inputDateTimeLocal.fill("1996-05-20T09:30");
  // input time: HH:mm
  await inputTime.fill("09:30");
  // input month: YYYY-MM
  await inputMonth.fill("1996-05");
  // input week: YYYY-Www 
  await inputWeek.fill("1996-W13");   // tuần thứ 13 của năm 1996
```
---
### Selection input
```typescript
test.describe('demo selection input', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/03-input-practice.html');
  });

  test('single checkbox', async ({ page }) => {
    const agreeTerm = page.locator("#agree-terms");
    const subscribe = page.locator("#subscribe");

    // Check checbox
    await agreeTerm.check({ force: true });
    let isChecked = await agreeTerm.isChecked();
    console.log(isChecked);
    // Uncheck checkbox
    isChecked = await subscribe.isChecked();
    console.log(isChecked);
    await subscribe.uncheck();
    isChecked = await subscribe.isChecked();
    console.log(isChecked);
  });

  test('radio checkbox', async ({ page }) => {
    const male = page.locator("input[name='gender'][value='male']");
    const female = page.locator("input[name='gender'][value='female']");

    // Check radio
    await male.check();
    await expect(male).toBeChecked();
    await female.check();
    await expect(male).toBeChecked({ checked: false });
    await expect(female).toBeChecked();
  });

  test('selection', async ({ page }) => {
    const selectOption = page.locator("select[id='country'][name='country']");
    // select by value
    await selectOption.selectOption("vn");
    // select by label
    await selectOption.selectOption({ label: "Japan" });

    // selection with option group
    const selectionGroup = page.locator("select[id='languages'][name='languages']");
    await selectionGroup.selectOption(["vi", "jp", "cn"]);
  });

  test('data list', async ({ page }) => {
    const dataList = page.locator("//input[@id='framework']");
    // fill value in data list
    await dataList.fill("Playwright");
    await expect(dataList).toHaveValue("Playwright");
    // fill value not in data list
    await dataList.fill("Robot Framework");
    await expect(dataList).toHaveValue("Robot Framework");
  });

});
```
---
### Upload file
Các phương thức upload file:
- Single file upload
- Multiple file upload
- Image upload với preview
- Drag and drop
- Advanced Upload với Validation
- Hidden Input Upload (Style Custom)
```typescript
test('single updload', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/030-upload.html");

  const fileInput = page.locator("//input[@id=singlefile");

  await fileInput.setInputFiles("D:/CodePlaywright/Demo-file.txt")
});
```
---
### Hover
Dùng để thực hiện action hover tooltip
```typescript
  const hoverArea = page.locator("//div[@id=tooltip-top");
  await hoverArea.hover();
```
---
### Handle confirmation dialog
Dùng để xử lý các action đối với các dialog trên web page

```typescript
test('demo handle dialog',async({page}) => {
    await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");

    await page.locator("//input[@id='new-task']").fill("test1");
    await page.click("//button[@id='add-task']");

    page.on('dialog', async dialog => dialog.accept());
    const deleteButton = page.locator("//button[text()='Delete']").first();
    await deleteButton.click()
});
```
### Expected
Kết quả mong đợi của test
```typescript
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Tài liệu học automation test/);

    // Expects page to have a heading with the name User Registration.
    await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
```


