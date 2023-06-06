  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);    /// the number at the end refers to the item number of the array you want to start the summing from
console.log(sum)


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience)


// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log(experienceByProfession)

/// below was the code institute reduce challenge
// it requested that he code uses the reduce function to iterate over the students array
// and find the element with the highest english value. The result is stored in the biggest variable,
// which is then printed to the console.
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const biggest = students.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});
    console.log(biggest);


 //below is tutor explanation of code...   
//The reduce method takes a callback function and an initial value as arguments. 
//The callback function takes two arguments: an accumulator (acc) and the current value (cur). 
//The code compares the max property of the accumulator with the english property of the results object of the current student. 
//If the current student’s English score is higher than the accumulator’s max property, the accumulator is updated with the current 
//student’s name and English score. Otherwise, the accumulator remains unchanged. The initial value of the accumulator is an object with
// a name property set to an empty string and a max property set to 0. After all students have been processed, the final value of the 
//accumulator is logged to the console, which should be an object containing the name and English score of the student with the highest
// score in English.

//below is chatgpt explanation of code......
//1.const biggest = students.reduce((acc, cur) => { ... }, {name: '', max: 0});
//This line declares a constant variable named biggest. It uses the reduce function on an array called 
//students and takes two arguments. The first argument is a callback function (acc, cur) => { ... } that will be executed
// for each element in the students array. The second argument {name: '', max: 0} is the initial value for the accumulator (acc).

//2.acc = acc.max > cur.results.english ? acc : {name:cur.name, max:cur.results.english};
//Inside the callback function, this line compares the max property of the accumulator (acc.max) with the english property 
//of the current element (cur.results.english). If the max value of the accumulator is greater than the english value of the current element,
// it assigns acc back to itself. Otherwise, it creates a new object with properties name set to cur.name and max set to cur.results.english,
// and assigns it to acc.

//3.return acc;
//After each iteration, the callback function returns the updated accumulator (acc), which will be used in the next iteration.

//4.console.log(biggest);
//Finally, the code prints the value of the biggest variable to the console. This will be the final result of the reduce operation,
// which represents the element with the maximum english value from the students array.
