import Ember from 'ember';
import ENV from 'rember/config/environment';

const {
	Controller,
	inject,
	computed
} = Ember;

export default Controller.extend({
	ajax: inject.service(),

	questionNumber: 0,
	questions: ['question-message', 'question-datetime', 'question-phone'],

	currentQuestion: computed('questionNumber', function() {
		return this.get('questions')[this.get('questionNumber')];
	}),
	isAskingQuestions: computed('questionNumber', function() {
		let numberOfQuestions = this.get('questions').length;
		if (this.get('questionNumber') < numberOfQuestions) {
			return true;
		}
		return false;
	}),

	actions: {
		nextQuestion() {
			this.set('questionNumber', this.get('questionNumber') + 1);
		},
		processStripeToken({card, email, id}) {
			return this.get('ajax').request(`${ENV.host}`, {
				method: 'POST',
				data: {card, email, id}
			}).then(() => {

			}).catch(() => {

			});
		}
	}
});
