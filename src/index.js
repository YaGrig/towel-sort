
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newarr = [];
  if (matrix === undefined){return newarr};
  for (i = 0; i<matrix.length; i++){
    if (i % 2 === 0){
    for (n = 0; n<matrix[i].length; n++ ){
      newarr.push(matrix[i][n])
    }
    }
    if (i % 2 !==0){
      for (z = matrix[i].length-1; z>=0; z-- ){
          newarr.push(matrix[i][z])

    }
    }
      }
  return(newarr)
}
