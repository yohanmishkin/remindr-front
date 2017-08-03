import Component, { tracked } from '@glimmer/component';

export default class RemindrInputs extends Component {
  @tracked current = 0;
  questions = [
    ['What do you want us to remind you about?', 'text'],
    ['When do you want to be reminded?', 'date'],
    ['What phone number should we call?', 'phone']
  ];

  @tracked('current')
  get currentQuestion() {
    return this.questions[this.current][0];
  }

  @tracked('current')
  get questionNumber() {
    return this.current + 1;
  }

  next() {
    this.current = this.current + 1;
  }
}