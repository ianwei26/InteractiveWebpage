let adjective1Input = document.querySelector("#adjective1");

let noun1Input = document.querySelector("#noun1");

let verb1Input = document.getElementById("verb1");

let noun2Input = document.getElementById("noun2");

let noun3Input = document.getElementById("noun3");

let feelingInput = document.getElementById("feeling");

let noun4Input = document.getElementById("noun4");

let adjective2Input = document.getElementById("adjective2");

let noun5Input = document.getElementById("noun5");

let verb2Input = document.getElementById("verb2");

let noun6Input = document.getElementById("noun6");

let noun7Input = document.getElementById("noun7");

let verb3Input = document.getElementById("verb3");

let verb4Input = document.getElementById("verb4");

let noun8Input = document.getElementById("noun8");

let noun9Input = document.getElementById("noun9");

let verb5Input = document.getElementById("verb5");

let noun10Input = document.getElementById("noun10");

let hisher1 = document.getElementsByName("hisher1");     

let goodbad = document.getElementsByName("goodbad");     

let himher1 = document.getElementsByName("himher1");     

let himher2 = document.getElementsByName("himher2");     

let hisher2 = document.getElementsByName("hisher2");     

let heshe1 = document.getElementsByName("heshe1");     

let heshe2 = document.getElementsByName("heshe2");

let result = document.querySelector(".result");
function showStory(){
    adjective1 = adjective1Input.value;
    noun1 = noun1Input.value;
    verb1 = verb1Input.value;
    noun2 = noun2Input.value;
    noun3 = noun3Input.value;
    feeling = feelingInput.value;
    noun4 = noun4Input.value;
    adjective2 = adjective2Input.value;
    noun5 = noun5Input.value;
    verb2 = verb2Input.value;
    noun6 = noun6Input.value;
    noun7 = noun7Input.value;
    verb3 = verb3Input.value;
    verb4 = verb4Input.value;
    noun8 = noun8Input.value;
    noun9 = noun9Input.value;
    verb5 = verb5Input.value;
    noun10 = noun10Input.value;
    let hisher1 = document.querySelector("input[name='hisher1']:checked").value;     

    let goodbad = document.querySelector("input[name='goodbad']:checked").value;     

    let himher1 = document.querySelector("input[name='himher1']:checked").value;     

    let himher2 = document.querySelector("input[name='himher2']:checked").value;     

    let hisher2 = document.querySelector("input[name='hisher2']:checked").value;     

    let heshe1 = document.querySelector("input[name='heshe1']:checked").value;     

    let heshe2 = document.querySelector("input[name='heshe2']:checked").value;
    story = "The "
    story += adjective1
    story += " "
    story += noun1
    story += " "
    story += verb1 
    story += " a "
    story += noun2 
    story += " at the " 
    story += noun3
    story += ". "
    story += heshe1 
    story += " felt "
    story += feeling
    story += " and decided to go to the "
    story += noun4
    story += " to feel better. On the way, "
    story += heshe2
    story += " got a call from "
    story += hisher1
    story += " "
    story += adjective2
    story += " "
    story += noun5
    story += ". She had to "
    story += verb2
    story += " to the "
    story += noun6
    story += "! The Goofy-Ahh "
    story += noun7
    story += " "
    story += verb3
    story += " at "
    story += himher1
    story += ", but "
    story += himher2
    story += " just "
    story += verb4
    story += " at it! This was a really "
    story += goodbad
    story += " day for "
    story += noun8
    story += ". "
    story += noun9
    story += " "
    story += verb5
    story += " to "
    story += hisher2
    story += " "
    story += noun10
    story += " and decided to call it a day. After all, none of it was real."
    result.textContent = story
    result.style.display = "block"

}

let sumbitButton = document.querySelector(".submitButton");
sumbitButton.addEventListener("click", showStory)