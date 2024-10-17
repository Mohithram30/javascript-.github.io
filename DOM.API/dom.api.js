//...=>Selecting element 

//Based on tag name

let tagNameSelector = document.getElementsByTagName("h6");

// Based on class name
let classSelector = document.getElementsByClassName("class1");
console.log(classSelector[0].textContent);

//based on id

let idSelector = document.getElementById("id1");
console.log(idSelector.textContent);

//Query Selector All
let selectBasedOnQueryAll = document.querySelectorAll(".class1");

//Query Selector first class name in html
let selectBasedOnQuery = document.querySelector(".class1");

//Creating an element

let creatingNewElement = document.createElement("p");
creatingNewElement.textContent = 'added content in to the <p> tag';
manipulatingBasedOnId.appendChild(creatingNewElement);

// Create new parent element
let creatingparentElement = document.createElement("article");
creatingparentElement.id = "parent-id";
creatingparentElement.className = "parent-class"

//Removing an Element
let removingElement = document.getElementsByTagName("h3")[0];
removingElement.parentNode.removeChild(removingElement);

//Get Attribute Value
let getClassAttr = document.getElementById("id2")
getClassAttr.getAttribute("class"); 

let getId = document.getElementById("id2")
getId.getAttribute("id"); 

//Set Attribute
let setClass = document.getElementById("id2");
setClass.setAttribute("class","clsAttr");
setClass.setAttribute("title","class attribute set using external js");


let setCls = document.getElementsByClassName('class2')[0];
setCls.setAttribute("id","sci");
setCls.setAttribute("tabindex","2");

//Remove Attribute
setCls.removeAttribute("tabindex");
setClass.removeAttribute("title");

//Checking if the attribute is present 
let availAttr = setClass.hasAttribute("contenteditable");
let availableAttr= setCls.hasAttribute("tabindex");

//Add Events
let eventListener=document.getElementById("id3");

eventListener.addEventListener("click",function sampleFucn(){
    alert("Hi welcome!");
});



setClass.addEventListener("click",clickFunction);


let clickGetId = document.getElementsByClassName("class2");

function clickFunction(){
    alert("Clicked success... ");
}

//PreventDefault
const anchorElement = document.getElementsByTagName("a")[0];
 
anchorElement.addEventListener("click",(event)=>{
   event.preventDefault();
   alert("this site has been blocked");
})
