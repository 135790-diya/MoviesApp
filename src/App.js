import logo from './logo.svg';
import './App.css';
import AddDetails from './components/AddDetails';
import SearchMovie from './components/SearchMovie';
import ViewMovies from './components/ViewMovies';
import MovieHeader from './components/MovieHeader';

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
