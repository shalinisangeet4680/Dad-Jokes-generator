const btnEl= document.getElementById("btn");
const jokeEl= document.getElementById("joke");

const apiKey="zbln1CFN6VnVjEtL5f2Hgg==D27OiNeSO9RO5K6b";

const options={
    method:"GET", 
    headers:{
        "X-Api-Key": apiKey,
    },
};

const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"
 async function getJoke(){
    try {
        joke.innerText= "updating...";
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        const response=  await fetch(apiURL,options);
        const data= await  response.json();
    
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
    
    
        jokeEl.innerText= data[0].joke;
        
    } catch (error) {
        jokeEl.innerText="An error happened,try again later";
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
        console.log(error);

        
    }

   



}


btnEl.addEventListener("click",getJoke);