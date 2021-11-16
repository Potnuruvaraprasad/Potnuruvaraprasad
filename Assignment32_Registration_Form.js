
   
var data = {
    userdetails:{},
    qualification:{},
    address:{}
};
var getdata = () => {
    data.userdetails.userid = document.querySelector("#userid").value;
    data.userdetails.password = document.querySelector("#password").value;
    data.userdetails.email = document.querySelector("#email").value;
    if(document.querySelector("#male").checked){
        data.userdetails.gender = document.querySelector("#male").value;
    }else if(document.querySelector("#female").checked){
        data.userdetails.gender = document.querySelector("#female").value;
    }
    // data.qualification.language =  document.querySelector(".lang").value
    // var a = []
    //  a =document.querySelector(".lang").value;
    // console.log(a)
    data.qualification.Education =  document.querySelector("#eduacation").value;
    
};
console.log(data);