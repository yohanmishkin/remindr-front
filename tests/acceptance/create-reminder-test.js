import { test } from 'qunit';
import moduleForAcceptance from 'rember/tests/helpers/module-for-acceptance';
import page from 'rember/tests/pages/landing';

moduleForAcceptance('Acceptance | create reminder');

test('I should be able to create reminder', function(assert) {
  page
    .visitLandingPage()
    .enterMessage('Please remind me to do this')
    .clickNext()
    .enterDateTime(new Date((new Date()).getTime() + 1 * 86400000))
    .clickNext()
    .enterPhoneNumber('123-123-1234')
    .clickNext();

  andThen(() => {
    assert.ok(page.contains('Schedule reminder'), 'Checkout appears');
  });
});