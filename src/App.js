import './App.css';
import Form from './Form.js';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = {
      user: e.target.username.value,
      repo: e.target.repo.value
    }
    if (e.target.type.value === 'open-requests-commits') {
      const response = await axios.get('http://localhost:2550/pr/commits', {params: query});
      setData(response.data);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>GitHub Searcher</div>
      </header>

      <Form handleSearch={handleSearch.bind(this)} /><br/>

      {!data ? <div>loading...</div> : data.map(pr =>
      <div key={pr.value.pull_number}>
        {console.log(pr)}
      <div> Title: {pr.value.pull_title} </div>
      <div> Number of Commits: {pr.value.number_of_commits} </div>
      </div>

      )}

    </div>
  );
}

export default App;
