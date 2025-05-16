import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './FirstComponent';
import {NamedComponent} from './NamedComponent';

function App() {
  return (
      <div>
          <FirstComponent />
          <NamedComponent name="Lewis" />
      </div>
  );
}

export default App;
