import './App.css';
import BR2JSX from './br2jsx/br2jsx';

function App() {
  let text="первый<br>второй<br/>третий<br />последний";
  return <BR2JSX text={text}/>;


}

export default App;
