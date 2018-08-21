/*


    Author: Peter Tran
    Date:   8.15.18

    Filename: script.js 


*/

"use strict";

var formValidity = true;

//prevent the user to go to the next page 
function validateForm(evt) {
    formValidity = true;
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    validateRequired();
    if (formValidity) {
        document.getElementsByTagName("form")[0].submit();
    }
}

// event that display error msg 
function validateRequired() {
    var inputBoxes = document.getElementsByTagName("input");
    var errorDiv = document.getElementById("errorText");
    var fieldsetValidity = true;
    var elementCount = inputBoxes.length;
    var currentElement = null;
    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputBoxes[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity) {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        } else {
            throw "Please fill in the required fields.";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}




//create event listener for the form 
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }

}


// Load event handler 
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
