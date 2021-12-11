const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// year inventors[i].year >= 1500 && inventors[i].year < 1600

// let fifteens = inventors.filter((e) => {
//   if(e.year >= 1500 && e.year < 1600){
//     return true;
//   }else return false;
// })

let fifteens = inventors.filter((e) => e.year >= 1500 && e.year < 1600);
// console.table(fifteens);
// console.log(fifteens);

// Array.prototype.map()  // map() will return the SAME length of input array
// 2. Give us an array of the inventors first and last names
// inventors[i].first + inventors[i].last
let fullNames = inventors.map((e) => `${e.first} ${e.last}`);

// console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// a.year > b.year ? 1 : -1
let sortAge = inventors.sort((a, b) => a.year - b.year);

// console.table(sortAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
//reduce(callbackFn, initialValue)
//reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
// sum + (e.passed - e.year)
let totalAge = inventors.reduce((sum, arr) => {
  return sum + (arr.passed - arr.year);
}, 0);

// console.log(totalAge);

// 5. Sort the inventors by years lived
//In task 3 sort by the earliest year born regardless of how long they had lived
// firstPerson = firstPerson.passed - firstPerson.year
// nextPerson = nextPerson.passed - nextPerson.year
// sort firstPerson > nextPerson ? -1 : 1;
let byYearslived = inventors.sort((a, b) => {
  const first = a.passed - a.year;
  const next = b.passed - b.year;
  return next - first;
});

// console.table(byYearslived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// const url = "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris";
//find out the DOM elements first (for querySelect)
//turn the nodelist to array using Array.from or [...spread]!
//use map() to get just an array of innerText and filter() with include() to get 'de' street
/*
                const cat = document.querySelector(".mw-category");
                const links = Array.from(cat.querySelectorAll("a"));
                const de = 
                          links.map(link => link.innerText)
                          .filter(street => street.includes("Paris"));

                */

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortedPeeps = people.sort();
// console.table(sortedPeeps);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const sumData = data.reduce((obj, current) => {
  if (!obj[current]) {
    obj[current] = 0; // its the same as obj.car but with dynamic variable and set it to 0 if deosn't exist.
  }
  obj[current]++;
  return obj;
}, {});

// console.log(sumData);

// ## Array Cardio Day 2

const people2 = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
  { text: "My new favourite!", id: 671328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isSomeOver19 = people2.some((person) => {
  const yearNow = new Date().getFullYear();
  return yearNow - person.year >= 19;
});
// console.log(isSomeOver19);

// Array.prototype.every() // is everyone 19 or older?
const isEveryoneAdult = people2.every((person) => {
  const yearNow = new Date().getFullYear();
  return yearNow - person.year >= 19;
});
// console.log(isEveryoneAdult);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find((each) => each.id === 823423);
// console.log(findComment);

// Array.prototype.findIndex()
const index = comments.findIndex((each) => each.id === 823423);

// Find the comment with this ID
console.log(comments[index].text);

// delete the comment with the ID of 823423
const delelted = comments.splice(index, 1);
// console.table(comments);
// console.table(delelted);

// spread practice

const newComments = [comments.slice(0, index), comments.slice(index + 1)];
const newComments2 = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1),
];

// console.log(newComments);
// console.table(newComments2);
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
// console.log(two, rest)

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
  extra: ["stereo", "a/c"],
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
// console.log(myUpdatedVehicle);
