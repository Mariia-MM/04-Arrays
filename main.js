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
    newStudB = studBoy.pop();
    newStudG = studGirl.pop();

    count = studNew.push(newStudB.split(`,`).concat(newStudG));
    //studNew.join(`+`);
  }
  return studNew;
};
//console.log(getPairs());
const pairs = getPairs(students);
console.log(pairs);

const getPairTheme = () => {
  let newArr = pairs.slice();
  let newThemes = themes.slice();
  //   console.log(newArr);
  //   console.log(newThemes);
  let count = 0;
  let pairTheme = [];
  while (newArr.length > 0) {
    newPair = newArr.pop().join(` i `);
    // console.log(newPair);
    newTheme = newThemes.pop();

    // console.log(newTheme);

    count = pairTheme.push(newPair.split(`,`).concat(newTheme));
  }
  return pairTheme;
};
console.log(getPairTheme());
