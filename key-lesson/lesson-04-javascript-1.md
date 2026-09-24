> Ngày tạo: 15/09/2026 - ThanhNT
# Bài 4: Javascript (tiếp theo)

## Object
### Object là gì
Object là 1 kiểu dữ liệu dùng để lưu tập hợp các **key-value**
> Thay vì phải khai báo nhiều biến, việc khai báo 1 biến (thuộc tính) chứa nhiều thông tin con giúp quản lý và sử dụng biến dễ hơn
Cách khai báo object:
1. Object literal
``` typescript
let xe {
    hang: "Honda",
    mau: "Trắng",
    namSanXuat: 2020
};
```
2. Dùng `new Object()`
``` typescript
let xe = new Object()
xe.hang = "Honda";
xe.mau = "Trắng";
xe.namSanXuat = 2020;
```
> key-value thường là string, nếu có ký tự đặc biệt hoặc dấu cách thì cần dùng **' '**

### Truy xuất dữ liệu từ object
``` typescript
let xe {
    hang: "Honda",
    mau: "Trắng",
    'nam san xuat': 2020
};
console.log(xe.hang);
console.log(xe['mau']);
console.log(xe["nam san xuat"]);
```

### Gán giá trị mới cho object
``` typescript
let xe {
    hang: "Honda",
    mau: "Trắng",
    'nam san xuat': 2020
};

xe.mau = "Đen"; // gán giá trị mới cho màu
console.log(xe.mau);

// gán giá trị cho 1 thuộc tính chưa tồn tại -> tự thêm thuộc tính vào object
xe.tenXe = "Air Blade";
```
### Xóa thuộc tính trong object
``` typescript
let xe {
    hang: "Honda",
    mau: "Trắng",
    'nam san xuat': 2020
};

delete xe["nam san xuat"];
```

### Object lồng nhau
``` typescript
let sinhVien {
    ten: "Thành",
    tuoi: "30",
    diaChi: {
        soNha: "22",
        duong: "DDH",
        phuong: "TNP",
        thanhPho: "HCM",
    }
};

console.log(sinhVien.diaChi.thanhPho); // In ra "HCM"
```
> Chỉ nên tổ chức object lồng nhau tối đa 3 cấp

## Array
### Array là gì
**Array (mảng)** là kiểu dữ liệu dùng để lưu trữ một **danh sách có thứ tự** các giá trị
```
let monHoc = ["Toán", "Lý", "Hóa"];
```
> Array được bắt đầu từ **index=0**

### Khai báo array
```typescript
let soLe = [1,3,5];
let soChan = new array ("2","4","6");
```
> Array có thể chứa nhiều kiểu dữ liệu khác nhau, nhưng nên dùng chung kiểu để dễ quản lý

### Truy xuất dữ liệu từ mảng
```typescript
// lấy dúng phần tử theo index
console.log(soLe[0]);

// lấy phần tử cuối cùng
console.log(soLe[soLe.length - 1]);

// đếm số phần tử trong chuỗi
console.log(soLe.length);
```

### Gán giá trị của mảng
```typescript
soLe[1] = 9; // gán phần tử thứ 2 (index 1)
console.log(soLe); // [1,9,5]
```

### Thêm, xóa phần tử
```typescript
// Thêm vào cuối mảng dùng .push()
soLe.push(11);

// Xóa ở cuối mảng dùng .pop()
soLe.pop();

// Thêm vào đầu mảng dùng .unshift()
soLe.unshift(7);

// Xóa ở đầu mảng dùng .shift()
soLe.shift();
```

### Kết hợp array với loop
Dùng để xử lý hàng loạt dữ liệu
```typescript
let diemSo = [3, 5, 10, 8, 4, 7];
for (let i = 0; i < diemSo.length; i++){
    console.log(`Học sinh ${i+1}: ${diemSo[i]} điểm`);
}
```

## Function
### Function là gì
Function là một hàm dùng để tái sử dụng 1 đoạn code nhiều lần -> khi cần sửa chỉ cần sửa 1 chỗ

### Khai báo function
Khai báo bằng Function
```typescript
function chaoMung() {
    console.log ("Hello");
    console.log ("==============");
}
```
### Quy tắc đặt tên function
- Dùng camelCase
- Nên bắt đầu bằng động từ
- Tên phải diễn tả hành động mà hàm thực hiện

### Function với tham số
Khai báo tham số trong `()`
```typescript
function chaoMung(soThuTu, tenBaiHoc){
    console.log("Hello");
    console.log("========================");
    console.log(`Bài số ${soThuTu}: ${tenBaiHoc}`);
}
```
> Phân biệt parameter (tham số) và argument (đối số)
> - Parameter là tên biến đặt trong () khi khai báo function
> - Argument là giá trị thực tế được truyền vào để thực thi function
