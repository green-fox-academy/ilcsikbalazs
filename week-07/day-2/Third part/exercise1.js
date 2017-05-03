'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


function candies() {
    for (var i in students) {
        console.log(students[i]['candies']);
    };
}

function lessThan5() {
    var sum = 0;
    for (var i in students) {
        if (students[i]['candies'] < 5){
            sum += students[i]['age'];
        }    
    };
    console.log(sum);
}

candies();
lessThan5();

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThan4() {
    for (var i in students) {
        if (students[i]['candies'] > 4){
            console.log(students[i]['name']);
        }    
    };
}

function averageCandy() {
    var average = 0;
    for (var i in students) {
        average += students[i]['candies'];
    }
    average = average / students.length;
    console.log(average);
}

moreThan4();
averageCandy();