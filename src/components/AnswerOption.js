import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function AnswerOption(props) {
  return (
    <Button
      htmlFor={props.answerType}
      id={props.answerType}
      value={props.answerType}
      disabled={props.answer}
      onClick={props.onAnswerSelected}>
        {props.answerContent}
      </Button>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
