var numField1 = document.getElementById('numfield1');
var numField2 = document.getElementById('numfield2');
var Result = document.getElementById('result');
var form1 = document.getElementById('Form1');

form1.addEventListener('submit', function(event) {
    
    if (numField1.value === "" || numField2.value ==="") {
        alert("Please enter values");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var result = x / y * 100;
        Result.innerText = result + "%";
        event.preventDefault();
    }
});
    

    
    
//var name = "I am Chuan Wei Zhang";
//        alert(name);

//console.log(name);
        
//    function dropdownMenu() {
//        var x = document.getElementById("dropdownClick");
//        if (x.className == "topnav") {
//            x.className += " responsive";
//            /*change topnav to topnav responsive*/
//        } else {
//            x.className = "topnav";
//        }
//    }
