# Bài học: GIT
## Merge
Trong git, việc gộp code từ nhánh A vào nhánh B được gọi là merge  
Việc gộp có thể xảy ra 1 vài tình huống:
- 2 người sửa cùng 1 vị trí -> **conflict**
- Có nhiều commit nhỏ lẻ, muốn gộp nhóm lại -> **squash**  

Merge strategy:
- Fast forward:
    - Merge không tạo ra commit merge
    - Xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo nhánh fearture
- Three way merge:
    - Khi merge có tạo ra merge commit
    - Xảy ra khi merge từ nhánh fearture có sự thay đổi ở main trước đó
    - Bước thực hiện khi hiện màn hình VIM:
        1. Bấm phím `ESC`
        2. Gõ `:`
        3. Gõ `wq`
        4. Nhấn `Enter`

Câu lệnh thực hiện: 
```
git merge {nhánh cần merge}
```
---

## Conflict
Conflict xảy ra khi 2 (hoặc nhiều người) sửa cùng 1 chỗ và merge vào cùng 1 file
- Phần ở dưới `<<<<<HEAD` và `===` là thay đổi ở nhánh hiện tại
- Phần ở giữa `===` và `>>>>>` là thay đổi ở nhánh muốn merge
```
<<<<<HEAD
toi o nhanh main
=========
toi o nhanh feat/a
>>>>>
```
- Trong trường hợp xảy ra conflict do main chưa pull code mới nhất về, có thể sử dụng `git merge --abort` để hủy lệnh merge và pull code mới về trước khi merge
---

## Rebase
Rebase giúp thay đổi gốc của branch, giúp commit sạch hơn  
Khi thực hiện rebase, nên thực hiện trên nhánh fearture, không nên rebase nhánh main
```
git rebase {tên nhánh}
```

## Squash
Squash dùng để nén nhiều commit lại thành 1
```
git rebase -i HEAD~{số lượng commit}
```
Sau khi chọn rebase, terminal sẽ chuyển sang chế độ VIM, để squash cần:
1. Chọn chế độ insert, bấm phím `i`
2. Tiến hành sửa
3. Nhấn `ESC`
4. Gõ `:wq`
5. Nhấn `Enter`