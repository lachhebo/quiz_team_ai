import React from 'react';
import PropTypes from 'prop-types';
import StartButton from './StartButton'
import auma from '../skool_ai/auma.png';

function StartPage(props) {
  return (
    <div className="startPage">
      <div className="subtitle">
        Découvre qui sera ton skool-mate !
      </div>
      <StartButton onClick={props.onStartQuiz}>
        Start !
      </StartButton>
      <div>
        <img src={auma} alt="auma" height="220px" width="220px"></img>
      </div>
    </div>
  );
}

StartPage.propTypes = {
  result: PropTypes.string.isRequired,
  onStartQuiz: PropTypes.func.isRequired
};

export default StartPage;
