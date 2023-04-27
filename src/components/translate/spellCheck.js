import * as ReactDOM from "react-dom";
import * as React from "react";
import {
  DocumentEditorComponent,
  DocumentEditor,
  SpellChecker,
} from "@syncfusion/ej2-react-documenteditor";
DocumentEditorComponent.Inject(SpellChecker);
function App() {
  let documentEditor: DocumentEditorComponent;
  React.useEffect(() => {
    componentDidMount();
  }, []);
  function componentDidMount(): void {
    documentEditor.spellChecker.languageID = 1033; //LCID of "en-us";
    documentEditor.spellChecker.removeUnderline = false;
    documentEditor.spellChecker.allowSpellCheckAndSuggestion = true;
  }

  return (
    <DocumentEditorComponent
      id="container"
      ref={(scope) => {
        documentEditor = scope;
      }}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("sample"));
