import { Meteor } from 'meteor/meteor';

favoritos = new Meteor.Collection("Favoritos");

Meteor.startup(() => {
  // code to run on server at startup
});
