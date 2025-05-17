import logo from './logo.svg';
import './App.css';
import {Person} from './Person';



function App() {
  return (
    <div>
     <Person
        name="Richard"
        age={50}
        hobbies={['reading', 'building', 'praying']}
        message="The medium is the message. And the tweet is the medium."
      />
       <Person
        name="Lewis"
        age={30}
        hobbies={['coding', 'writing', 'ai']}
        message="Keep going."
      />
       <Person
        name="Dumbledore"
        age={17}
        hobbies={['running', 'dancing', 'singing']}
        message="I'm going to school."
      />
    </div>
  );
}

export default App;