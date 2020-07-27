const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
let studGirl = [];
let studBoy = [];
let count = 0;
//debugger;

const getPairs = () => {
  let newArr = students.slice();
  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i].toString(newArr[i]).endsWith(`а`) ||
      newArr[i].endsWith(`я`)
    ) {
      studGirl.push(newArr[i]);
    } else {
      studBoy.push(newArr[i]);
    }
  }
  let studNew = [];
  while (studBoy.length > 0) {
    newStud1 = studBoy.pop();
    newStud2 = studGirl.pop();

    count = studNew.push(newStud1.split(`,`).concat(newStud2));
  }
  return studNew;
};
//console.log(getPairs());
const pairs = getPairs(students);
console.log(pairs);
