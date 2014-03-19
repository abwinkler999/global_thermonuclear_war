var Cities = new Meteor.Collection('DoomedCities');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Please enter targets.";
  };

  Template.nukeCities.events({
    'click #addCity' : function() {
      var textBox = $('#cityToAdd');
      Cities.insert({
        name : textBox.val()
      });
      textBox.val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
