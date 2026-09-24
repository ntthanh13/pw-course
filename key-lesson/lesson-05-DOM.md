> Ngày tạo: 17/09/2026
# Bài học 5: DOM terminology

## DOM là gì
**DOM = Document Object Model**

### Element
- Element (hay còn được gọi là thẻ) là một phần tử nhỏ trong 1 trang web
- Cấu trúc của 1 element:
```html
<element key1=value1 key2=value2>text</element>
```
- Element có thể có cấu trúc tự đóng. Ví dụ: `<img src="https...png"/>`
- Có thể lồng nhiều thẻ lại với nhau 
```html
<head>
    <section>
        <div> </div>
        <img src="https...png"/>
    </section>
</head>
```
---
### Các thẻ html thường gặp
> Reference: 
> - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
> - https://material.playwrightvn.com/035-DOM-elements.html
- Thẻ nội dung
    - `<html>`: Thẻ gốc của trang
    - `<head>` : Thẻ chứa nội dung tiêu đề của trang
    - `<body>` : Thẻ chứa nội dung của toàn bộ trang
    - `<section>` : Thường dùng để phân chia nội dung của trang để dễ quản lý 
    - `<div>` : Thường dùng dưới section, cũng dùng để chia nhỏ nội dung để quản lý 
    - `<span>` : Thường dùng cho một text trong 1 dòng
    - `<footer>` : Chứa nội dung cuối trang, thông tin bổ sung,...
    - `<h1> <h2> <h3> <h4> <h5> <h6>` : Các thẻ heading section (h1 là cấp cao nhất và h6 là cấp thấp nhất)
- Thẻ media
    - `<a>` : Thẻ link
    - `<img/>` : Thẻ hình ảnh
```html
<html>
    <head>
        <title>Tiêu đề</title>
    </head>
    <body>
        <section>
            <div>
                <span>Đây là một nội dung</span>
            </div>
            <div>Nội dung 1</div>
            <div>Nội dung 2</div>
            <img src="link hình"/>
        </section>
    </body>
</html>
```
---
### DOM table
Table trong html có cấu trúc riêng gồm `<thead>` và `<tbody>`
```html
<table id="student">
    <thead>     // table header
        <tr>    // table row
            <th>Cột 1</th>
            <th>Cột 2</th>
            <th>Cột 3</th>
        </tr>
    </thead>
    <tbody>     // table body
        <tr>    // table row
            <td>Nội dung cột 1</td> // table data
            <td>Nội dung cột 2</td>
            <td>Nội dung cột 3</td>
    </tbody>
</table>
```

**Lấy Xpaht của table**
- Lấy toàn bộ table: `table[@id='student']`
- Lấy hàng thứ a trong body: `table[@id='student']//tbody/tr[a]`
- Lấy tiêu đề cột thứ b: `table[@id='student']//thead/tr[b]`
- Lấy cột [b] ở hàng [a]: `table[@id='student']//tbody/tr[a]/td[b]`
- Lấy tất cả ô thỏa điều kiện: `table[@id='student']//td[text()='<điều kiện>']`

**Lưu ý**
- Chỉ số của html **bắt đầu từ 1**, không phải 0
    - Hàng đầu tiên: tr[1]
    - Cột thứ 3: td[3]
---
### Thẻ form
Là 1 section dùng để thu thập dữ liệu từ người dùng
```html
<form action="Submit" method="post">
    <div>
        <label>Enter your name: </label>
        <input type="text" name="name" placeholder="Username"/>
        <input type="password" name="name" placeholder="Password"/>
        <button type="Submit">Send</button>
    </div>
</form>
```