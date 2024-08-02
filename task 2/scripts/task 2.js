
let numberEntered =parseInt(prompt(`Введіть число`,`1`))
   for (let num = 1; num <= numberEntered; num++) {
      document.write(`<h1>Заголовок${num}</h1>
         <hr>`)
    for (let num2 = 1; num2 <= num; num2++) {
      document.write(`<p>Розділ${num}, параграф${num2}</p>`)
    }
   

      
   }
   
   

   