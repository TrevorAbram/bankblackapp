import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | banks/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:banks/new');
    assert.ok(route);
  });
});
