import classes from './App.module.css';
import './variables.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
//components
import Header from './components/header';
import TranslateBar from './components/translateBar';
import RenderObjectList from './components/renderObjectList';
//redux
import { useSelector, useDispatch } from 'react-redux';
import loginReducer from './reducers/loginReducer';
import { login, logout } from './actions/actions';

const googleTranslate = async e => {
  //==================================================================
  let sourceText = '';
  if (e.parameter.q) {
    sourceText = e.parameter.q;
  }

  let sourceLang = 'auto';
  if (e.parameter.source) {
    sourceLang = e.parameter.source;
  }

  let targetLang = 'de';
  if (e.parameter.target) {
    targetLang = e.parameter.target;
  }
  // let resUrl;
  let url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
    sourceLang +
    '&tl=' +
    targetLang +
    '&dt=t&q=' +
    encodeURI(sourceText);

  console.log('✅', url);
  const response = await fetch(url);
  const body = await response.json();

  console.log('✅ Body:', body);
  console.log('💥 Translation:', body[0][0][0]);
  console.log('👍 source language:', body[2]);

  //==================================================================
};
const languageArray = [
  { name: 'Spanish', lang: 'sp' },
  { name: 'English', lang: 'en' },
  { name: 'German', lang: 'de' },
];

function App() {
  const state = useSelector(state => state);
  const processList = useSelector(state => state.processReducer);
  const dispatch = useDispatch();
  console.log('✅', processList);
  const onSubmitSearch = (searchTxt, setState, lang) => {
    console.log('❌ txt', searchTxt, lang);
    console.log('❌ state', setState);
    setState('');
    // googleTranslate({ parameter: { q: searchTxt } });
    // googleTranslate(searchWord, "DEU");
  };

  return (
    <div className={classes.App}>
      <header className={classes.header_menu}>
        <Header></Header>
        <button className={classes.menuButton} onClick={''}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={classes.menuButtonIcon}
          />
        </button>
      </header>
      <TranslateBar
        mainLanguage={'German'}
        secondaryLanguage={'English'}
        defaultLanguage={['German', 'English']}
        languageArray={languageArray}
        onSubmitSearch={onSubmitSearch}
      ></TranslateBar>
      {/* <RenderObjectList
        icon={'faLightbulb'}
        name={'result'}
        list={[]}
        wordClick={wordClick}
      ></RenderObjectList> */}
      <RenderObjectList
        icon={'faHistory'}
        name={'history'}
        list={[]}
        mainLanguage={'de'}
        // wordClick={wordClick}
      ></RenderObjectList>
      {/* <input contentEditable spellCheck="true" id="input"></input>
      <textarea id="textarea" spellCheck="true"></textarea>
      <button onClick={onsubmit}>Submit</button>
      <button onClick={() => dispatch(login())}>Login</button> */}
    </div>
  );
}

export default App;
