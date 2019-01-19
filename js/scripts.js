function Banking(balance){
  // this.withdraw = withdraw;
  // this.deposit=deposit;
  this.balance=balance;
}

function Entering(userName,password){
  this.userName=userName;
  this.password=password;
}

var data,enter1, enter2;

Banking.prototype.subs=function(withdraw){
  if(withdraw<=this.balance){
    return this.balance-=withdraw;
  }
  else {
    alert("You have no sufficient funds to perform this transaction.");
  }
}

Banking.prototype.adding=function(deposit){
  return this.balance+=deposit;
}

$(document).ready(function(){
<<<<<<< HEAD
  alert("Enter the INITIAL BALANCE first for further transactions to be made.");
=======

>>>>>>> 14b8e5fc5bb9a696f03a1117c93c0e84908ebc22
  $("button#create").click(function(event){
    $(".creation").show();
    $("#enter").hide();
    $(".row").hide();
    var fName=$("input#firstName").val();
    var lName=$("input#lastName").val();
    var uName=$("input#uName").val();
    var pWord=$("input#pWord").val();
    var initBal=parseInt($("input#initBal").val());

    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#uName").val("");
    $("input#pWord").val("");
    $("input#initBal").val("");
    event.preventDefault();
  });
  $("#submit").click(function(event){
    $(".creation").hide();
    $("#create").hide();
    $("#enter").show();
<<<<<<< HEAD

    var initBal=parseInt($("input#initBal").val());
    var uName=$("input#userName").val();
    var pWord=$("input#password").val();

    this.balance=initBal;
    $("#balance").text(this.balance);

=======

    var initBal=parseInt($("input#initBal").val());
    var uName=$("input#userName").val();
    var pWord=$("input#password").val();

    this.balance=initBal;
    $("#balance").text(this.balance);

>>>>>>> 14b8e5fc5bb9a696f03a1117c93c0e84908ebc22
    data = new Banking(initBal)
    console.log(data)

    event.preventDefault();
  });

  $("button#enter").click(function(event){
    var userName=$("input#uName").val();
    var password=$("input#pWord").val();

    this.userName=userName;
    this.password=password;
    $("#userName").val(this.userName);
    $("#password").val(this.password);

    if((this.userName==userName) && (this.password==password)){
      $(".row").show();
    }
    else{
      alert("either the entered username or password is not correct!");
    }
    $("input#userName").val("");
    $("input#password").val("");
    $(".credentials").show();
    event.preventDefault();
  });

  $("#remove").click(function(event){
    var withdrawn=parseInt($("input#withdraw").val());
    $("#one").text(withdrawn);
    data.subs(withdrawn);
    $("#balance").text(data.balance);
    $("input#withdraw").val("");
    event.preventDefault();
  });
  $("#save").click(function(event){
    var deposited=parseInt($("input#deposit").val());
    $("#two").text(deposited);
    data.adding(deposited);
    $("#balance").text(data.balance);
    $("input#deposit").val("");
    event.preventDefault();
  });
});
