const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
let count = 0;
let pairTheme = [];

const getPairs = () => {
  let newArr = students.slice();
  let studGirl = [];
  let studBoy = [];
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
    newStudB = studBoy.pop();
    newStudG = studGirl.pop();

    count = studNew.push(newStudB.split(`,`).concat(newStudG));
  }
  return studNew;
};

const pairs = getPairs(students);
console.log(pairs);

const getPairTheme = () => {
  let newArr = pairs.slice();
  let newThemes = themes.slice();

  while (newArr.length > 0) {
    newPair = newArr.pop().join(` i `);
    newTheme = newThemes.pop();

    count = pairTheme.push(newPair.split(`,`).concat(newTheme));
  }
  return pairTheme;
};
console.log(getPairTheme());

const getStudMark = () => {
  let newStudents = students.slice();
  let newMarks = marks.slice();
  let studentMark = [];

  while (newStudents.length > 0) {
    newStud = newStudents.shift();
    newMark = newMarks.shift();
    count = studentMark.push(newStud.split(`,`).concat(newMark));
  }
  return studentMark;
};
console.log(getStudMark(students));

const getPairProjectMark = () => {
  let newArr = pairTheme.slice();
  let pairProjectMark = [];
  while (newArr.length > 0) {
    let m = Math.trunc(Math.random() * (6 - 1) + 1);
    newPair = newArr.shift();
    count = pairProjectMark.push(newPair.concat(m));
  }
  return pairProjectMark;
};
console.log(getPairProjectMark());
