function Banking(balance, withdraw, deposit){
  // this.withdraw = withdraw;
  // this.deposit=deposit;
  this.balance=balance;
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

  $("button#create").click(function(event){
    $(".creation").show();
    $("#enter").hide();
    $(".row").hide();
    var fName=$("input#firstName").val();
    var lName=$("input#lastName").val();
    var uName=$("input#userName").val();
    var pWord=$("input#password").val();
    var initBal=parseInt($("input#initBal").val());

    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#userName").val("");
    $("input#password").val("");
    $("input#initBal").val("");
    event.preventDefault();
  });
  $("#submit").click(function(event){
    $(".creation").hide();
    $("#create").hide();
    $("#enter").show();

    var initBal=parseInt($("input#initBal").val());
    var uName=$("input#userName").val();
    var pWord=$("input#password").val();

    this.balance=initBal;
    $("#balance").text(this.balance);

    data = new Banking(initBal,)
    console.log(data)

    event.preventDefault();
  });

  $("button#enter").click(function(event){

        var userName=$("input#userName").val();
        var password=$("input#password").val();
        if((userName == "") && (password == "")){
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
