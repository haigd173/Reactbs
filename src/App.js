import logo from './logo.svg';
import './App.scss';
// import MyComponent from './views/Example/MyComponent';
import AlltodoApp from './todoApp/AlltodoApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xin chào  
        </p>
        
        <AlltodoApp></AlltodoApp>
      </header>
    </div>
  );
}

export default App;
