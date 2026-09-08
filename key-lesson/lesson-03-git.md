> Ngày tạo: 08/09/2026 - ThanhNT
# Nội dung bài 3: Git (tiếp tục)

## Git un-stage
- Khi có file đang trong stage nhưng ko muốn đưa vào commit nữa => dùng un-stage để gỡ file khỏi stage
- Gỡ file khỏi stage bằng câu lệnh
```
git restore --stage {tên file} //gỡ 1 file
git restore --stage {tên file 1} {tên file 2} //gỡ nhiều file 
```
- Gỡ toàn bộ file khỏi stage bằng câu lệnh
```
git restore --stage .
```
- Tương tự như add, nếu file nằm trong folder con thì cần thêm folder chứa file trong câu lệnh un-stage
```
git restore --stage {tên folder}/{tên file}
```

## Git un-commit
- Un-commit được dùng để đưa commit cuối cùng về staging
```
git reset --soft HEAD~1
```
> Nếu muốn đưa nhiều hơn 1 commit về staging, thay số "1" thành số lượng commit mà muốn đưa về staging `git reset --soft HEAD~{số lượng commit}`
- Nếu muốn đưa thẳng từ repo về working space, dùng
```
git reset HEAD~{số lượng commit}
```
- Commit đầu tiên **không thể bị reset**, nếu muốn reset chỉ có thể xóa thư mục rồi `git init` lại