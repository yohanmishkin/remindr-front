import Component, { tracked } from '@glimmer/component';

export default class RemindrInputs extends Component {
  @tracked current = 0;
  questions = [
    'What are you trying not to forget?',
    'When do you want to be reminded?',
    'What phone number should we call?'
  ];

  @tracked('current')
  get currentQuestion() {
    return this.questions[this.current];
  }

  @tracked('current')
  get questionNumber() {
    return this.current + 1;
  }

  next() {
    this.current = this.current + 1;
  }
}