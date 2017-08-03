import { test } from 'qunit';
import moduleForAcceptance from 'rember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create reminder');

test('visiting /create-reminder', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
