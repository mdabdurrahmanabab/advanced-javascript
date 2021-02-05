const num = [2,3,-4,5,6,-7,8,9];
// first program
for (let i = 0; i < num.length; i++) {
      console.log(num[i]);
      if(num[i]>5){
            break;
      }
      
}
// second program
for (let i = 0; i < num.length; i++) {
      if(num[i]<0){
            continue;
      }
      console.log(num[i]);
}