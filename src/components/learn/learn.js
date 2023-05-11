import React, { useState, useEffect } from 'react';
import classes from './learn.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
// state valtio
// import { snapshot } from 'valtio';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {
  currentList,
  intervalIncrease,
  intervalReset,
} from '../../redux/learnSlice';

//components
import QuestionBox from './questionBox';
import CurrentStats from './currentStats';
import RenderObjectList from '../ui/renderObjectList';
import ButtonText from '../ui/buttonText';
// logic components
import { createNewRound } from '../logic/learnLogic';

const Learn = props => {
  // if currentList is empty create "currentList" from array
  //// create new round with all objects where interval <= count
  //// if newRound empty count +1 until array
  // if array is empty show divBox list empty
  // show current question
  // after answer update interval

  const dispatch = useDispatch();
  const shortcuts = useSelector(state => state.settings.settings.shortcuts);

  const learn = useSelector(state => state.learn);

  const currentDefault = {
    list: learn.current.list || [],
    index: learn.current.index || 0,
  };
  const [currentQuestion, setCurrentQuestion] = useState(currentDefault);

  useEffect(() => {
    // console.log('✅ LEARN UPDATED EFFECT', learn.current.list, currentQuestion);
    setCurrentQuestion(currentDefault);
  }, [learn.list, learn.current.index, learn.current.list]);

  const [currentQuestionEmpty, setCurrentQuestionEmpty] = useState(true);
  useEffect(() => {
    if (currentQuestion.list.length === 0) {
      setCurrentQuestionEmpty(true);
      return;
    }
    setCurrentQuestionEmpty(false);
  }, [currentQuestion]);

  const currentObject = currentQuestion.list[currentQuestion.index];
  // const [object, setObject] = useState(current.list[current.index]);

  const handleIntervalTextOutput = obj => {
    // eslint-disable-next-line eqeqeq
    const oddOrEven = obj?.interval % 2 == 0 ? 'even' : 'odd';
    if (oddOrEven === 'even') {
      return [obj?.text1, obj?.text2];
    } else {
      return [obj?.text2, obj?.text1];
    }
  };
  const questionDefault = {
    text: handleIntervalTextOutput(
      currentQuestion.list[currentQuestion.index]
    ) || ['...', '...'],
    answer: '...',
    button: true,
  };
  const [question, setQuestion] = useState(questionDefault);
  useEffect(() => {
    setQuestion(questionDefault);
  }, [currentQuestion]);

  //show text ?
  //show answer
  //update object
  //update current progress
  const onButtonBoxHandler = id => {
    // console.log('✅', id);
    if (id === 'quest') {
      // handleIntervalTextOutput(currentObject);
      setQuestion({
        text: handleIntervalTextOutput(currentObject),
        answer: handleIntervalTextOutput(currentObject)[1],
        button: false,
      });
    }
    if (id === 'check') {
      dispatch(intervalIncrease({ id: currentObject.id }));
    }
    if (id === 'x') {
      dispatch(intervalReset({ id: currentObject.id }));
    }
  };

  const onClickNewRound = el => {
    console.log('✅', el);
  };

  // delete or edit
  const onClickHandler = (buttonId, id) => {
    if (buttonId === 'pen') {
      console.log('✅ pen');
      return;
    }
    if (buttonId === 'trash') {
      console.log('❌ trash');
      // dispatch(learnDelete(id));
      return;
    }
  };

  const onNewRoundHandler = () => {
    const newRound = createNewRound(learn.learn.list, learn.interval);
    dispatch(currentList({ list: newRound }));
  };

  const [editLearn, setEditLearn] = useState(false);
  const onEditLearnSwitch = () => {
    setEditLearn(prev => !prev);
  };

  // handle keyboard shortcuts
  document.onkeyup = function (e) {
    // console.log('✅', e.code);
    if (!shortcuts.learn) return;
    if (e.code === 'Enter') {
      console.log('✅ Enter');
    }
    if (e.code === 'Escape') {
      console.log('✅ Escape');
    }
  };
  //==================================================================
  return (
    <div className={classes.lernBox}>
      <div className={classes.editLearnSwitchBox}>
        <ButtonText
          name={'new round'}
          style={{ border: 'var(--clr_accent_blue) solid 2px' }}
          id={'newRound'}
          onClickHandler={onNewRoundHandler}
        ></ButtonText>
        <ButtonText
          name={editLearn ? 'learn' : 'edit list'}
          style={{ border: 'var(--clr_accent_blue) solid 2px' }}
          id={'editLearnSwitch'}
          onClickHandler={onEditLearnSwitch}
        ></ButtonText>
      </div>
      {!editLearn && (
        <div>
          <CurrentStats
            onClickHandler={onClickNewRound}
            currentRound={{
              length: learn.current.list?.length || 0,
              index: learn.current?.index || 0,
            }}
            total={{
              cards: learn.learn.list?.length,
              rounds: learn?.stats.totalRounds,
              archived: learn?.stats.archived.length,
            }}
          ></CurrentStats>
          {!currentQuestionEmpty && (
            <QuestionBox
              onClickHandler={onButtonBoxHandler}
              text1={question.text[0]}
              text2={question.answer}
              hideXBtn={question.button}
              hideQuest={!question.button}
              hideCheck={question.button}
            ></QuestionBox>
          )}
          {currentQuestionEmpty && (
            <div className={classes.emptyMessageBox}>
              <p>
                The current Round is empty or there are no translations saved !
              </p>
            </div>
          )}
        </div>
      )}
      {editLearn && (
        <RenderObjectList
          icon={faLightbulb}
          name={'all translations'}
          array={learn.list}
          mainLanguage={'de'}
          onClickHandler={onClickHandler}
          borderColor={'--clr_accent_blue'}
          gradientColor={{ left: '--secondClr', right: '--clr_accent_blue' }}
        ></RenderObjectList>
      )}
    </div>
  );
};

export default Learn;
