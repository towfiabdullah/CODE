function sum(...numbers) {
      let resutl=0;
      for(let i=0;i<numbers.length;i++)
       {
        resutl+=numbers[i];
          
       }
       return resutl;
}

console.log(sum(1, 2, 3, 4, 5)); 