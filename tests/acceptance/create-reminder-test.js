import { test } from 'qunit';
import moduleForAcceptance from 'rember/tests/helpers/module-for-acceptance';
import page from 'rember/tests/pages/landing';

moduleForAcceptance('Acceptance | create reminder');

test('I should be able to create reminder', function(assert) {
  page
    .visitLandingPage();

  andThen(() => {
    assert.ok(page.isMessageQuestionVisible, 'Message question visible');
    assert.notOk(page.isDatetimeQuestionVisible, 'Datetime question not visible');
    assert.notOk(page.isPhoneQuestionVisible, 'Phone question not visible');
    assert.notOk(page.isPaymentButtonVisible, 'Payment button not visible');
  });

  page
    .enterMessage('Please remind me to do this')
    .clickNext();

  andThen(() => {
    assert.notOk(page.isMessageQuestionVisible, 'Message question not visible');
    assert.ok(page.isDatetimeQuestionVisible, 'Datetime question visible');
    assert.notOk(page.isPhoneQuestionVisible, 'Phone question not visible');
    assert.notOk(page.isPaymentButtonVisible, 'Payment button not visible');
  });

  page
    .enterDateTime(new Date((new Date()).getTime() + 1 * 86400000))
    .clickNext();

  andThen(() => {
    assert.notOk(page.isMessageQuestionVisible, 'Message question not visible');
    assert.notOk(page.isDatetimeQuestionVisible, 'Datetime question not visible');
    assert.ok(page.isPhoneQuestionVisible, 'Phone question visible');
    assert.notOk(page.isPaymentButtonVisible, 'Payment button not visible');
  });

  page
    .enterPhoneNumber('123-123-1234')
    .clickNext();
 
  andThen(() => {
    assert.ok(page.isPaymentButtonVisible, 'Payment button visible');
  });
});