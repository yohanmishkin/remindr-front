import {
  create,
  visitable,
  fillable,
  clickable,
  isVisible
} from 'ember-cli-page-object';

export default create({
  visitLandingPage: visitable('/'),
  enterMessage: fillable('.question-message'),
  enterDateTime: fillable('.question-datetime input'),
  enterPhoneNumber: fillable('.question-phone'),
  clickNext: clickable('.next-question'),
  isMessageQuestionVisible: isVisible('.question-message'),
  isDatetimeQuestionVisible: isVisible('.question-datetime'),
  isPhoneQuestionVisible: isVisible('.question-phone')
});
