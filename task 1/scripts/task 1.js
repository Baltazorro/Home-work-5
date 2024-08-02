let qualityNumber = parseInt(prompt(`Введіть кількість випадкових чисел`,'0'))


for (let index = 0; index < qualityNumber; index++) {
   let randomNumber = Math.floor(Math.random()*(100))
   document.write(`<ul>
         <li>${randomNumber}</li>
         </ul>`)
   
   
} 
