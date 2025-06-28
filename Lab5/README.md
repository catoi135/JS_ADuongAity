# Lab 05

## Đề Bài

Quản lý danh sách sinh viên

- Giả sử bạn có một hệ thống quản lý sinh viên và bạn cần thực hiện một số thao tác xử lý với danh sách sinh viên.

- Mỗi sinh viên có các thuộc tính như mã, tên, tuổi, năm sinh và chuyên ngành học.

```javascript
const students = [
  { id: 1, name: "An Nguyễn", dob: 2001, major: "Computer Science" },
  { id: 2, name: "Binh Trần", dob: 2000, major: "Mathematics" },
  { id: 3, name: "Công Lê", dob: 2002, major: "Computer Science" },
  { id: 4, name: "Dương Phạm", dob: 1999, major: "Physics" },
  { id: 5, name: "Em Võ", dob: 2001, major: "Computer Science" },
  { id: 6, name: "Giang Nguyễn", dob: 2000, major: "Mathematics" },
  { id: 7, name: "Phương Đặng", dob: 1998, major: "Physics" },
  { id: 8, name: "Khang Hoàng", dob: 2002, major: "Computer Science" }
];
```

## Yêu Cầu

### AC1: Viết phương thức để lọc sinh viên dựa theo chuyên ngành như "Computer Science", "Mathematics", hoặc "Physics" - filterByMajor(students, major)

Output:

```json
[
  { id: 1, name: 'An Nguyễn', dob: 2001, major: 'Computer Science' },
  { id: 3, name: 'Công Lê', dob: 2002, major: 'Computer Science' }
]
```

### AC2: Viết phương thức để in ra sinh viên theo chuyên ngành và tính độ tuổi của mỗi người (tính theo năm hiện tại). - filterByMajorAndAge(students, major)

Output:

```json
[
  {
    id: 1,
    fistName: 'An',
    lastName: 'Nguyễn',
    dob: 2001,
    major: 'Computer Science',
    age: 23
  }
]
```

```javascript
// Hàm tính độ tuổi
function calculateAge(dob) {
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  return currentYear - dob; // Tính độ tuổi
}
```

### AC3: Thêm cột trợ cấp vào thông tin sinh viên, dựa trên chuyên ngành - getAllowanceToStudents(students)

- Computer Science: trợ cấp 1000.

- Mathematics: trợ cấp 500.

- Các chuyên ngành khác: trợ cấp 200.

Output: 

```json
[
  {
    id: 1,
    name: 'An Nguyễn',
    major: 'Computer Science',
    allowance: 1000
  }
]
```

```javascript
// Hàm xác định trợ cấp theo chuyên ngành sử dụng switch-case
function getAllowanceByMajor(major) {
  switch (major) {
    case "Computer Science":
      return 1000;
    case "Mathematics":
      return 500;
    default:
      return 200; // Các chuyên ngành còn lại
  }
}
```

### AC4: Tính tổng tiền trợ cấp cho tất cả sinh viên - calculateTotalAllowance(studentsWithAllowance)

Output: 

```
Total: 100
```
