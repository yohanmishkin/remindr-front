import { test } from 'qunit';
import moduleForAcceptance from 'rember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create reminder');

test('visiting /create-reminder', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('I should be able to create reminder', function(assert) {
	visit('/');

	enterMessage('Please remind me to do this');
	clickNext();
	enterDateTime(moment().add(1, 'days'));
	clickNext();
	enterPhoneNumber('123-123-1234');
	clickNext();

	andThen(() => {
		assert.ok(stripeCheckoutVisible());
	});
});