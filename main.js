const reset = document.querySelector(".game-card");
//parameters passed from button (parameter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button)=>{
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });
    //select all game cards
    let elements = document.querySelectorAll(".game-card");
    //loop through all game cards
    elements.forEach((element)=>{
        //display all game cards on all button click
        if(value == "All_Games"){
            element.classList.remove("hide");
        }else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide");
            }else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}
//Es6 search and filter on game cards
document.getElementById("search").addEventListener("click", () => {
    //auto reset
    reset.classList.remove("hide");
    //initializations
    let gameAvailable=document.querySelector(".games-available");
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".game-card");
    //display search result text
    gameAvailable.innerText=`All Available Games For Search Result "${searchInput}"`;
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      let item=element.innerText.toLowerCase();
      if (item.includes(searchInput.toLowerCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
//Initially display all products
window.onload = () =>{
    filterProduct("All_Games")
}