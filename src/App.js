import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import StartPage from './components/StartPage';
import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: 'start_page'
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.startQuizz = this.startQuizz.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    var answers = answer.split(',')

    answers.forEach(answer => {
      this.setState((state, props) => ({
        answersCount: {
          ...state.answersCount,
          [answer]: (state.answersCount[answer] || 0) + 1
        },
        answer: answer
      }));

    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
      this.setState({ result: result[0] });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  renderPage() {
    if (this.state.result === 'start_page') {
      return this.renderStartPage()
    } else if (this.state.result) {
      return this.renderResult()
    } else {
      return this.renderQuiz()
    }
  }

  renderStartPage(){
    return <StartPage result={this.state.result} onStartQuiz={this.startQuizz} />;
  }

  startQuizz(event){
    const result = ''
    this.setState({ result: result });
  }


  render() {
    return (
      <div className="App">
        <div className="Title">
          AUM'AI Skool Test
        </div>
        <div className="RenderPage">
          {this.renderPage()}
        </div>
      </div>
    );
  }
}

export default App;
