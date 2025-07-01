# ASM

```json
const students = [
  { id: 1, name: 'An Nguyen', dob: '2000-01-01', clazz: 101 },
  { id: 2, name: 'Binh Le', dob: '2001-02-15', clazz: 102 },
  { id: 3, name: 'Cong Tran', dob: '2000-10-10', clazz: 101 },
  { id: 4, name: 'Duong Truong', dob: '2000-11-11', clazz: 103 },
  { id: 5, name: 'Hoang Thuong', dob: '2000-12-12', clazz: 101 },
  { id: 1, name: 'An Nguyen', dob: '2000-01-01', clazz: 101 } // Trùng ID
];
```

Yêu cầu:

- Học sinh trong cùng một lớp thì không được trùng nhau (theo id).

- Nhưng cùng một học sinh có thể xuất hiện ở nhiều lớp khác nhau (ví dụ một học sinh học 2 lớp).

- Mục tiêu là tạo Map với key là clazz, value là danh sách học sinh duy nhất theo id trong lớp đó.

Output:

```
Lớp 101:
- An Nguyen (ID: 1, DOB: 2000-01-01)
- Cong Tran (ID: 3, DOB: 2000-10-10)
- Hoang Thuong (ID: 5, DOB: 2000-12-12)

Lớp 102:
- Binh Le (ID: 2, DOB: 2001-02-15)
- An Nguyen (ID: 1, DOB: 2000-01-01)

Lớp 103:
- Duong Truong (ID: 4, DOB: 2000-11-11)
```