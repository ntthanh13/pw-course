> Ngày tạo: 03/09/2026 - ThanhNT
# Nội dung bài 2 - Git

## Git là gì
- **Git**: 
    - Là phần mềm trên máy
    - Dùng để quản lý phiên bản code
    - Dùng để đưa file vào git repo
- **Github**: Là một dịch vụ web để lưu trữ và chia sẻ code
- **Git** + github: quản lý code, version, branch. Multi device code

## 3 Vùng của git
### Working directory: vùng làm việc với file
- Working space thường được bắt đầu với `git init`
- Working space làm trên máy local
- Working space là nơi làm việc với file (tạo, thay đổi, xóa,...)
- Sau khi hoàn thành có thể đưa vào Staging area

### Staging area: vùng chờ, lưu trữ trung gian giữa vùng làm việc và vùng lưu trữ
- File được đua vào trạng thái chuẩn bị commit bằng 
```
git add {tên file}
```
- Nếu có nhiều file thì phân biệt bằng khoảng cách 
```
git add {tên file 1} {tên file 2}
```
- Nếu muốn add toàn bộ thì dùng 
```
git add .
```
> Trong trường hợp *file nằm trong folder con*, có 2 cách:
> 1. Thêm folder directory vào câu lệnh: `git add {folder}/{file}`
> 2. Vào trong folder bằng cd: `cd {folder}` => cd ra ngoài bằng `cd ..`

> Trong trường hợp ở *local không có update* so với phiên bản hiện tại ở staging => `git add` *không thực hiện hành động gì*

### Git repository: đưa file vào commit version mới
- File được commit bằng 
```
git commit -m "{text}"
```
- Mỗi commit sẽ tạo 1 version mới cho git repository

## Cấu hình Git
- Cài đặt mặc định name/email cho tất cả repo: 
```
git config --global user.name "{your name}"
```
```
git config --global user.email "{your email}"
```
- Cài đặt cấu hình cho từng repo: 
```
git config user.name "{your name}"
```
```
git config user.email "{your email}"
```

## Kiểm tra trạng thái của repo:
```
git status
```
- File chưa được add vào stage: **Changes not staged for commit (màu đỏ)**
- File đã được add vào stage: **Changes to be committed (màu xanh)**

## Kiểm tra danh sách commit:
```
git log
```

## Commit convention:
```
{type} : {short decription}
```
***Type là loại commit, bao gồm:***
- **fix**: fix tính năng, testcase
- **feat**: thêm tính năng hoặc testcase mới
- **chore**: sửa lỗi nhỏ lẻ (chính tả, comment) hoặc xóa file ko dùng nữa
*Ví dụ:*
```
git commit -m "fix : TC_002"
```
```
git commit -m "feat : add new TC_003"
```
```
git commit -m "chore : add comment to function"
```
