# Array utils function
## Hàm map
Hàm `map` dùng để tạo hàm mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về **mảng mới có cùng độ dài**
```typescript
const number = [1, 2, 3];
const double = number.map(num => num * 2); // tất cả các giá trị trong number được nhân 2

console.log(number); // [1, 2, 3]
console.log(double); // [2, 4, 6]
```

```typescript
const hocSinh = ["An", "Bình", "Cường"];
const sinhVien = hocSinh.map((ten, index) => ({
    id: `SV00${index + 1}`,
    tenSinhVien: ten
}));
console.log(sinhVien); // In ra tất cả sinhVien
// [
//   { id: 'SV001', tenSinhVien: 'An' },
//   { id: 'SV002', tenSinhVien: 'Bình' },
//   { id: 'SV003', tenSinhVien: 'Cường' }
// ]
```

## Hàm filter
Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàm callback. Trả về **mảng đã được lọc**
```typescript
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const filter = number.filter(num => num % 2 !== 0) // lọc ra số lẻ

console.log(number); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(filter); // [1, 3, 5, 7]
```
```typescript
const user = [
    { id: 101, ten: "An", tuoi: 18 },
    { id: 102, ten: "Bình", tuoi: 20 },
    { id: 103, ten: "Cường", tuoi: 22 },
    { id: 104, ten: "Dương", tuoi: 17 },
    { id: 105, ten: "Hoàng", tuoi: 24 }
]
// Tìm các user trên 18 tuổi
const locTuoi = user.filter(filterAge => filterAge.tuoi > 18);
console.log(locTuoi);

```

## Hàm find
Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện, nếu ko tìm được trả về undefined
```typescript
const number = [2, 4, 5, 6, 7, 8];
const firstEven = number.find(num => num % 2 !== 0) // Trả ra phần tử số lẻ đầu tiên
console.log(firstEven); // 5
```
```typescript
const user = [
    { id: 101, ten: "An", tuoi: 18 },
    { id: 102, ten: "Bình", tuoi: 20 },
    { id: 103, ten: "Cường", tuoi: 22 },
    { id: 104, ten: "Dương", tuoi: 17 },
    { id: 105, ten: "Hoàng", tuoi: 24 }
]
// Tìm user theo id
const userId = 103;
const findId = user.find(findId => findId.id === userId);
console.log(findId);
// Tìm user dưới 18 tuổi
const findAge = user.find(findAge => findAge.tuoi < 18);
console.log(findAge);
```

## Hàm reduce
Duyệt qua mảng và tích lũy các phần tử thành **một giá trị duy nhất** dựa trên hàm callback
```javascript
const array = [1, 2, 3, 4, 5];
let sum = array.reduce((total, currentValue) => {
    console.log(total);
    return total + currentValue; // sau khi return sẽ gán giá trị tính được cho total: total = total + currentValue
}, 0); // Khởi điểm với total = 0
console.log(sum);
```
```javascript
const gioHang = [
    { id: 1, tenSanPham: "Nước ngọt", gia: 10000, soLuong: 3 },
    { id: 2, tenSanPham: "Mì gói", gia: 2500, soLuong: 10 },
    { id: 3, tenSanPham: "Trứng", gia: 27000, soLuong: 1 },
]
const thanhTien = gioHang.reduce((tongGia, sanPham) => {
    // tongGia = tongGia + sanPham.gia * sanPham.soLuong;
    return tongGia + (sanPham.gia * sanPham.soLuong); // tính tổng từng sản phẩm rồi cộng vào tổng tiền
}, 0);
console.log(thanhTien);
```

## Hàm some
Kiểm tra xem có ít nhất 1 phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false
```javascript
const array = [1, 2, 3, 4, 5];
const hasEven = array.some(num => num % 2 === 0); // mảng có số chẵn ko
console.log(hasEven); // true
const hasTen = array.some(num => num === 10); // mảng có số 10 ko
console.log(hasTen); // false
```