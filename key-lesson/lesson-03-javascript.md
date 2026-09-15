> Ngày tạo: 10/09/2026 - ThanhNT
> Cập nhật: 15/09/2026
# Nội dung bài 3: Javascript (tiếp theo)

## Câu điều kiện
- Dùng để kiểm tra điều kiện đầu vào, nếu đúng thì mới chạy phần code bên trong
- Các loại câu điều kiện trong JS:
    - if
    - if...else
    - if...else if...else
    - switch...case
- Câu điều kiện **if**:
``` Typescript
if (<điều kiện>){
    <code>
}
```

## Vòng lặp
- Dùng để lặp lại 1 đoạn logic (có giới hạn hoặc ko do người đặt điều kiện)
- Các loại vòng lặp:
    - for (i)
    - for (of)
    - for (each)
    - for (in)
    - while
    - do...while
- Vòng lặp **for (i)**
``` typescript
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){
    <code>
}
// <điều kiện khởi tạo> : chạy 1 lần duy nhất khi vòng lặp bắt đầu
// <điều kiện lặp> : điều kiện chạy tiếp vòng lặp, nếu sai thì dừng
// <cập nhật> : chạy vào cuối mỗi vòng lặp, để thay đổi giá trị của biến đếm
```

## JS convention
Các convention phổ biến
- **snake_case**
- **kebab-case** : đặt tên file và folder
- **camelCase** : đặt tên biến
- **PascalCase** : đặt tên class
- **UPPER_CASE**

## In kết hợp giá trị chuỗi và biến với console.log()
- Để in ra kết hợp giá trị kiểu chuỗi và giá trị của biến, ta có hai cách như sau:
    - `console.log("Dùng dấu cộng như sau: " + name);`
    - `console.log("Hoặc dùng dấu phẩy: ", name);`
    - `console.log(`Hoặc thêm giá trị vào chuỗi bằng ${giá trị}`)`
- Để nối chuỗi từ 2 biến, dùng dấu `+`:
```typescript
const str1 = "Hello";
const str2 = "Playwright Viet Nam"
console.log(str1 + str2); // HelloPlaywright Viet Nam
```