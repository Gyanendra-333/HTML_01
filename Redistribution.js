const mod=1000000007;

let currsum=0;
function findPossibleSolutinCount(currsum){

    if(currsum===n) return 0;
    if(currsum>n) return 1;

    let possibleSolutionCount = 0;
    for(let i=3; i<=n; i+2){

        possibleSolutionCount+=findPossibleSolutinCount(currsum+i);
    }
    return possibleSolutionCount;
}
var n=9;
console.log(findPossibleSolutinCount(currsum));