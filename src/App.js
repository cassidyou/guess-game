import { animals } from './components/animals';
import AnimalCard from './components/AnimalCard';
import './index.css'
import ChefClaude from './app/ChefClaude';
import Page from './components/UseStateWithArrays';
import UseStatewithObjects from './components/UseStatewithObjects';
import FormBasics from './components/chef-claude/FormBasics';
import FakeJokes from './components/chef-claude/FakeJokes';
import PadsMain from './components/sound-pad/Main';
import MemeGenerator from './app/MemeGenerator';
import TenzyGame from './app/TenzyGame';
import HangmanGame from './app/HangmanGame';
import GuessGame from './components/guessgame/GuessGame'


function App() {

  const animalList = animals.map((animal) => {
    return (
        <AnimalCard key={animal.id} {...animal} />
    )
  })

  return (
    <>
      {/* <MemeGenerator /> */}
      {/* <TenzyGame /> */}
      {/* <HangmanGame /> */}

      <GuessGame />
    </>
  );
}

export default App;
