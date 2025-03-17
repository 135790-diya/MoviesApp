import logo from './logo.svg';
import './App.css';
import AddDetails from './components/AddDetails';
import SearchMovie from './components/SearchMovie';
import ViewMovies from './components/ViewMovies';

function App() {
  return (
    <div>
      <AddDetails />

      <SearchMovie />

      <ViewMovies />
    </div>
  );
}

export default App;
