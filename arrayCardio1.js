const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
  // year inventors[i].year >= 1500 && inventors[i].year < 1600

        // let fifteens = inventors.filter((e) => {
        //   if(e.year >= 1500 && e.year < 1600){
        //     return true;
        //   }else return false;
        // })

let fifteens = inventors.filter(e => (e.year >= 1500 && e.year < 1600)); 
                // console.table(fifteens);
                // console.log(fifteens);

// Array.prototype.map()  // map() will return the SAME length of input array
// 2. Give us an array of the inventors first and last names
  // inventors[i].first + inventors[i].last
let fullNames = inventors.map(e => `${e.first} ${e.last}`)

                // console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
    // a.year > b.year ? 1 : -1
let sortAge = inventors.sort((a, b) => a.year - b.year)

                // console.table(sortAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
    //reduce(callbackFn, initialValue)
    //reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
    // sum + (e.passed - e.year)
let totalAge = inventors.reduce((sum, arr) => {
  
  return sum + (arr.passed - arr.year)
}, 0);

              // console.log(totalAge);

// 5. Sort the inventors by years lived
    //In task 3 sort by the earliest year born regardless of how long they had lived
    // firstPerson = firstPerson.passed - firstPerson.year
    // nextPerson = nextPerson.passed - nextPerson.year
    // sort firstPerson > nextPerson ? -1 : 1;
let byYearslived = inventors.sort((a,b) => {
  const first = a.passed - a.year;
  const next = b.passed - b.year;
  return next - first;
})

            // console.table(byYearslived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //find out the DOM elements first (for querySelect)
    //turn the nodelist to array using Array.from or [...spread]!
    //use map() to get just the innerText and filter() with include() to get 'de' street




// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
