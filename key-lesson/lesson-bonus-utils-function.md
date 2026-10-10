# Javascript: String utils function

## Bỏ khoảng trắng
Dùng hàm `trim()`:
- `trim()` : bỏ khoảng trắng 2 đầu
- `trimStart()` : bỏ khoảng trắng bên trái
- `trimEnd()` : bỏ khoảng trắng bên phải
```javascript
let chuoi = " Hello world ";

// "Hello world"
console.log(chuoi.trim());
// "Hello world "
console.log(chuoi.trimStart());
// " Hello world"
console.log(chuoi.trimEnd());
```
---

## Chuyển từ chữ hoa sang thường (ngược lại)
- Thường -> hoa: `toUpperCase()`
- Hoa -> thường: `toLowerCase()`
```javascript
let chuoi = "Hello world";
// HELLO WORLD
console.log(chuoi.toUpperCase());
// hello world
console.log(chuoi.toLowerCase());
```
---

## Kiểm tra chuỗi có bao gồm chuỗi con không
Dùng hàm `includes()`
> Hàm includes có phân biệt hoa thường
```javascript
let chuoi = "Hello world";
console.log(chuoi.includes('Hello'));   // true
console.log(chuoi.includes('hello'));   // false
```
---

## Cắt chuỗi
Dùng hàm `slit()`
```javascript
let email = "thanhnt@gmail.com";
console.log(email.split("@"));
// [ 'thanhnt', 'gmail.com' ]

let dOB = "20/05/1996";
console.log(dOB.split("/"));
// [ '20', '05', '1996' ]
```
---

## Thay thế chuỗi con bằng chuỗi khác
Dùng hàm `replace()`
```javascript
let chuoi = "Hello World";

console.log(chuoi.replace("Hello", "Xin chao"));
// Xin chao World
```