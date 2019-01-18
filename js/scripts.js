var access=function(){
  return money=1000;
}

function Banking(money){
  this.withdraw=0;
  this.deposit=0;
  this.balance=money;
}

Banking.prototype.remove=function(){
  this.balance-=this.withdraw;
}

Banking.prototype.save=function(){
  this.balance+=this.deposit;
}

$(document).ready(function(){
  $("button#enter").click(function(event){
    event.preventDefault();
    $(".form").show();

    $("#submit").click(function(event){
      var userName=$("input#userName").val();
      var password=$("input#password").val();
      if((userName == "assu") && (password == "12345")){
        $(".row").show();
      }
      else{
        alert("either the entered username or password is not correct!");
      }

      $("input#userName").val("");
      $("input#password").val("");
      event.preventDefault();
    });
  });

  // var withdrawn=$("input#withdraw").val();
  // var deposited=$("input#deposit").val();

  // enter1=new Banking(withdrawn);
  // enter2=new Banking(deposited);

  // $("#one").append(withdrawn.withdraw);
  // $("#one").text(deposited.deposit);

  $("#remove").click(function(event){
    var withdrawn=$("input#withdraw").val();
    enter1=new Banking(withdrawn);
    $("#one").text(withdrawn.withdraw);
    $("#balance").append(enter1.remove());
    $("input#withdraw").val("");
  });
  $("#save").click(function(event){
    var deposited=$("input#deposit").val();
    enter2=new Banking(deposited);
    $("#one").text(deposited.deposit);
    $("#balance").append(enter2.save());
    $("input#deposit").val("");
  });

  // $("input#withdraw").val("");
  // $("input#deposit").val("");


});
