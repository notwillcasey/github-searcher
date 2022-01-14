import './App.css';

  function Form(props) {

    return (
      <div className="form">

        <form className="search-form" onSubmit={props.handleSearch}>

          <div className="input-group-select">
            <div className="label-select">Search:</div>
            <select name="type">
              <option value="repos">Repositories</option>
              <option value="open-requests">Open Pull Requests</option>
              <option value="open-requests-commits">Open Pull Requests + Commits</option>
            </select>
          </div>

          <div className="input-group">
            <div className="label">Username:</div>
            <input type='text' name="username"></input>
          </div>

          <div className="input-group">
            <div className="label">Repository:</div>
            <input type='text' name="repo"></input>
          </div>

          <button type="submit">search</button>
        </form>

      </div>
    )
  }

  export default Form;