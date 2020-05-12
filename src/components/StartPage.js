import React from 'react';
import PropTypes from 'prop-types';

function StartPage(props) {
  return (
    <button onClick={props.onStartQuiz}>
        Start
    </button>
  );
}

StartPage.propTypes = {
  result: PropTypes.string.isRequired,
  onStartQuiz: PropTypes.func.isRequired
};

export default StartPage;
