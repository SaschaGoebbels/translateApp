import React, { useState, useEffect } from 'react';
import classes from './learn.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { learnDelete } from '../../actions/actions';
import { currentList } from '../../actions/actions';

//components
import QuestionBox from './questionBox';
import CurrentStats from './currentStats';
import RenderObjectList from '../ui/renderObjectList';
import ButtonText from '../ui/buttonText';

// import { snapshot } from 'valtio';

const Learn = props => {
  const dispatch = useDispatch();
  const shortcuts = useSelector(state => state.appData.settings.shortcuts);
  const learn = useSelector(state => state.appData.learn);

  const [current, setCurrent] = useState({
    list: learn.current.list,
    index: learn.current.index,
  });

  const [object, setObject] = useState(current.list[current.index]);

  const handleIntervalTextOutput = obj => {
    const oddOrEven = obj.interval % 2 == 0 ? 'even' : 'odd';
    if (oddOrEven === 'even') {
      console.log('✅ even');
      return [obj.text1, obj.text2];
    } else {
      console.log('✅ odd');
      return [obj.text2, obj.text1];
    }
  };

  const [question, setQuestion] = useState({
    text: handleIntervalTextOutput(object) || ['...', '...'],
    answer: '',
    button: true,
  });

  const onButtonBoxHandler = id => {
    console.log('✅', id);
    if (id === 'quest') {
      handleIntervalTextOutput(object);
      // setQuestion({
      //   text: ['...', '...'],
      //   button: false,
      // });
    }
    if (id === 'check') {
      setQuestion({
        text: ['...', '...'],
        object: current.list[current.index],
        button: true,
      });
    }
    if (id === 'x') {
      setQuestion({
        text: ['...', '...'],
        object: current.list[current.index],
        button: true,
      });
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
    console.log('✅', filteredArray(learn.list));
    dispatch(currentList(filteredArray(learn.list)));
    console.log('✅', dispatch(currentList(filteredArray(learn.list))));
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
              cards: learn?.list.length,
              rounds: learn?.stats.totalRounds,
              archived: learn?.stats.archived.length,
            }}
          ></CurrentStats>
          <QuestionBox
            onClickHandler={onButtonBoxHandler}
            text1={question.text[0]}
            text2={question.text[1]}
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
