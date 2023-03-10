import './App.css';
import UseContextHook from './components/UseContextHook';
import UseEffectHook from './components/UseEffectHook';
import UseLayoutEffectHook from './components/UseLayoutEffecHook';
import UseMemoHook from './components/UseMemoHook';
import UseReducerHook from './components/UseReducerHook';
import UseRefHook from './components/UseRefHook';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseContextHook /> */}
      <UseMemoHook />

    </div>
  );
}

export default App;
