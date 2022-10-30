
var n=5,m=4;
var necklacedata = [[2,1,8,9],[1,4,3,8],[1,1,6,2],[3,9,9,6],[1,7,2,7]];

function checkCombination(i,j){
    let result = Number.MAX_VALUE;
    for(let k=0;k<m;k++){
        result= Math.min(result,Math.max(necklacedata[i][k],necklacedata[j][k]));
    }
    return result;
}
function findMaxValue(necklacedata,n,m){
    let result= Number.MIN_VALUE;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            result  = Math.max(result,checkCombination(i,j));
        }
    }
    return result;
}
console.log(findMaxValue(necklacedata, n, m));