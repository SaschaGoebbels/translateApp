import React, { useState } from 'react';
import classes from './learn.module.css';

//redux
import { useSelector, useDispatch } from 'react-redux';

//components
import QuestionBox from './questionBox';
import CurrentStats from './currentStats';
import RenderObjectList from '../ui/renderObjectList';

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
    console.log('✅', el.target.id);
  };

  const filteredArray = array => {
    return array.filter(el => el.count >= el.interval);
  };
  const onClickHandler = id => {
    // console.log('✅', id);
  };
  const onTrashHandler = () => {
    console.log('❌');
  };
  //==================================================================
  return (
    <div className={classes.lernBox}>
      <CurrentStats onClickHandler={onClickNewRound}></CurrentStats>
      <QuestionBox onClickHandler={onClickHandler}></QuestionBox>
      <RenderObjectList
        icon={'faHistory'}
        name={'All Translations'}
        array={learn.list}
        mainLanguage={'de'}
        onFavHandler={''}
        onTrashHandler={onTrashHandler}
        borderColor={'--clr_accent_blue'}
      ></RenderObjectList>
    </div>
  );
};

export default Learn;
