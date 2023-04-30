import React, { useState } from 'react';
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

const Learn = props => {
  //filter interval
  //show text ?
  //show answer
  //update object
  //update current progress

  const dispatch = useDispatch();
  const learn = useSelector(state => state.appData.learn);

  const [learnState, setLearnState] = useState(learn);
  const onClickNewRound = el => {
    console.log('✅', el);
  };

  const filteredArray = array => {
    return array.filter(el => el.count >= el.interval);
  };

  const onClickHandler = (buttonId, id) => {
    if (buttonId === 'pen') {
      console.log('✅ pen');
      return;
    }
    if (buttonId === 'trash') {
      console.log('✅ trash');
      return;
    }
  };
  const [editLearn, setEditLearn] = useState(false);
  const onEditLearnSwitch = () => {
    setEditLearn(prev => !prev);
  };
  //==================================================================
  return (
    <div className={classes.lernBox}>
      <div className={classes.editLearnSwitchBox}>
        <ButtonText
          name={'new round'}
          style={{ border: 'var(--clr_accent_blue) solid 2px' }}
          id={'newRound'}
          onClickHandler={props.onClickHandler}
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
          <CurrentStats onClickHandler={onClickNewRound}></CurrentStats>
          <QuestionBox onClickHandler={onClickHandler}></QuestionBox>
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
