let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: "December",
  currency: "USD",
  isPayed: false,
};

function sumSalary(salaryObject) {
  let sum = 0;
  for (let key in salaryObject) {
    if (!isNaN(salaryObject[key]) && isFinite(salaryObject[key])) {
      sum += salaryObject[key];
    }
  }
  return sum;
}
console.log(sumSalary(salaries));
