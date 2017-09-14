import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import ENV from 'rember/config/environment';
import RSVP from 'rsvp';

const { Service } = Ember;

moduleFor('controller:index', 'Unit | Controller | index', {
  needs: ['service:ajax']
});

test('Posts remindr details to lambda', function(assert) {
  ENV.host = 'http://test-api.com';

  let payload;
  this.register('service:ajax', Service.extend({
    request(url, options) {
      payload = options.data
      return RSVP.resolve();
    }
  }));

  let controller = this.subject({ message: 'remind me!', phone: '123-123-1234', cron: '* * * *' });
  controller.send('processStripeToken', { card: 1234, email: 'qwer@qwer.com', id: 'tok_1234' });

  assert.ok(payload.card, 'Payload includes card');
  assert.ok(payload.email, 'Payload includes email');
  assert.ok(payload.token, 'Payload includes token');
  assert.ok(payload.message, 'Payload includes message');
  assert.ok(payload.phone, 'Payload includes phone');
  assert.ok(payload.cron, 'Payload includes cron');
});
