import React from 'react';
import PropTypes from 'prop-types';
import StartButton from './StartButton'

function StartPage(props) {
  return (
    <div className="startPage">
      <div className="subtitle">
        Découvre qui sera ton skool-mate !
      </div>
      <StartButton onClick={props.onStartQuiz}>
        Start !
      </StartButton>
    </div>
  );
}

StartPage.propTypes = {
  result: PropTypes.string.isRequired,
  onStartQuiz: PropTypes.func.isRequired
};

export default StartPage;
