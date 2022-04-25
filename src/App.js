import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">


    <form className='form'>
      <h1 style={{margin: "1rem 0"}}>React Checkpoint</h1>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default App;
