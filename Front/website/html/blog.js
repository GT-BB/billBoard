//script to populate the cards

let text = '{"data":[{"entry_id":1,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2012-04-08 10:50:24","price":32116.92,"age":13,"gender":"X","state":"Georgia"},{"entry_id":2,"proc_id":"Percutaneous Coronary Angioplasty (PTCA)","datetime":"2017-01-06 09:01:40","price":25550.07,"age":37,"gender":"Male","state":"Indiana"},{"entry_id":3,"proc_id":"Colon Resection","datetime":"2017-06-11 09:16:35","price":18930.52,"age":93,"gender":"X","state":"Louisiana"},{"entry_id":4,"proc_id":"Hip/Femur Fracture","datetime":"2013-08-12 13:58:16","price":6309.51,"age":39,"gender":"Female","state":"New Jersey"},{"entry_id":5,"proc_id":"Hip Replacement","datetime":"2012-11-04 16:48:52","price":23885.19,"age":22,"gender":"Female","state":"Nebraska"},{"entry_id":6,"proc_id":"Colon Resection","datetime":"2017-07-04 19:37:36","price":18930.56,"age":82,"gender":"Male","state":"North Dakota"},{"entry_id":7,"proc_id":"Hysterectomy","datetime":"2020-03-14 09:26:58","price":12574.91,"age":98,"gender":"X","state":"Vermont"},{"entry_id":8,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2019-05-03 17:29:57","price":32116.93,"age":58,"gender":"Male","state":"Rhode Island"},{"entry_id":9,"proc_id":"Appendectomy","datetime":"2016-01-20 01:58:00","price":9537.89,"age":86,"gender":"X","state":"Florida"},{"entry_id":10,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2018-05-11 11:09:35","price":23885.19,"age":92,"gender":"Male","state":"Georgia"},{"entry_id":11,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2013-06-19 04:16:45","price":18930.54,"age":88,"gender":"Male","state":"Georgia"},{"entry_id":12,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2010-08-29 15:15:29","price":28288.42,"age":78,"gender":"Female","state":"Georgia"},{"entry_id":13,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2018-06-02 24:58:25","price":10989.91,"age":89,"gender":"X","state":"Georgia"},{"entry_id":14,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2019-10-18 01:34:45","price":18930.51,"age":16,"gender":"X","state":"Georgia"},{"entry_id":15,"proc_id":"Coronary Artery Bypass Graft (CABG)","datetime":"2022-06-18 06:59:32","price":32116.92,"age":32,"gender":"Male","state":"Georgia"}]}';

const obj = JSON.parse(text);

//CARDS FOR THE STATIC PAGE --------------------------------------
//card 1
// document.getElementById("price-1").innerHTML = "$" + obj.data[1].price;
// document.getElementById("procedure-1").innerHTML = "Procedure: " + obj.data[1].proc_id;
// document.getElementById("location-1").innerHTML = "Location: " + obj.data[1].state;
// document.getElementById("age-1").innerHTML = "Patient Age: " + obj.data[1].age;
// document.getElementById("gender-1").innerHTML = "Patient Gender: " + obj.data[1].gender;

// //card 2
// document.getElementById("price-2").innerHTML = "$" + obj.data[2].price;
// document.getElementById("procedure-2").innerHTML = "Procedure: " + obj.data[2].proc_id;
// document.getElementById("location-2").innerHTML = "Location: " + obj.data[2].state;
// document.getElementById("age-2").innerHTML = "Patient Age: " + obj.data[2].age;
// document.getElementById("gender-2").innerHTML = "Patient Gender: " + obj.data[2].gender;

// //card 3
// document.getElementById("price-3").innerHTML = "$" + obj.data[3].price;
// document.getElementById("procedure-3").innerHTML = "Procedure: " + obj.data[3].proc_id;
// document.getElementById("location-3").innerHTML = "Location: " + obj.data[3].state;
// document.getElementById("age-3").innerHTML = "Patient Age: " + obj.data[3].age;
// document.getElementById("gender-3").innerHTML = "Patient Gender: " + obj.data[3].gender;

// //card 4
// document.getElementById("price-4").innerHTML = "$" + obj.data[4].price;
// document.getElementById("procedure-4").innerHTML = "Procedure: " + obj.data[4].proc_id;
// document.getElementById("location-4").innerHTML = "Location: " + obj.data[4].state;
// document.getElementById("age-4").innerHTML = "Patient Age: " + obj.data[4].age;
// document.getElementById("gender-4").innerHTML = "Patient Gender: " + obj.data[4].gender;

// //card 5
// document.getElementById("price-5").innerHTML = "$" + obj.data[5].price;
// document.getElementById("procedure-5").innerHTML = "Procedure: " + obj.data[5].proc_id;
// document.getElementById("location-5").innerHTML = "Location: " + obj.data[5].state;
// document.getElementById("age-5").innerHTML = "Patient Age: " + obj.data[5].age;
// document.getElementById("gender-5").innerHTML = "Patient Gender: " + obj.data[5].gender;

// //card 6
// document.getElementById("price-6").innerHTML = "$" + obj.data[6].price;
// document.getElementById("procedure-6").innerHTML = "Procedure: " + obj.data[6].proc_id;
// document.getElementById("location-6").innerHTML = "Location: " + obj.data[6].state;
// document.getElementById("age-6").innerHTML = "Patient Age: " + obj.data[6].age;
// document.getElementById("gender-6").innerHTML = "Patient Gender: " + obj.data[6].gender;

// //card 7
// document.getElementById("price-7").innerHTML = "$" + obj.data[7].price;
// document.getElementById("procedure-7").innerHTML = "Procedure: " + obj.data[7].proc_id;
// document.getElementById("location-7").innerHTML = "Location: " + obj.data[7].state;
// document.getElementById("age-7").innerHTML = "Patient Age: " + obj.data[7].age;
// document.getElementById("gender-7").innerHTML = "Patient Gender: " + obj.data[7].gender;

// //card 8
// document.getElementById("price-8").innerHTML = "$" + obj.data[8].price;
// document.getElementById("procedure-8").innerHTML = "Procedure: " + obj.data[8].proc_id;
// document.getElementById("location-8").innerHTML = "Location: " + obj.data[8].state;
// document.getElementById("age-8").innerHTML = "Patient Age: " + obj.data[8].age;
// document.getElementById("gender-8").innerHTML = "Patient Gender: " + obj.data[8].gender;

// //card 9
// document.getElementById("price-9").innerHTML = "$" + obj.data[9].price;
// document.getElementById("procedure-9").innerHTML = "Procedure: " + obj.data[9].proc_id;
// document.getElementById("location-9").innerHTML = "Location: " + obj.data[9].state;
// document.getElementById("age-9").innerHTML = "Patient Age: " + obj.data[9].age;
// document.getElementById("gender-9").innerHTML = "Patient Gender: " + obj.data[9].gender;

// // DYNAMIC CARDS
// //dynamic card 1
// document.getElementById("d-price-1").innerHTML = "$" + obj.data[0].price;
// document.getElementById("d-procedure-1").innerHTML = "Procedure: " + obj.data[0].proc_id;
// document.getElementById("d-location-1").innerHTML = "Location: " + obj.data[0].state;
// document.getElementById("d-age-1").innerHTML = "Patient Age: " + obj.data[0].age;
// document.getElementById("d-gender-1").innerHTML = "Patient Gender: " + obj.data[0].gender;

// //dynamic card 2
// document.getElementById("d-price-2").innerHTML = "$" + obj.data[10].price;
// document.getElementById("d-procedure-2").innerHTML = "Procedure: " + obj.data[10].proc_id;
// document.getElementById("d-location-2").innerHTML = "Location: " + obj.data[10].state;
// document.getElementById("d-age-2").innerHTML = "Patient Age: " + obj.data[10].age;
// document.getElementById("d-gender-2").innerHTML = "Patient Gender: " + obj.data[10].gender;

// //dynamic card 3
// document.getElementById("d-price-3").innerHTML = "$" + obj.data[11].price;
// document.getElementById("d-procedure-3").innerHTML = "Procedure: " + obj.data[11].proc_id;
// document.getElementById("d-location-3").innerHTML = "Location: " + obj.data[11].state;
// document.getElementById("d-age-3").innerHTML = "Patient Age: " + obj.data[11].age;
// document.getElementById("d-gender-3").innerHTML = "Patient Gender: " + obj.data[11].gender;

// //dynamic card 4
// document.getElementById("d-price-4").innerHTML = "$" + obj.data[12].price;
// document.getElementById("d-procedure-4").innerHTML = "Procedure: " + obj.data[12].proc_id;
// document.getElementById("d-location-4").innerHTML = "Location: " + obj.data[12].state;
// document.getElementById("d-age-4").innerHTML = "Patient Age: " + obj.data[12].age;
// document.getElementById("d-gender-4").innerHTML = "Patient Gender: " + obj.data[12].gender;

// //dynamic card 5
// document.getElementById("d-price-5").innerHTML = "$" + obj.data[13].price;
// document.getElementById("d-procedure-5").innerHTML = "Procedure: " + obj.data[13].proc_id;
// document.getElementById("d-location-5").innerHTML = "Location: " + obj.data[13].state;
// document.getElementById("d-age-5").innerHTML = "Patient Age: " + obj.data[13].age;
// document.getElementById("d-gender-5").innerHTML = "Patient Gender: " + obj.data[13].gender;

// //dynamic card 6
// document.getElementById("d-price-6").innerHTML = "$" + obj.data[14].price;
// document.getElementById("d-procedure-6").innerHTML = "Procedure: " + obj.data[14].proc_id;
// document.getElementById("d-location-6").innerHTML = "Location: " + obj.data[14].state;
// document.getElementById("d-age-6").innerHTML = "Patient Age: " + obj.data[14].age;
// document.getElementById("d-gender-6").innerHTML = "Patient Gender: " + obj.data[14].gender;


//Hidden DIV func - when the user searches, this replaces the static page cards with CABG cards
function clickButton() {

    let inputProcedure = document.getElementById('myInput').value;

    let inputState = document.querySelector('#inputState').value;
    

    var T = document.getElementById("hiddenDiv");
    T.style.display = "block";

    var U = document.getElementById("firstDiv");
    U.style.display = "none";
}


//Procedure Drop Down Menu --------------------------------------------

// drop down menu
function autocomplete(inp, arr) {
/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
var currentFocus;
/*execute a function when someone writes in the text field:*/
inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
        });
        a.appendChild(b);
        }
    }
});
/*execute a function presses a key on the keyboard:*/
inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
        }
    }
});
function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
    }
}
function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
    }
    }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

/*An array containing all the procedure names*/
var procedures = ["Knee Replacement", "Percutaneous Coronary Angioplasty (PTCA)", "Laminectomy", "Hip Replacement", "Spinal Fusion", "Cholecystectomy", "Bone Excision", "Hysterectomy", "Colon Resection", "Scar Excision", "Appendectomy", "Hip/Femur Fracture", "Coronary Artery Bypass Graft (CABG)", "Lower Extremity Fracture", "MRI", "CT Scan"];



//State Drop Down Menu -------------------------------------------- (not working)

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    }


/* an array containing all state names */
var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), procedures);


//------------------------------------------------------------------



