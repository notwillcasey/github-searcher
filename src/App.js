import './App.css';
import Form from './Form.js';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = {
      user: e.target.username.value,
      repo: e.target.repo.value
    }
    if (e.target.type.value === 'open-requests-commits') {
      setLoading(true);
      const response = await axios.get('http://localhost:2550/pr/commits', {params: query});
      setLoading(false);
      const sortedData = response.data.sort((a, b) => b.value.number_of_commits - a.value.number_of_commits);
      setData(sortedData);
    }
  }

  return (
    <div className="App">

      <Form handleSearch={handleSearch.bind(this)} /><br/>

      <div className="responses">
        { loading && <div> Loading... </div> }

        { !data && <div> </div> }

        { (data && !loading) && data.map(pr =>
          <div className="responseData" key={pr.value.pull_number}>
          <div><b> Title: </b> {pr.value.pull_title} </div>
          <div><b> Number of Commits: </b>{pr.value.number_of_commits}</div><br/>
          </div>
        ) }
      </div>


    </div>
  );
}

export default App;
