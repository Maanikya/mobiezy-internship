import './App.css';

function App() {
  return (
    <div className="App">
      <div >
        <img className='header-img1' src="../Figma_images/d1.png" />
        <img className='mobicable-logo' src='../Figma_images/MobiCable.png' />
      </div>

      <div className='authForm'>
        <form className='login'>
          <div class="username-group">
            <input required="true" type="text" autocomplete="off" className='username' />
            <label class="user-label">User Name</label>
          </div>

          <div class="passwd-group">
            <input required="true" type="password" autocomplete="off" className='passwd' />
            <label class="passwd-label">Password</label>
          </div>

          <label class="rememberme">
            <input className='rmcb' type="checkbox" />
            Remeber me
          </label>
  
          
          <button className='loginBtn'>
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Login</span>
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;
