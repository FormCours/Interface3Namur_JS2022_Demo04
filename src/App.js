import logo from './logo.svg';
import './App.css';
import ExpoNumber from './components/expo-number/expo-number';

function App() {
  return (
    <div className="App">
      <ExpoNumber exp={3} />
    </div>
  );
}

export default App;
