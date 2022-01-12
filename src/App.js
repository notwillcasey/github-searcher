import './App.css';
import Form from './Form.js';
import axios from 'axios';

function App() {

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = {
      username: e.target.username.value,
      repo: e.target.repo.value
    }
    console.log('hereherheheherherh', e.target.type.value)

    if (e.target.type.value === 'open-requests-commits') {

      const response = await axios.get('http://localhost:2550/pr/commits?user=colinhacks&repo=zod');

      console.log(response);

    }
    console.log(query);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>GitHub Searcher</div>
      </header>

      <Form handleSearch={handleSearch.bind(this)} />

    </div>
  );
}

export default App;
