import classes from './App.module.css';
import './variables.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
//components
import Header from './components/ui/header';
import TranslateBar from './components/translate/translateBar';
import RenderObjectList from './components/translate/renderObjectList';

import { FetchToGoogle } from './components/logic/fetch';
//valtio
import { useSnapshot } from 'valtio';
import { state } from './store/state';
//redux
import { useSelector, useDispatch } from 'react-redux';
// import loginReducer from './reducers/loginReducer';
// import { login, logout } from './actions/actions';
import { historyListAdd } from './actions/actions';

function App() {
  const dispatch = useDispatch();
  const shortcuts = useSelector(state => state.settings.shortcuts);

  const languageArray = useSelector(state => state.settings.languageArray);
  const [lang1, lang2] = useSelector(state => state.settings.defaultLanguage);

  //valtio app state
  const snap = useSnapshot(state);

  const defaultLanguageObjects = (array, lang) => {
    return array.filter(el => el.name === lang);
  };

  const onSubmitSearch = async searchObj => {
    const res = await FetchToGoogle(searchObj);
    if (res) {
      const text = (res, searchObj) => {
        if (res.language1 === searchObj.search.targetLang) {
          return res.text2;
        } else return res.text1;
      };
      // // ///////////////// BOOKMARK ///////////////// B
      // // // res 1 & res 2 combine together and sort also update result in textarea
      // const secondSearch = {
      //   search: {
      //     sourceText: text(res, searchObj),
      //     sourceLang: searchObj.search.targetLang,
      //     targetLang: searchObj.search.sourceLang,
      //   },
      //   setTarget: searchObj.setTarget,
      // };
      // const res2 = await FetchToGoogle(secondSearch);
      // if (res2) dispatch(historyListAdd({ type: 'ADD', payload: res2 }));
      // return;
    }
    if (res) dispatch(historyListAdd({ type: 'ADD', payload: res }));
    return;
  };

  const onMenuButtonHandler = () => {
    console.log('❌ Menu Button');
  };

  return (
    <div className={classes.App}>
      <header className={classes.header_menu}>
        <Header></Header>
        <button className={classes.menuButton} onClick={onMenuButtonHandler}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={classes.menuButtonIcon}
          />
        </button>
      </header>
      <TranslateBar
        loading={snap.loading}
        settings={shortcuts}
        defaultLanguage={[
          ...defaultLanguageObjects(languageArray, lang1),
          ...defaultLanguageObjects(languageArray, lang2),
        ]}
        languageArray={languageArray}
        onSubmitSearch={onSubmitSearch}
      ></TranslateBar>
      <RenderObjectList
        icon={'faHistory'}
        name={'history'}
        list={[]}
        mainLanguage={'de'}
      ></RenderObjectList>
    </div>
  );
}

export default App;
