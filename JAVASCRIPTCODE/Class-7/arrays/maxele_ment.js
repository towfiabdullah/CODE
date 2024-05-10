   
     function mymaxarray(arr)
     {
           let len = arr.length;
            let max= -Infinity;
             while(len--)
             {
                    if(arr[len]>max)
                    {
                         max =arr[len];
                    }
             }
              return max;
     }
 const arr = [1,5,6,8,9,10];

     console.log(mymaxarray());