import DS from 'ember-data';

export default DS.Model.extend({
  bankName: DS.attr("string"),
  bankCity: DS.attr("string"),
  bankImage: DS.attr("string"),
  bankOwner: DS.attr("string"),
  openedOn: DS.attr("string")

});
