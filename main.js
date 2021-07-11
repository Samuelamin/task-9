function hidebox(){
    var a = document.getElementById("information");

    if( a.style.display==="none") {
        a.style.display="block";
    }else{
        a.style.display="none";
    }
}


function hidebox2(){
    var a = document.getElementById("test-1");

    if( a.style.display==="none") {
        a.style.display="block";
    }else{
        a.style.display="none";
    }
}

function darkmode(){
    document.body.classList.toggle('dark');
    document.body.style.transition = "all 1s";
}
var b = 5
var c = 5
var d = b + c
var e = d - 1
var f = e % 2
document.getElementById('test-1').innerHTML = d + ' '+ e + ' ' + f  ;


