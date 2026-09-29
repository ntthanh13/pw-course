# Bài học 6: Javascript - Class
## Class
- Class là một thiết kế dùng để tạo ra các object có cùng đặc điểm và hành vi
- Class được sử dụng để hạn chế việc lặp lại code cho việc khai báo object
- Cú pháp khai báo:
```javascript
class TenClass {
    // Nội dung class ở đây
}
```
### Thuộc tính của class
- Trong class sẽ có các thuộc tính được sử dụng cho các object
```typescript
class HocSinh {
    ten: string;
    tuoi: number;
}
```

### Constructor
- Dùng để khởi tạo các thuộc tính của class
- Cấu trúc constructor: 
    - `constructor`: tên hàm (mặc định và có sẵn)
    - (`các tham số`): các tham số được truyền vào constructor để đặt giá trị cho thuộc tính của class
```typescript
class HocSinh {
    ten: string;
    tuoi: number;
    truong: string;

    constructor(ten1: string, tuoi1: number) {
        this.ten = ten1;        // this.ten đang trỏ vào thuộc tính "ten" của class, ten1 là tham số được định nghĩa khi gọi contructor
        this.tuoi = tuoi1;      // tương tự với thuộc tính "ten"
        // thực tế khi gọi hàm constructor các tham số được đặt tên tương tự với thuộc tính để dễ làm việc
        this.truong = "SPKT";   // nếu trường hợp thuộc tính là cố định trong lúc tạo object, có thể khai báo thẳng trong hàm khởi tạo
    }
};

const hocSinh1 = new HocSinh("An", 18);
const hocSinh2 = new HocSinh("Bình", 19);
```

### Method
Đối với 1 class, ngoài các thuộc tính thì có thể sẽ có những hành động (method)
```typescript
class HocSinh {
    ten: string;
    tuoi: number;
    truong: string;

    constructor(ten1: string, tuoi1: number) {
        this.ten = ten1;      
        this.tuoi = tuoi1; 
        this.truong = "SPKT";
    }
    // chuyenTruong là 1 hàm được gọi để thực hiện các hành động (method) khi được gọi từ object
    chuyenTruong(truongMoi: string) {
        this.truong = truongMoi;
    }
};
const hocSinh1 = new HocSinh("An", 18);
hocSinh1.chuyenTruong("HUTECH");    // gọi method chuyenTruong
```