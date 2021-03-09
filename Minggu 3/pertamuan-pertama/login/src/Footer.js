import React from 'react';
import './style.css';
// Component menggunakan Function
function Footer() {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/react@16/umd/react.development.js";
  script.src = "https://unpkg.com/react-dom@16/umd/react-dom.development.js";
  script.src = "https://unpkg.com/babel-standalone@6.15.0/babel.min.js";
  return(
      <div class="login">
          <form >
            <div className="imgcontainer" class="a">
              <h3>Tugas Pertemuan Ketiga</h3>
              <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg" alt="Avatar" className="image"/>
            </div>

            <div className="container" class="a">
              <label><b>Username</b></label>
              <input type="text" placeholder="Masukkan Username" name="uname" required/>
              <label><b>Password</b></label>
              <input type="password" placeholder="Masukkan Password" name="psw" required/>
                  
              <button type="submit">LOGIN</button>
              <input type="checkbox"  name="vehicle1"/>
              <label><b>Remember me</b></label>
              <br/>
              <br/>
              <br/>
              <br/>
              <button class="button" type="submit">CANCEL</button>
            </div>
            <div class="a" className="container" style={{backgroundColor: '#f1f1f1'}}>
            </div>
          </form>
      </div>
  );
}

export default Footer;
