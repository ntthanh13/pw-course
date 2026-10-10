# Bài học: Javascript - Biến thể vòng lặp
## For ... in
Vòng lặp `for...in` dùng để duyệt qua các thuộc tính của một object
```javascript
const person = {
    name: "John",
    age: 31,
    job: "Engineer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Ouput: 
// name: John
// age: 31
// job: Engineer
```
---

## For ... each
Vòng lặp `for...each` dùng để thực thi một function cho từng phần tử. Không thể dùng `break` hoặc `continue`
```javascript
const numb = [2, 3, 5];
numb.forEach(function (value) {
    console.log(value * 3);
});
```