import './App.css';

function App() {

  const handleSearch = (e) => {
    e.preventDefault();
    const query = {
      type: e.target.type.value,
      username: e.target.username.value,
      repo: e.target.repo.value
    }
    console.log(query);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>GitHub Searcher</div>
      </header>

      <div className="App-body">

        <form className="search-form" onSubmit={handleSearch}>

          <label for="type">Select Search Type:</label>
          <select name="type">
            <option value="repos">Repositories</option>
            <option value="open-requests">Open Pull Requests</option>
            <option value="open-requests-commits">Open Pull Requests + Number of Commits</option>
          </select><br/>

          <label for="username">username:</label>
          <input type='text' name="username"></input><br/>

          <label for="repo">repo:</label>
          <input type='text' name="repo"></input><br/>

          <button type="submit">search</button>
        </form>

      </div>
    </div>
  );
}

export default App;
