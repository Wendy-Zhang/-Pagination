
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
// 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.


function printMatrix(matrix)
{   
    var row = matrix.length;
    var col = matrix[0].length;
    var newArr =[];
    if(matrix == null){
        return newArr;
    }
    var top = 0;
    var bottom = row -1;
    var left = 0;
    var right = col - 1;
    while(top <= bottom && right >= left){
        for(var i = top; i <= right;i++){
            newArr.push(matrix[top][i]);
        }
        for(var j = top+1; j <= bottom; j++){
            newArr.push(matrix[j][right])
        }
        if(top !== bottom)
        for(var k = right-1 ; k >= left; k--){
            newArr.push(matrix[bottom][k]);
        }
        if(right !== left)
        for(var m = bottom-1; m > top; m--){
            newArr.push(matrix[m][left]);
        }
        top++;right--;bottom--;left++;
    }
    return newArr;
}