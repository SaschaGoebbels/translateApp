import classes from './App.module.css';
//components
import Header from './components/header';
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

function App() {
  const state = useSelector(state => state);
  const processList = useSelector(state => state.processReducer);
  const dispatch = useDispatch();
  console.log('✅', processList);
  onsubmit = () => {
    const searchWord = document.querySelector('#input').value;
    googleTranslate({ parameter: { q: searchWord } });
    // googleTranslate(searchWord, "DEU");
  };
  return (
    <div className={classes.app}>
      <Header></Header>
      <input contentEditable spellCheck="true" id="input"></input>
      <textarea id="textarea" spellCheck="true"></textarea>
      <button onClick={onsubmit}>Submit</button>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}

export default App;
