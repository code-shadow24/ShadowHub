//2D arrays are also called multi-dimensional arrays or a matrix array
//This type of array have both rows and colums like a matrix or we can say it is simply a array inside an array

/*
       [[x, o, x],
       [o, x, o],
       [x, o, x]]

       Useful for making games, spreadsheet and representing images
*/

const matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]//1st method of creating a 2D array

for(let row of matrix){
    //console.log(row);//access the rows of the matrix
    let rowString = row.join(' ');//merge the rows to form a grid separated by a space
    console.log(rowString);
}

console.log(matrix[0][0])//to access the elements of the array separately. The first index is the row index and second index is the column index

let newMatrix = matrix

newMatrix[0][0] = 11
newMatrix[0][1] = 12
newMatrix[0][2] = 13

newMatrix[1][0] = 14
newMatrix[1][1] = 15
newMatrix[1][2] = 16

newMatrix[2][0] = 17
newMatrix[2][1] = 18
newMatrix[2][2] = 19

console.log(newMatrix)