
nums1 = [0,2,1,5,4]

const array= (nums1)=>{

for (let i = 1; i < nums1.length; i++){
    if (array[i] == array[i - 1]){
        return true;
    }
   
}
 return false;
}

console.log(array(nums1))


