/*
74acb974b350
74acb974C211
74ACB974C1F8
74ACB974B355
74ACB974B8D6
74ACB974C213
74ACB974C0A6
74ACB974C321
74ACB974C32x
*/


"use strict"

var regexMACv1 = /([0-9a-fA-F][0-9a-fA-F]){5}([0-9a-fA-F][0-9a-fA-F])/;
var regexMACv2 = /^([0-9a-f]{1,2}[\.:-]){5}([0-9a-f]{1,2})$/i;
//regexMAC.test(mytextarea[0]);

var btn1 = document.getElementById("submit");
btn1.addEventListener("click", function () {
    var macsArr = document.getElementById("txtarea").value.split("\n");
    macsArr.forEach(function (mac) {
        
        //console.log(mac);

        //Check if the MAC is correct
        console.log(checkMAC(mac));
        mac = formatMAC(mac);
        createParagraph(mac);
    });

});


var btn2 = document.getElementById("reset");
btn2.addEventListener("click", function () {
    document.getElementById("txtarea").value = "";
    console.log("Reset");
});

function checkMAC(mac) {
    return regexMACv2.test(mac);
}

// https://stackoverflow.com/questions/17933471/convert-integer-mac-address-to-string-in-javascript
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_split_char
function formatMAC(str) {
    //var str = "74ACB974C321";
    str = str.toUpperCase();
    var arr = str.split("");
    var text = "";
    var macaddress = [];

    for (let i = 0; i < arr.length; i=i+2) {
        //text += arr[i] + ":";
        macaddress.push(str.substr(i, 2));
    }
    console.log(macaddress.join(":"));
    return macaddress.join(":");
}


function createParagraph(mac){
    //var mac = "74ACB974C321";
    var myParagraph = document.createElement("p");
    if (checkMAC(mac)){
        myParagraph.style.color = "blue";
    }else{
        myParagraph.style.color = "red";
    }
    var myParagraphText = document.createTextNode(mac);
    myParagraph.appendChild(myParagraphText);
    document.getElementById("macvalidado").appendChild(myParagraph);
    //document.body.appendChild(myParagraph);
}