const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mysrc = myImage.getAttribute("src");
    if (mysrc === "images/basegoku.jpeg"){
        myImage.setAttribute("src", "images/ssjblue.jpeg");
    }
    else{
        myImage.setAttribute("src", "images/basegoku.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){
    const myName = prompt("Please enter a username.");
    if (!myName){
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = 'Goku is strong, ' + myName;    
    }
    
}

if (!localStorage.getItem("name")){
    setUserName;
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Goku is strong ' + storedName;
}

myButton.onclick = () => {
    setUserName();
  };
  