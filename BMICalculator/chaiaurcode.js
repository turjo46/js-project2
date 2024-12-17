const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()

  const height = parseInt (document.querySelector("#height").value)
  const weight = parseInt (document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if(height===""||height<=0|| isNaN(height)){
    results.innerHTML=`please give me a valid height ${height}`
  }else if(weight===""||weight<=0|| isNaN(weight)){
    results.innerHTML=`please give me a valid weight ${weight}`
  }else{
   const bmi = (weight/  ((height*height)/10000)).toFixed(2)
   results.innerHTML = `<span> your bmi is  = ${bmi}</span>`
   if(bmi<18.6){
    results.innerHTML = `under weight = less then 18 
                          normal range = 18.6 - 24.9`
     
   
  }else{
    results.innerHTML = `over weight = greater then 24.9 `
    
   
  }
  
  
  }
  
  
    
  
})