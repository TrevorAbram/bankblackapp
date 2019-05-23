import Route from '@ember/routing/route';


export default Route.extend({
  model(){
    return this.store.findAll('bank');
  },

  actions: {
    destroyBank(bank) {
      bank.destroyRecord();
      this.transitionTo('index');
    }
  }
});
