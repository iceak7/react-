var path = window.location.pathname;
var page = path.split("/").pop();

console.log(page);



document.getElementById('easterBackground').addEventListener('click', ()=>{
  document.getElementsByTagName('main')[0].classList.toggle("backgroundToggle")

})

let typedWord=[]
let modalActive=false;
document.addEventListener('keydown', (e)=>{

  if(e.key==='7' || e.key==='3' || e.key ==='1' ){
    typedWord.push(e.key)
    let string = typedWord.join('')
    
    if(string.length>3){
      if(string.substring(string.length-4)==="1337" && modalActive===false){
        
        modalActive=true

        document.getElementsByTagName("main")[0].innerHTML+=`
        <div class="modal">
          <div class="modalContent">
          <span class="closeModal">X</span>
          <img src="/Images/1337.jpeg" alt="1337" class="leetImage">
          </div>
        </div>

        `

        document.querySelector(".modalContent .closeModal").addEventListener("click",()=>{
          document.getElementsByClassName("modal")[0].remove()
          modalActive=false
        })

      }
    }

    if(typedWord.length>500){
      typedWord=[]
      string=""
    }
  }
  else{
    typedWord = []
  }
})

if (page == "utbildningar.html") {
  fetch('../Data/utbildningar.json')
    .then(res => {
      return res.json();
    })
    .then(utbildningar => {

      let output = "";

      utbildningar.forEach((el) => {
        output += `        
        <div class="jobItem">
            <div class="factSection">
                <div class="factBlock">                
                    <h2 class="workTitle">${el.workTitle}</h2>
                    <h4 class="workPlace">${el.workPlace}</h2>
                    <p class="workLength">${el.workLength}</p>
                </div>
            </div>
            <div class="descSection">
                <p>${el.description}</p>
            </div>
        </div>
            `;
      });

      document.getElementsByClassName("utbildningarMain")[0].innerHTML +=
        output;
    });
}


if (page == "jobb.html") {
  fetch('../Data/jobb.json')
    .then(res => {
      return res.json();
    })
    .then(utbildningar => {

      let output = "";

      utbildningar.forEach((el) => {
        output += `        
        <div class="jobItem">
            <div class="factSection">
                <div class="factBlock">                
                    <h2 class="workTitle">${el.workTitle}</h2>
                    <h4 class="workPlace">${el.workPlace}</h2>
                    <p class="workLength">${el.workLength}</p>
                </div>
            </div>
            <div class="descSection">
                <p>${el.description}</p>
            </div>
        </div>
            `;
      });

      document.getElementsByClassName("jobbMain")[0].innerHTML +=
        output;
    });
}
