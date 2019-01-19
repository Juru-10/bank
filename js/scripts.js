function Banking(balance){
  // this.withdraw = withdraw;
  // this.deposit=deposit;
  this.balance=balance;
}

var data,enter1, enter2;
var uName,pWord;

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

  $("button#create").click(function(event){
    $("#create").hide();
    $(".creation").show(function(){
      alert("Enter the INITIAL BALANCE first the click the SUBMIT Button for further transactions to be made.");
    });
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
  $("#submit1").click(function(event){
    $(".creation").hide();
    $("#create").hide();
    $("#enter").show();

    var initBal=parseInt($("input#initBal").val());
    this.balance=initBal;
    $("#balance").text(this.balance);

    // if(initBal=="NaN"){
    //   alert("Enter the INITIAL BALANCE first the click the SUBMIT Button for further transactions to be made.");
    // }

    data = new Banking(initBal)
    console.log(data)

    event.preventDefault();
  });

  $("button#enter").click(function(event){
    $("#enter").hide();
    $(".credentials").show();

    event.preventDefault();
  });

  $("#submit2").click(function(event){
    $(".credentials").hide();
    $("button#enter").hide();
    $("#logOut").show();

    uName=$("input#uName").val();
    pWord=$("input#pWord").val();

    var userName=$("input#uName").val();
    var password=$("input#pWord").val();

    $("#userName").text(uName);
    $("#password").text(pWord);

    if((userName==uName) && (password==pWord)){
      $(".row").show();
    }
    else{
      alert("either the entered username or password is not correct!");
    }
    $("input#userName").val("");
    $("input#password").val("");
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

  $("#logOut").click(function(event){
    $("button#create").show();
    $(".credentials").hide();
    $(".row").hide();
    $("#logOut").hide();
    $("#enter").show();
    event.preventDefault();
  });
});
