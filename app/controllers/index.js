import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({



  emailAddress: "",

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvite(){
      alert(`Saving in progress of: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We got your email! ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }

  }


});
