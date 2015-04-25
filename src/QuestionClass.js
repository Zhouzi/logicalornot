import questions from './questions';

export default class QuestionClass {
  constructor () {
    this.questions = questions;
    this.pickedIndexes = [];
    this.currentIndex = null;
  }

  getQuestion (index) {
    this.pickedIndexes.push(index);
    this.currentIndex = index;

    return this.questions[index];
  }

  get currentQuestion () {
    if (this.currentIndex === null) return {};
    return this.questions[this.currentIndex];
  }

  get randomQuestion () {
    let index = QuestionClass.rand(0, this.questions.length - 1);
    let i = 0;

    while (this.pickedIndexes.indexOf(index) >= 0 && ++i < 10) {
      index = QuestionClass.rand(0, this.questions.length - 1);
    }

    return this.getQuestion(index);
  }

  static rand (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}