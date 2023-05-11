import React, { useState, useEffect } from 'react';
import classes from './learn.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

//redux
import { useSelector, useDispatch } from 'react-redux';

//components
import QuestionBox from './questionBox';
import CurrentStats from './currentStats';
import RenderObjectList from '../ui/renderObjectList';
import ButtonText from '../ui/buttonText';
// state valtio
// import { snapshot } from 'valtio';

// if current list is empty create from array
// if array is empty show divBox list empty
// show current question
// after answer update interval

const Learn = props => {
  const dispatch = useDispatch();
  const shortcuts = useSelector(state => state.settings.settings.shortcuts);
  const learn = useSelector(state => state.learn);

  const currentDefault = {
    list: learn.current.list || [],
    index: learn.current.index || 0,
  };
  const [current, setCurrent] = useState(currentDefault);

  useEffect(() => {
    console.log('✅ LEARN UPDATED EFFECT');
    setCurrent(currentDefault);
  }, [learn.list, learn.current.index]);

  const currentObject = current.list[current.index];
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
    text: handleIntervalTextOutput(current.list[current.index]) || [
      '...',
      '...',
    ],
    answer: '...',
    button: true,
  };
  const [question, setQuestion] = useState(questionDefault);
  useEffect(() => {
    setQuestion(questionDefault);
  }, [current]);

  const knowItOrNotDispatchCount = (id, knowIt) => {
    dispatch(intervalCount(id, knowIt));
  };

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
      knowItOrNotDispatchCount(currentObject.id, true);
      // dispatch object intervall +1
    }
    if (id === 'x') {
      knowItOrNotDispatchCount(currentObject.id, false);
      // dispatch object count 0 & interval 0
    }
  };

  //show text ?
  //show answer
  //update object
  //update current progress

  const onClickNewRound = el => {
    console.log('✅', el);
  };

  const filteredArray = array => {
    return array.filter(el => el.count >= el.interval);
  };

  // delete or edit
  const onClickHandler = (buttonId, id) => {
    if (buttonId === 'pen') {
      console.log('✅ pen');
      return;
    }
    if (buttonId === 'trash') {
      dispatch(learnDelete(id));
      return;
    }
  };

  const onNewRoundHandler = () => {
    // console.log('✅', filteredArray(learn.list));
    dispatch(currentList(filteredArray(learn.list)));
    // console.log('✅', dispatch(currentList(filteredArray(learn.list))));
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
              length: current.list?.length,
              index: current?.index,
            }}
            total={{
              cards: learn.learn.list?.length,
              rounds: learn?.stats.totalRounds,
              archived: learn?.stats.archived.length,
            }}
          ></CurrentStats>
          <QuestionBox
            onClickHandler={onButtonBoxHandler}
            text1={question.text[0]}
            text2={question.answer}
            hideXBtn={question.button}
            hideQuest={!question.button}
            hideCheck={question.button}
          ></QuestionBox>
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
