# Bài 1 - Playwright và git
## Khởi tạo dự án playwright:
1. Trỏ tới folder
2. Git Bash here
3. `npm init playwright@latest`

## Cài đặt terminal mặc định là git bash
1. Mở VS Code
2. Ctr + Shift + P
3. Search terminal default
4. Chọn Select terminal default profile
5. Chọn git bash

## Khởi tạo SSH key (dùng cho github)
1. Mở terminal trong VSCode (hoặc phần mềm code khác)
2. `ssh-keygen -t rsa -b 4096 -C <email>`

## Khởi tạo repo git cho project
`git init`

## Câu lệnh add remote git
`git remote add origin <SSH url github>`

## Câu lệnh thêm code vào vùng staging
`git add .`

## Câu lệnh commit code
`git commit -m"<description>"`

## Câu lệnh push code lên github
`git push origin main`