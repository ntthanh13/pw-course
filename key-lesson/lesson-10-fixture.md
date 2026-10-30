# Bài học 10: Fixture
## Fixture là gì và dùng để làm gì
Fixture trong playwright là cơ chế để:
- Tái sử dụng setup/teardown code
- Chia sẻ object giữa các test
- Tạo môi trường test độc lập
- Mở rộng built-in fixtures (page, context, browser)

## Built-in fixture
1. **Page**
Page là 1 tab trong 1 trình duyệt. Page là thông dụng nhất trong web test playwright
2. **Context**
Trong mỗi trình duyệt sẽ có 1 profile, context được hiểu như 1 profile cho 1 trình duyệt, từ đó có thể mở nhiều tab(page) trên cùng 1 trình duyệt
```typescript
test('Multi tab', async ({ context }) => {
    const page1 = await context.newPage();  // tạo tab 1 bằng context
    const page2 = await context.newPage();  // tạo tab 2 bằng context

    await page1.goto('https://www.google.com/');    // tab 1 đến google
    await page2.goto('https://www.youtube.com/');   // tab 2 đến youtube
});
```
3. **Browser**
Browser là trình duyệt, dùng browser để có thể tạo được nhiều profile, cho phép mở nhiều trình duyệt
```typescript
test('Multi browser', async ({ browser }) => {
    const context1 = await browser.newContext();    // tạo profile 1 (context) từ browser
    const context2 = await browser.newContext();    // tạo profile 2 (context) từ browser

    const page1 = await context1.newPage();  // tạo page 1 bằng context
    const page2 = await context2.newPage();  // tạo page 2 bằng context
    
    await page1.goto('https://www.google.com/');    // browser 1 đến google
    await page2.goto('https://www.youtube.com/');   // browser 2 đến youtube
});
```

## Custom fixture
Custom fixture được dùng để giải quyết các bài toán setup/teardown trong các bài code thực tế

```typescript
// fixture để mở rộng test bằng cách đưa action của HomePage vào
import {test as base} from '@playwright/test';
import { HomePage } from '../pom/home.page';

type MyFixture = {
    homePage : HomePage;
}

export const test = base.extend<MyFixture>({
    homePage: async ({page}, use) => {
        // setup
        const homePage = new HomePage(page);
        await homePage.goHome();
        
        // use for run test
        await use(homePage);

        // teardown
        // teardown action here
    }
});
```
---
```typescript
// Tại file run test

```