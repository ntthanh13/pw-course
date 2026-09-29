# Bài học: Git (tiếp theo)
## Git remote
- Remote (hay remote repository) là danh sách các repo được lưu trữ từ xa (remote server) cho phép bạn chia sẻ và làm việc cùng nhiều người
- Mỗi remote được liên kết đến 1 tên ngắn gọn và 1 url
- Câu lệnh để add remote repo: 
```
git remote add origin <url>
```
> Tên ngắn gọn: origin   
> Url: `<url>`

- Câu lệnh để xem các remote hiện có:
```
git remote -v
```

- Câu lệnh để xóa remote:
```
git remote remove <tên remote>
```
---

## Git clone, push, pull
### Git clone
Git clone dùng để clone code từ remote repo về local
```
git clone <repo url>
```
> Repo url nên sử dụng **url ssh** do trước đó config với các remote repo đều dùng ssh key

Trong trường hợp clone code về nhưng bị trùng tên với 1 repo, thêm tên repo mới muốn tạo để clone vào sau câu lệnh
```
git clone <repo url> <tên repo mới>
```
### Git push, pull
Git push dùng để đưa code mới lên remote repo 
```
git push origin main
```

Git pull dùng để lấy code từ remote repo về máy (máy đã liên kết với remote repo)
```
git pull origin main
```
---

## Git ignore
- Dùng để chỉ định các file/folder mà repo ko cần theo dõi
- .gitignore là file cấu hình để repo bỏ qua các file ko cần theo dõi status. Cấu hình bằng cách thêm tên file/foder vào .gitignore

## Git branch
- Branch (nhánh) là cách quản lý code ra nhiều nhánh của git để hạn chế bị conflict code khi nhiều người làm việc cùng nhau trên 1 repo
- Flow làm việc thông thường là: **main -> branch -> code mới lên branch -> merge vào main**  
Các câu lệnh thông dụng của git branch: tham khảo **lesson-bonus-git-branch**