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
import { Container, Row, Col, Image, OverlayTrigger, Popover } from 'react-bootstrap';


var trigramme_to_data = {
  'oumi': {
    'name': 'Michael',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'arthur': {
    'name': 'Arthur',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'moal': {
    'name': 'Michael',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'khna': {
    'name': 'Nacim',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'taha': {
    'name': 'Taha',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'rofa': {
    'name': 'Fabien',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'lena': {
    'name': 'Lea',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'isma': {
    'name': 'Ismaël',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  },
  'theo': {
    'name': 'Théophile',
    'anecdote': "élue 3 fois meilleur bodybuilder unijambiste de France",
    'lien_askbob': "https://askbob.octo.com/users/oumi",
    'compétence': ['...']
  }
}


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

  function otherSoulMate(string_result) {
    var others = [];

    if (string_result !== 'isma') {
      others.push(isma)
    }
    if (string_result !== 'arthur') {
      others.push(arthur)
    }
    if (string_result !== 'lena') {
      others.push(lena)
    }
    if (string_result !== 'khna') {
      others.push(khna)
    }
    if (string_result !== 'moal') {
      others.push(moal)
    }
    if (string_result !== 'oumi') {
      others.push(oumi)
    }
    if (string_result !== 'rofa') {
      others.push(rofa)
    }
    if (string_result !== 'taha') {
      others.push(taha)
    }
    if (string_result !== 'theo') {
      others.push(theo)
    }

    return others
  }


  function otherSoulMateName(string_result) {
    var others = [];

    if (string_result !== 'isma') {
      others.push('isma')
    }
    if (string_result !== 'arthur') {
      others.push('arthur')
    }
    if (string_result !== 'lena') {
      others.push('lena')
    }
    if (string_result !== 'khna') {
      others.push('khna')
    }
    if (string_result !== 'moal') {
      others.push('moal')
    }
    if (string_result !== 'oumi') {
      others.push('oumi')
    }
    if (string_result !== 'rofa') {
      others.push('rofa')
    }
    if (string_result !== 'taha') {
      others.push('taha')
    }
    if (string_result !== 'theo') {
      others.push('theo')
    }

    return others
  }

  function renderTooltipSoulMate(props) {
    return (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{props.toUpperCase()}</Popover.Title>
        <Popover.Content>
          <strong>{trigramme_to_data[props]['name']}</strong>, {trigramme_to_data[props]['anecdote']}, retrouve le sur <a href={trigramme_to_data[props]['lien_askbob']} target="_blank"  rel="noopener noreferrer">askbob</a>
        </Popover.Content>
      </Popover>
    );
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


      <Container>
        <Row>
          <Col xs={1} md={4}></Col>
          <Col xs={4} md={4}>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide:  1000}}
              overlay={renderTooltipSoulMate(props.quizResult)}
            >
              <Image src={soulMate(props.quizResult)} roundedCircle />
            </OverlayTrigger>

          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
      </Container>

      <Container>

        <Row className="rowSkoolIA">
          <Col>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide:  1000}}
              overlay={renderTooltipSoulMate(otherSoulMateName(props.quizResult)[0])}
            >
              <Image src={otherSoulMate(props.quizResult)[0]} thumbnail />
            </OverlayTrigger>
          </Col>
          <Col>
          <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 1000 }}
              overlay={renderTooltipSoulMate(otherSoulMateName(props.quizResult)[1])}
            >
              <Image src={otherSoulMate(props.quizResult)[1]} thumbnail />
            </OverlayTrigger>
          </Col>
          <Col>
          <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 1000 }}
              overlay={renderTooltipSoulMate(otherSoulMateName(props.quizResult)[2])}
            >
              <Image src={otherSoulMate(props.quizResult)[2]} thumbnail />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="rowSkoolIA">
          <Col>
          <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 1000 }}
              overlay={renderTooltipSoulMate(otherSoulMateName(props.quizResult)[3])}
            >
              <Image src={otherSoulMate(props.quizResult)[3]} thumbnail />
            </OverlayTrigger>
          </Col>
          <Col>
          <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 1000 }}
              overlay={renderTooltipSoulMate(otherSoulMateName(props.quizResult)[4])}
            >
              <Image src={otherSoulMate(props.quizResult)[4]} thumbnail />
            </OverlayTrigger>
          </Col>
          <Col>
          <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 1000 }}
              overlay={renderTooltipSoulMate(otherSoulMateName(props.quizResult)[5])}
            >
              <Image src={otherSoulMate(props.quizResult)[5]} thumbnail />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col >
          <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 1000 }}
              overlay={renderTooltipSoulMate(otherSoulMateName(props.quizResult)[6])}
            >
              <Image src={otherSoulMate(props.quizResult)[6]} thumbnail />
            </OverlayTrigger>
          </Col>
          <Col></Col>
        </Row>

      </Container>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
