import './App.css';

  function Form(props) {

    return (
      <div className="App-body">

        <form className="search-form" onSubmit={props.handleSearch}>

          <label htmlFor="type">Select Search Type:</label>
          <select name="type">
            <option value="repos">Repositories</option>
            <option value="open-requests">Open Pull Requests</option>
            <option value="open-requests-commits">Open Pull Requests + Number of Commits</option>
          </select><br/>

          <label htmlFor="username">Username:</label>
          <input type='text' name="username"></input><br/>

          <label htmlFor="repo">Repository:</label>
          <input type='text' name="repo"></input><br/>

          <button type="submit">search</button>
        </form>

      </div>
    )

  }

  export default Form;