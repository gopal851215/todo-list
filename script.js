// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");
// function Add() {
//     if (inputs.value == "") {
//         alert("please enter task")
//     }
//     else {
//         let newEle = document.createElement("ul");
//         newEle.innerHTML = `${inputs.value} <i class="fa-sharp-duotone fa-solid fa-location-minus"></i>`;


//         text.appendChild(newEle);
//         inputs.value = "";
//         newEle.querySelector("i").addEventListener("click", remove);
//         function remove() {
//             newEle.remove()
//         }
//     }
// }
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i><button1>delate<button1/><i/>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove()
        }
    }
}