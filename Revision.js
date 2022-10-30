
// problem 01

// const mod=1000000007;

// let currsum=0;
// function findPossibleSolutinCount(currsum){

//     if(currsum===n) return 0;
//     if(currsum>n) return 1;

//     let possibleSolutionCount = 0;
//     for(let i=3; i<=n; i+2){

//         possibleSolutionCount+=findPossibleSolutinCount(currsum+i);
//     }
//     return possibleSolutionCount;
// }
// var n=90;
// console.log(findPossibleSolutinCount(currsum));

// problem 02


// var n=5,m=4;
// var necklacedata = [[2,1,8,9],[1,4,3,8],[1,1,6,2],[3,9,9,6],[1,7,2,7]];

// function checkCombination(i,j){
//     let result = Number.MAX_VALUE;
//     for(let k=0;k<m;k++){
//         result= Math.min(result,Math.max(necklacedata[i][k],necklacedata[j][k]));
//     }
//     return result;
// }
// function findMaxValue(necklacedata,n,m){
//     let result= Number.MIN_VALUE;
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             result  = Math.max(result,checkCombination(i,j));
//         }
//     }
//     return result;
// }
// console.log(findMaxValue(necklacedata,n,m));


