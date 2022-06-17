array = [1, 3, 10, 11, 14]
goal = 12

const twoSum = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
          }
       }
    }
    return indexes;
}

console.log(twoSum(array, goal))