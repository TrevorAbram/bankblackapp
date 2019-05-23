import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  textMessage: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isValid: match('textMessage', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveSend() {
      alert(`We're processing...${('emailAddress')}`);
      this.set('Thanks!')
    }
  }
});
