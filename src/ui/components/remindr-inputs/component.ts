import Component, { tracked } from '@glimmer/component';

export default class RemindrInputs extends Component {
  @tracked current = 0;
  questions = [
    'What do you want to be reminded of?',
    'When do you want to be reminded?',
    'What phone number should we call?'
  ];

  @tracked('current')
  get currentQuestion() {
    return this.questions[this.current];
  }

  next() {
    this.current = this.current + 1;
  }
}