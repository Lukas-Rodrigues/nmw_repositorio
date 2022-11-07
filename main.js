

function createGame(play1,hour,play2){

    return `
                <li>
                    <img src="./assets/icon-${play1}.svg" alt="Bandeira do play1">
                        <STRONG>${hour}</STRONG>
                    <img src="./assets/icon-${play2}.svg" alt="Bandeira da play2">
                </li>
    
            `


}



let delay = -0.3;
function createcard(date,day,games){
    delay = delay+ 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}">
     <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
         </ul>
    </div>
    `
}



document.querySelector("#cards").innerHTML = 
  createcard('24/11', 'quinta',
    createGame("Brazil", "16:00", "Serbia")
    )+
    
   createcard('28/11', 'segunda',
        createGame("Brazil", "13:00", "Switzerland")+
        createGame("Portugal", "16:00", "Uruguay")
   )+
    
        createcard('02/12', 'sexta',
        createGame("Brazil", "16:00", "Cameroon"))

 

