# Bài học 7: Playwright (tiếp theo)

## Test group, test suite
Dự án thực tế có rất nhiều cấp bậc (module, feature, testcase)   
Việc tạo các nhóm testcase có cùng mục đích gọi là test suite  
Khi run test suite sẽ run tất cả các test case bên trong
```typescript
test.describe('tên test suite', async () => {   // test.describe để đặt cho test suite
    test('testcase 1', async ({ page }) => {
        // nội dung testcase 1
    });
    test('testcase 2', async ({ page }) => {
        // nội dung testcase 2
    });
});
```
---
 
## Hook
Khi thực hiện automation test, thường các test case sẽ có cùng các thao tác khởi đầu (ví dụ: vào trang a.com)  
Hook được đặt trong playwright là 1 thời điểm đặc biệt trong lúc chạy test  
Syntax: 
```typescript
test.beforeEach(async ({ page }) => { });   // trước khi chạy từng test
test.afterEach(async ({ page }) => { });    // sau khi chạy từng test

test.beforeAll(async ({ page }) => { });    // trước khi chạy tất cả các test
test.afterAll(async ({ page }) => { });     // sau khi chạy tất cả các test 
```
Hook được **đặt trong testsuite** nào thì chỉ chạy trong testsuite đó  
Hook được **đặt ở ngoài testsuite** thì sẽ áp dụng cho toàn bộ các testsuite  

**Vị trí đặt hook trong các test**
```typescript
test.describe('test suite', async () => {
  test.beforeAll(async () => {
    // code
  });
  test.beforeEach(async () => {
    // code
  });
  test.afterEach(async () => {
    // code
  });
  test.afterAll(async () => {
    // code
  });

  test('test 1', async () => {
    // nội dung test 
  });
  test('test 2', async () => {
    // nội dung test 
  });
});
```
---

## Assertion
Assertion là kiểm tra xem một điều gì đó có đúng như mong đợi hay ko  
Automation test cần assertion để biết có đúng hay ko

### Generic assertion (từ thư viện expect)
- expect (giá trị) = (giá trị)  
Ví dụ: 
```typescript
  const headingText = await page.locator("//h1[@id='self']").textContent();
  expect(headingText).toBe("User Registration");
```

### Web first assertion  
Web-first assertion là giải pháp giải quyết các vấn đề waiting cho web

- expect (phần tử) có *giá trị*  
```typescript
  await expect(page.locator("//h1[@id='self']")).toHaveText("User Registration");
```

Ở **generic assertion**, người dùng cần tự lấy phần tử trên web, sau đó đem đi kiểm tra xem giá trị có đúng expect hay không. Phương pháp này đã cũ và không còn tối ưu vì: 
- Việc chờ page load toàn bộ tài nguyên có thể mất thời gian, thao tác tự lấy của user có thể sẽ được thực hiện khi tài nguyên chưa tải xong => kết quả test fail dù không có lỗi của system
- Trong trường hợp hard wait time, nếu tài nguyên được tải và lấy sớm hơn thời gian chờ => thời gian chờ còn lại bị lãng phí, gây lãng phí tài nguyên hệ thống automation  

**Web first assertion** của playwright cho phép người dùng giao lại nhiệm vụ chờ và lấy phần tử cho playwright (auto wait). Hệ thống của playwright sử dụng bộ mã chromium clone dùng riêng để có thể giao tiếp 2 chiều (giữa playwright và browser) => Sau khi tài nguyên được tải thành công sẽ lấy phần tử và thực hiện tiếp bước kế => tối ưu thao tác và tài nguyên
> Timeout cố định của playwright là 5s