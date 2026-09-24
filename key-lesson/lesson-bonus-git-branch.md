# Bài học thêm: Git branch
## Git branch là gì
`git branch` là lệnh dùng để quản lý các nhánh (branch) trong repository

## Các lệnh git branch thông dụng
| Lệnh | Chức năng hành động |
| --- | --- |
| `git branch` | Liệt kê toàn bộ nhánh ở máy local. Nhánh hiện tại có dấu `*`. |
| `git branch -r` | Liệt kê tất cả các nhánh trên remote server. |
| `git branch -a` | Liệt kê tất cả nhánh ở cả máy local và trên remote (GitHub/GitLab). |
| `git branch -v` | Liệt kê các nhánh local kèm theo thông tin commit mới nhất của từng nhánh. |
| `git branch <tên_nhánh>` | Tạo một nhánh mới từ nhánh hiện tại (không tự động chuyển sang). |
| `git checkout <tên nhánh>` | Chuyển sang nhánh được chọn|
| `git checkout -b <tên_nhánh>` | Tạo nhanh một nhánh mới và tự động chuyển sang nhánh đó. |
| `git switch -c <tên_nhánh>` | Lệnh hiện đại (Git 2.23+) để tạo và chuyển sang nhánh mới. |
| `git branch -m <tên_mới>` | Đổi tên nhánh hiện tại của bạn thành tên mới. |
| `git branch -d <tên_nhánh>` | Xóa một nhánh ở local một cách an toàn (chỉ xóa khi đã merge). |
| `git branch -D <tên_nhánh>` | Ép buộc xóa một nhánh local kể cả khi chưa được merge. |
| `git branch --merged` | Hiển thị danh sách các nhánh đã được gộp (merge) vào nhánh hiện tại.|
| `git branch --no-merged` | Hiển thị các nhánh chưa được gộp vào nhánh hiện tại. |

## Làm việc với remote repository
* **Đẩy nhánh local lên remote lần đầu tiên:**
  ```bash
  git push -u origin <tên nhánh>
  ```
  > Lệnh này giúp thiết lập liên kết (upstream tracking). Những lần sau bạn chỉ cần gõ `git push` hoặc `git pull` khi ở nhánh này.

* **Xóa một nhánh trên remote:**
  ```bash
  git push origin --delete <tên nhánh>
  ```