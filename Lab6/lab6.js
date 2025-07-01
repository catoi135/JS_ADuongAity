const students = [
  { id: 1, name: 'An Nguyen', dob: '2000-01-01', clazz: 101 },
  { id: 2, name: 'Binh Le', dob: '2001-02-15', clazz: 102 },
  { id: 3, name: 'Cong Tran', dob: '2000-10-10', clazz: 101 },
  { id: 4, name: 'Duong Truong', dob: '2000-11-11', clazz: 103 },
  { id: 5, name: 'Hoang Thuong', dob: '2000-12-12', clazz: 101 },
  { id: 1, name: 'An Nguyen', dob: '2000-01-01', clazz: 101 } 
];

const clazzMap = new Map();

for (const student of students) {
  const clazz = student.clazz;

  if (!clazzMap.has(clazz)) {
 
    clazzMap.set(clazz, { students: [], idSet: new Set() });
  }

  const classData = clazzMap.get(clazz);

  if (!classData.idSet.has(student.id)) {
    classData.students.push(student);
    classData.idSet.add(student.id);
  }
}


clazzMap.forEach((data, clazz) => {
  console.log("Lớp", clazz);
  console.log(data.students);
});