import './App.css';
import Textbox from './Components/Textbox'
import btnhandler from './Components/addbtn'
function App() {
  return (
    <div>
      <div className='bgcolor2'>      
        {/* <form onSubmit= {btnhandler}> */}
          <button onClick={btnhandler}>Add</button>
        {/* </form> */}
      </div>
      <div id='yeet' className="bgcolor">

        <Textbox />
      </div>
    </div>
  );
}

export default App;
