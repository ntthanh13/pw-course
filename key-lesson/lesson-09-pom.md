# Bài học: POM - Page Object Model
## Typescript và Javascript
Typescript nên dùng vì có nhiều ưu điểm hơn:
- Có hệ thống kiểu dữ liệu và kiểm soát kiểu dữ liệu nghiêm ngặt hơn
- Phát hiện lỗi sớm
- Interface and type alias
- OOP features
- Generic

### Định nghĩa kiểu dữ liệu trong typescript
Trong typescript, có thể định nghĩa kiểu dữ liệu thông qua `type` hoặc `interface`
```typescript
type address = {
    city: string,
    no: string,
    street: string
}
const address1: address = {
    city: "HCM",
    no: "132",
    street: "Tran Hung Dao"
}
const address2: address = {
    city: "HN",
    no: "12",
    street: "Hoan Kiem"
}
```

### Type và Interface khác nhau như thế nào
1. `Interface` được dùng để định nghĩa cho **object** hoặc **class**. Interface có thể được kế thừa bằng `extend`
```typescript
interface user {
    username: string,
    password: string,
    pin: string
}
const user1: user = {
    username: "user1",
    password: "aaa",
    pin: "1111"
}

interface member extends user {
    member: boolean
}
const member1: member = {
    username: "member1",
    password: "abc@123",
    pin: "2222",
    member: true
}
```
2. `Type` linh hoạt hơn, có thể đặt cho **bất kì kiểu nào** (union, kiểu nguyên thủy). Có thể kết hợp type bằng `&`
```typescript
// Union type: chỉ nhận một trong các giá trị
type OrderStatus = "pending" | "shipping" | "delivered" | "cancelled";
// Object (giống interface)
type Product = {
    id: number;
    name: string;
    price: number;
};
let oderStatus: OrderStatus = "shipping";
type Discount = {
    discountPercent: number;
};

type SaleProduct = Product & Discount;
const item: SaleProduct = {
    id: 10,
    name: "Áo thun",
    price: 200000,
    discountPercent: 20,
};
```
3. Nếu khai báo bị trùng tên, `interface` sẽ tự gộp lại, còn `type` sẽ báo lỗi
> Dùng interface khi mô tả object, model dữ liệu, props của component, hoặc khi viết thư viện cần cho người khác mở rộng.  
Dùng type khi cần union, kết hợp nhiều kiểu, hoặc các kiểu phức tạp (generic, conditional types).
---

## POM là gì  
POM (Page Object Model) là cách tổ chức object theo từng page để quản lý code dễ hơn  
POM thường có 3 phần chính:
- Thuộc tính (propety)
- Khởi tạo (constructor)
- Hành động (method)

## Kế thừa
Kế thừa giúp cho việc các class con có thể sử dụng lại các thuộc tính của class cha mà không cần khai báo lại
```typescript
// Home page
export class HomePage {
    // propeties
    page: Page;
    baseUrl: string;
    titleLoc: Locator;
    lesson01Loc: Locator;
    //constructor
    constructor(page: Page) {
        this.page = page;
        this.baseUrl = "https://material.playwrightvn.com/";
        this.titleLoc = page.locator("//h1");
        this.lesson01Loc = page.locator("//a[@href='01-xpath-register-page.html']");
    };
    //method
    async go() {
        await this.page.goto(this.baseUrl);
    };
    async clickLesson01() {
        await this.lesson01Loc.click();
    };
};
```

```typescript
// Register page
export class RegisterPage extends HomePage {
    titleLoc: Locator;
    usernameLoc: Locator;
    emailLoc: Locator;

    constructor(page: Page) {
        super(page);
        this.titleLoc = page.locator("//h1");
        this.usernameLoc = page.locator("//input[@id='username']");
        this.emailLoc = page.locator("//input[@id='email']");
    }

    async inputUsername(username: string) {
        this.usernameLoc.fill(username);
    }
    async inputEmail(email: string) {
        this.emailLoc.fill(email);
    }
}
```
---
## POM Manager
POM manager được sử dụng để quản lý và khởi tạo tất cả các POM trong code base  
Cấu trúc POM manager có thể là:
```typescript
// Các POM
class HomePage{ }
class RegisterPage{ }
// POM manager
class PomManager {
    // khai báo các POM
    homePage : HomePage;
    registerPage : RegisterPage;
    // khởi tạo POM
    constructor(page:Page){
        this.homePage = new HomePage;
        this.registerPage = new RegisterPage;
    }
}
// Test gọi POM manager
test('pom manager', async({page}) => {
    const pom = new PomManager;
});
```
---
## POM return other POM
Là một design pattern, mục tiêu là khi 1 page có tương tác sang page mới (trigger point), sẽ return sang page đó để sử dụng riêng trên page mới  
Ưu điểm của cách design này là **hạn chế các bước khởi tạo** và tránh việc sử dụng extend có thể gây confuse. Việc khởi tạo page mới được thực hiện chỉ khi có trigger sang page đó
```typescript
// Home page
export class HomePage {
    // propeties
    //constructor
    //method
    async clickLesson01() {
        await this.lesson01Loc.click();
        return new RegisterPage(page);  // tạo pom mới tại bước này
    };
};
// Test
test('pom return pom', async({page}) => {
    const homePage = new HomePage(page);
    let registerPage : RegisterPage;    // tạo biến registerPage với kiểu dữ liệu là 1 class, chưa tạo

    regiterPage = await homePage.clickLesson01();   // sau khi click vào page register sẽ khởi tạo cho registerPage
    // code sử dụng register page
})
```