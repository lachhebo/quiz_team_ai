import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import isma from '../skool_ai/isma.jpg';
import taha from '../skool_ai/taha.jpg';
import moal from '../skool_ai/moal.jpg';
import lena from '../skool_ai/lena.jpg';
import khna from '../skool_ai/khna.jpg';
import oumi from '../skool_ai/oumi.jpg';
import rofa from '../skool_ai/rofa.jpg';
import theo from '../skool_ai/theo.jpg';
import arthur from '../skool_ai/arthur.jpg';



function Result(props) {
  function soulMate(string_result) {
    if (string_result === 'isma') {
      return isma
    }
    if (string_result === 'arthur') {
      return arthur
    }
    if (string_result === 'lena') {
      return lena
    }
    if (string_result === 'khna') {
      return khna
    }
    if (string_result === 'moal') {
      return moal
    }
    if (string_result === 'oumi') {
      return oumi
    }
    if (string_result === 'rofa') {
      return rofa
    }
    if (string_result === 'taha') {
      return taha
    }
    if (string_result === 'theo') {
      return theo
    }
  }

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result-div">
        <img src={soulMate(props.quizResult)} alt={props.quizResult} className="img-circle" />
        <p> Your AI skool soulmate is <strong>{props.quizResult}</strong>! </p>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
