//// back end ////
function Package(name, location, days, activities, price) {
  this.name = name;
  this.location = location;
  this.days = days;
  this.activities = activities;
  this.price = this.packagePrice();
}




Package.prototype.packagePrice = function () {
  var cost = 500;
  for (var i = 0; i < this.activities.length; i++) {
    cost += 100;
  }
  return cost;
}

// console.log(cost);








//// front end ////
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var location = $("input:radio[name=location]:checked").val();
    var days = parseInt($("input#days").val());
    var activities = [];
    $(":checkbox:checked").each(function(i) {
      activities[i] = $(this).val();
    });
    // var price = 500;
    var newPackage = new Package(name, location, days, activities);


    // $(".output").html(name + " " + location + `<br>` + days);
      $(".output").show();
      $(".price").text(" $" + newPackage.price);

      $(".name").text(name);
  });
});
