import { module, test } from 'qunit';
import { setupTest } from 'blog-front/tests/helpers';

module('Unit | Serializer | article', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('article');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('article', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
