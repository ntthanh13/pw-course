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
POM là cách tổ chức object theo từng page để quản lý code dễ hơn