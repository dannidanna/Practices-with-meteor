import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

favoritos = new Meteor.Collection("Favoritos");

/*Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clic  ked
    instance.counter.set(instance.counter.get() + 1);
  },
});*/

Template.categories.favoritos = function(){
  return favoritos.find({}, {sort: {Category: 1}});
}
