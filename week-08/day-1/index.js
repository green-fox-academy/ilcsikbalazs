'use strickt';
var test = require('tape');
var sudokuLine1 = [0,0,0,0,0,0,0,0,0];
var sudokuLine2 = [0,0,0,0,0,'8',0,0,0];
var sudokuLine3 = [0,0,0,0,0,9,0,0,0];
var sudokuLine4 = [2,2,0,1,1,9,9,0,0];
var sudokuLine5 = [1,2,3,4,5,6,7,8,9];
var sudokuLine6 = [9,2,3,4,5,6,7,8,9];
var sudokuLine7 = [9,2,3,4,5];
var sudokuLine8 = [1.1,2.2,3.4,4,5,6.777777,7,8,9];

function sudokuLineChecker(line) {
    var actualNumberList = [];
    var result = true;
    if (line.length === 9) {
        for (var i = 0; i < line.length; i++ ) {
            if (line[i] >= 0 && line[i] <= 9 && typeof line[i] === 'number' && line[i] === parseInt(line[i]) ) {
                if (line[i] !== 0) {
                    if ( line[i].includes(line[i])) {
                        result = false;
                    }
                    actualNumberList.push(line[i]);
                }         
            } else {
                result = false;
            }
        }
    } else {
        result = false;
    }
    return result;    
}


test('sudokuLineCheckerTest', function(t){
    t.equal(sudokuLineChecker(sudokuLine1), true, 'Valid line');
    t.equal(sudokuLineChecker(sudokuLine2), false, 'No string');
    t.equal(sudokuLineChecker(sudokuLine3), true, 'Except 0');
    t.equal(sudokuLineChecker(sudokuLine4), false, 'No duplication');
    t.equal(sudokuLineChecker(sudokuLine5), true, 'Absolute valid line');
    t.equal(sudokuLineChecker(sudokuLine6), false, 'Absolute invalid line');
    t.equal(sudokuLineChecker(sudokuLine7), false, 'Invalid length');
    t.equal(sudokuLineChecker(sudokuLine8), false, 'No floating point number');
    t.end();
})