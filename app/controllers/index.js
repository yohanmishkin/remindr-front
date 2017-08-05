import Ember from 'ember';

export default Ember.Controller.extend({
	questionNumber: 0,
	questions: ['question-message', 'question-datetime', 'question-phone'],
	currentQuestion: Ember.computed('questionNumber', function() {
		return this.get('questions')[this.get('questionNumber')];
	}),

	actions: {
		nextQuestion() {
			this.set('questionNumber', this.get('questionNumber') + 1);
		}
	}
});
