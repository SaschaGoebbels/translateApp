import classes from './App.module.css';
import { useEffect } from 'react';
import './variables.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
//components
import Header from './components/ui/Header';
import TranslateBar from './components/translate/TranslateBar';
import HistoryList from './components/translate/HistoryList';
import ModalBox from './components/ui/ModalBox';
import Menu from './components/ui/Menu';
// learn
import Learn from './components/learn/Learn';

//logic components
import { FetchToGoogle } from './components/logic/fetch';
import { sortArrayAlphabetically } from './components/logic/functions';
import {
  saveLocalStorageByKey,
  readLocalStorageByKey,
} from './store/localStorage';

//valtio
import { useSnapshot } from 'valtio';
import { state } from './store/state';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {
  historyListAdd,
  historyFavSwitch,
  translateStateLocalData,
} from './redux/translateSlice';
import { learnStateLocalData } from './redux/learnSlice';
import { settingsStateLocalData } from './redux/settingsSlice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const shortcuts = useSelector(state => state.settings.settings.shortcuts);

  // eslint-disable-next-line no-unused-vars
  const reduxState = useSelector(state => state); // do not remove !!! needed to update state

  const languageArray = useSelector(state => {
    return sortArrayAlphabetically([...state.settings.settings.languageArray]);
  });
  const [lang1, lang2] = useSelector(
    state => state.settings.settings.defaultLanguage
  );

  //valtio app state
  const snap = useSnapshot(state);
  //==================================================================
  // modalBox
  const modalInit = {
    message: 'Message',
    title: 'Title',
    dismiss: '',
    confirm: '',
    trash: '',
    hideModalBox: true,
    showBtnCheck: true,
    showBtnTrash: false,
    showBtnX: true,
    value: '',
  };
  const [modalState, setModalState] = useState(modalInit);
  // handle modal state change
  const setModalStateInsideComponent = state => {
    setModalState({ ...state });
  };
  const resetModalState = state => {
    setModalState({ ...state });
  };
  const clickModalBox = btnId => {
    if (btnId === 'x' && modalState.dismiss) {
      modalState.dismiss(modalState.value);
    }
    if (btnId === 'trash' && modalState.trash) {
      modalState.trash(modalState.value);
    }
    if (btnId === 'check' && modalState.confirm) {
      modalState.confirm(modalState.value);
    }
    resetModalState(modalInit);
  };
  //==================================================================
  const defaultLanguageObjects = (array, lang) => {
    return array.filter(el => el.name === lang);
  };

  const onSubmitSearch = async searchObj => {
    if (searchObj.search.sourceText === '') return;
    const res = await FetchToGoogle(searchObj);
    if (res) dispatch(historyListAdd({ ...res }));
    return;
  };

  const onMenuButtonHandler = () => {
    console.log('❌ Menu Button');
  };
  //==================================================================

  //==================================================================
  // get localData at startup
  useEffect(() => {
    const translateStateLocal = readLocalStorageByKey('translate');
    if (translateStateLocal !== null)
      dispatch(translateStateLocalData({ state: translateStateLocal }));
    const learnStateLocal = readLocalStorageByKey('learn');
    if (learnStateLocal !== null)
      dispatch(learnStateLocalData({ state: learnStateLocal }));
    const settingsStateLocal = readLocalStorageByKey('settings');
    if (settingsStateLocal !== null)
      dispatch(settingsStateLocalData({ state: settingsStateLocal }));
  }, []);

  //==================================================================
  return (
    <div className={classes.App}>
      <Menu
        menuState={{ hide: true }}
        userData={{ email: 'email', name: 'name' }}
      ></Menu>
      <ModalBox
        modalState={modalState}
        clickModalBox={clickModalBox}
      ></ModalBox>
      <header className={classes.header_menu}>
        <Header></Header>
        <button className={classes.menuButton} onClick={onMenuButtonHandler}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={classes.menuButtonIcon}
          />
        </button>
      </header>
      {snap.translate && (
        <div className={classes.divBox}>
          <TranslateBar
            loading={snap.loading}
            settings={shortcuts}
            defaultLanguage={[
              ...defaultLanguageObjects(languageArray, lang1),
              ...defaultLanguageObjects(languageArray, lang2),
            ]}
            languageArray={[...languageArray.reverse()]}
            onSubmitSearch={onSubmitSearch}
          ></TranslateBar>
          <HistoryList
            icon={'faHistory'}
            name={'history'}
            mainLanguage={'de'}
            setModalStateInsideComponent={setModalStateInsideComponent}
          ></HistoryList>
        </div>
      )}
      {!snap.translate && (
        <Learn
          setModalStateInsideComponent={setModalStateInsideComponent}
        ></Learn>
      )}
    </div>
  );
}

export default App;
