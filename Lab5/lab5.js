const students = [
  { id: 1, name: "An Nguyễn", dob: 2001, major: "Computer Science" },
  { id: 2, name: "Binh Trần", dob: 2000, major: "Mathematics" },
  { id: 3, name: "Công Lê", dob: 2002, major: "Computer Science" },
  { id: 4, name: "Dương Phạm", dob: 1999, major: "Physics" },
  { id: 5, name: "Em Võ", dob: 2001, major: "Computer Science" },
  { id: 6, name: "Giang Nguyễn", dob: 2000, major: "Mathematics" },
  { id: 7, name: "Phương Đặng", dob: 1998, major: "Physics" },
  { id: 8, name: "Khang Hoàng", dob: 2002, major: "Computer Science" },
];
//AC1: Viết phương thức để lọc sinh viên dựa theo chuyên ngành như "Computer Science", "Mathematics", hoặc "Physics" - filterByMajor(students, major)

function filterByMajor(students, major) {
  return students.filter(function(student) {
    return student.major === major;
  });
}

const result = filterByMajor(students, "Computer Science");

console.log("result" , result);
//AC2: Viết phương thức để in ra sinh viên theo chuyên ngành và tính độ tuổi của mỗi người (tính theo năm hiện tại). - filterByMajorAndAge(students, major)

// Hàm tính độ tuổi
function calculateAge(dob) {
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  return currentYear - dob; // Tính độ tuổi
}

function filterByMajorAndAge(students, major) {
  const filtered = filterByMajor(students, major);

  const withAge = filtered.map(function(student) {
    const age = calculateAge(student.dob);
    const studentWithAge = {
      id: student.id,
      name: student.name,
      dob: student.dob,
      major: student.major,
      age: age
    };
    return studentWithAge;
  });

  return withAge;
}
const resultMajorAndAge = filterByMajorAndAge (students, "Computer Science");
console.log("Major and Age ", resultMajorAndAge);

//AC3: Thêm cột trợ cấp vào thông tin sinh viên, dựa trên chuyên ngành - getAllowanceToStudents(students)

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

function getAllowanceToStudents(students) {
  const result = students.map(function(student) {
    const allowance = getAllowanceByMajor(student.major);
    
    const studentWithAllowance = {
      id: student.id,
      name: student.name,
      dob: student.dob,
      major: student.major,
      allowance: allowance
    };
    
    return studentWithAllowance;
  });

  return result;
}

const resultAllowanceToStudents =  getAllowanceToStudents(students);
console.log("resultAllowanceToStudents" , resultAllowanceToStudents);

//AC4: Tính tổng tiền trợ cấp cho tất cả sinh viên - calculateTotalAllowance(studentsWithAllowance)
function calculateTotalAllowance(student){
   
    const total = students.reduce(function (sum , student){
        const allowance = getAllowanceByMajor(student.major);
        return sum + allowance
    },0)

    return total;
}

const resultTotal = calculateTotalAllowance (students);

console.log("resultTotal" , resultTotal);
