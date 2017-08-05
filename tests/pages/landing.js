import {
  create,
  visitable,
  fillable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visitLandingPage: visitable('/'),
  enterMessage: fillable('.question-message'),
  enterDateTime: fillable('.question-datetime input'),
  enterPhoneNumber: fillable('.question-phone'),
  clickNext: clickable('.next-question')
});
