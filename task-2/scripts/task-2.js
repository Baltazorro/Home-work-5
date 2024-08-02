let evenCount = 0;
let oddCount = 0;
let randomNumbers
let totalNumbers
for (let index = 0; index < 100; index++) {
   let randomNumbers = Math.floor(Math.random()*(1000))
   
   document.write(`${randomNumbers},`)
  
      if(randomNumbers%2===0)
     evenCount++
   else oddCount++ 
   
   
   
   
   } 
   document.write(`<br>Парних чисел= ${evenCount}`)
   document.write(`<br>Непарних чисел= ${oddCount}`)
   
   
   if(evenCount>oddCount)
      document.write(`<br>Більше парних чисел `)
   else if(evenCount===oddCount)
      document.write(`<br>Одинаково`)
   else document.write(`<br>Більше непарних чисел`)
   
   
   
   
  

   
   // if ((randomNumber%2===0)>(randomNumber%2!==0))
   //    document.write(`Більше парних чисел`)
   // else document.write(`Більше непарних чисел`)
      
   
   
   
   

