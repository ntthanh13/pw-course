> Ngày tạo: 03/09/2026 - ThanhNT
# Nội dung bài 2 - Javascript

## Hello world
- Chương trình đơn giản nhất của tất cả ngôn ngữ lập trình
- Test khả năng chạy code của máy khi mới bắt đầu
- **Câu lệnh in kết quả ra console log:**
```
console.log({nội dung});
```
- **Câu lệnh run file js trên terminal:**
```
node {tên file}.js
```

## Comment
**Dùng để:**
- Giải thích đoạn code
- Vô hiệu hóa/ không chạy đoạn code đó
**Có 2 cách comment**
```typescript
// Comment 1 dòng
/*
Comment
nhiều
dòng
*/
```
Phím tắt: **Ctrl + /**

## Biến và hằng
- Khai báo biến bằng: `let`
```
let a = 10;
```
- Khai báo hằng bằng: `const`
```
const b = 33;
```
- *Khai báo biến (không khuyến khích dùng) bằng* `var`
```
var c = 13;
```
So sánh:
|let|const|var|
|---|-----|---|
|có thể thay đổi|không thể thay đổi|có thể thay đổi|
|phạm vi trong block|phạm vi trong block|phạm vi trong hàm|
|không thể khai báo trùng|không thể khai báo trùng|có thể bị ghi đè khi khai báo trùng|

**=> Nên dùng `const` và `let`, trong trường hợp biến không thay đổi dùng `const`, biến có thay đổi dùng `let`**

## Kiểu dữ liệu
**Gồm 2 kiểu:**
1. Kiểu Nguyên thủy (primitive types)
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt
2. Kiểu Tham chiếu (reference types)
- Object
```typescript
const soNguyen = 10; // number
const soThuc = 1.5; // number
const chuoi = "đây là chuỗi"; // string
const isTrue = true; // boolean
const isFalse = false; // boolean
```
**Có thể kiếm tra kiểu dữ liệu của biến bằng 2 cách:**
1. Đọc code
2. Dùng `typeof {biến}`

## Toán tử so sánh
- `>` : lớn hơn
- `<` : bé hơn
- `>=` : lớn hơn hoặc bằng
- `<=` : bé hơn hoặc bằng
- `===` : so sánh bằng có so kiểu dữ liệu
- `==` : so sánh bằng ko so kiểu dữ liệu
- `!==` : so sánh khác có so kiểu dữ liệu
- `!=` : so sánh khác ko so kiểu dữ liệu

## Toán tử toán học
- `+` `-` `*` `/` như toán học bình thường
- Nếu thực hiện phép chia cho 0 => kết quả sẽ là *Infinity*
- Nếu thực hiện phép tính khác kiểu (số và ko phải số) => kết quả sẽ là *NaN* (Not a number)

## Toán tử logic
- && : AND (tất cả = true thì true)
- || : OR (tất cả = false thì false)
```typescript
( 1>2 && 5>2 ) // false && true => false
( 1>2 || 5>2 ) // false || true => true
```

## Toán tử một ngôi
**Dùng để tính và thay thẳng kết quả vào biến (1 ngôi)**
- `a++` : trả về kết quả trước rồi mới tính giá trị sau
- `++a` : tính gía trị trước rồi mới trả kết quả
- `a--` : trả về kết quả trước rồi mới tính giá trị sau
- `--a` : tính gía trị trước rồi mới trả kết quả
```typescript
let a = 10;
console.log(a++); // in kết quả = 10
console.log(a); // in kết quả = 11
```
```typescript
let a = 10;
console.log(++a); // in kết quả = 11
console.log(a); // in kết quả = 11
```
