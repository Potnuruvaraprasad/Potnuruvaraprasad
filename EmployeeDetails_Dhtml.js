
   
var details = {};

var fun = () =>{
    details.FastName = document.querySelector("#fname").value;
    details.LastName = document.querySelector("#lname").value;
    details.Age = document.querySelector("#age").value;
    details.Dept = document.querySelector("#deptname").value;
    details.Bsal = document.querySelector("#salary").value;
    details.Bsal = parseInt(details.Bsal);
    document.querySelector("#tsal").innerHTML = details["Bsal"];
    calculation();
}
var calculation = () => {
    var pf = details.Bsal * (15/100);
    details.Bsal = pf + details.Bsal;
    if ((details.Bsal) >= 5000){
        tax = details.Bsal * (15/100);
        details.Bsal = details.Bsal - tax ;
    }else if ((details.Bsal) >= 4000){
        tax = details.Bsal * (10/100);
        details.Bsal = details.Bsal - tax ;
    }else{
        details.Bsal = details.Bsal
    }
    result();
}
var result = () => {
    document.querySelector("#ul1").style.display = "none";
    document.querySelector("#results").style.display = "block";
    for (var key in details){
        var id = "#" + key ;;
        document.querySelector(id).innerHTML = details[key];
    }
    
}
var dis = () =>{
    document.querySelector("#ul1").style.display = "block"
    document.querySelector("#results").style.display = "none";
    document.querySelector("#fname").value = '';
    document.querySelector("#lname").value = '';
}
