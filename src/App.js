import logo from './logo.svg';
import './App.css';

function App() {

  // Use this api to get data for the table
  const API_URL="https://jsonplaceholder.typicode.com/todos"

  return (
    <div className="App">
      <header>
        To-Do List React Paging Challenge
      </header>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {/* Populate the rows of data here */}

          </tbody>
        </table>
        <section className="pagination">
          <button className="first-page-btn">first</button>
          <button className="previous-page-btn">previous</button>
          <button className="next-page-button">next</button>
          <button className="last-oage-btn">last</button>
        </section>
      </div>
    </div>
  );
}

export default App;
