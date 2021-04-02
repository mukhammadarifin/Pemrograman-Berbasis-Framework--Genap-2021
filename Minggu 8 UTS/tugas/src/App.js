import logo from './logo.svg';
import './bootstrap.min.css';
import BlogPost from "./container/BlogPost/BlogPost";
import BlogPost1 from "./container1/BlogPost/BlogPost";
import './style.css';
import Biodata from "./Biodata"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";



function App() {
  
  return (
    <div>
      <All />
    </div>
  );
}

function All() {
  const script = document.createElement("script");
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js";
  script.src = "https://github.com/twbs/bootstrap/blob/main/dist/js/bootstrap.min.js.map";
  script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">

          <a class="navbar-brand" href="index.html">
            <img src="https://img.icons8.com/bubbles/2x/react.png" alt="Avatar" className="photo"/>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/">Home</Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/topics">List Produk</Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/keranjang">List Keranjang</Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/about">About</Link></a>
                  </li>
              </ul>
          </div>
      </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <ProtectedPage />
          </Route>
          <Route path="/keranjang">
            <Topics1 />
          </Route>
          <Route path="/about">
            <Biodata/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  return(
    <Router>
    <div>
      <Switch>
        <BlogPost/>
      </Switch>
    </div>
    </Router>
  );
}

function Topics1() {
  return(
    <Router>
    <div>
      <Switch>
        <BlogPost1/>
      </Switch>
    </div>
    </Router>
  );
}

const View1 = () => {
  return(
    <div>
      <hr/>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://rog.asus.com/media/1464624756388.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Asus ROG</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://s3.ap-southeast-1.amazonaws.com/magazine.job-like.com/magazine/wp-content/uploads/2018/08/21134246/Acer-Ferarri-1100-696x392.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Acer Ferrari 1100</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
};

const View2 = () => {
  return(
    <div>
      <hr/>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/cKUHdJtQqc.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Razer - Lancehead Wireless Laser Gaming Mouse - Black</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/q05Sp5UNSI.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Logitech - G903 Wireless Gaming Mouse - Black</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

const View3 = () => {
  return(
    <div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://i2.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-2-1024x576.jpg?resize=618%2C348" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Mionix Zibal 60</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://i0.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-7.jpg?resize=540%2C298" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Optimus Maximus</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


function Home() {
  const script = document.createElement("script");
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js";
  script.src = "https://github.com/twbs/bootstrap/blob/main/dist/js/bootstrap.min.js.map";
  script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  return (
    
    <div>
      <div class="jumbotron text-center">
      <h1>Selamat Datang di React Shop</h1>
    <p>Menyediakan kebutuhan Menanak nasi anda agar lebih bermanfaat</p>
      </div>
      <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://th.bing.com/th/id/R33c023d93bcb445b51c1f570d251f905?rik=LZlgz%2feVc9hHhg&pid=ImgRaw" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Philips Digital Rice Cooker 1.8L - Fuzzy Logic Bakuhanseki HD4515/33</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://img20.jd.id/Indonesia/s400x400_/amZzL3Q1NS8yNzgvMjM2ODQyNDExNy82MTkxMS85YWUwNzAzMi81ZmFmODljZU40ZjRmNGUxYQ.jpg" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Philips Rice Cooker 2L - Premium Blue HD3131/31</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/7/17/147170/147170_37e3f765-290e-456f-9fd8-be727fc21728.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Rice Cooker / Magic Com Cosmos CRJ-520 1.8L</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}>
          Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{
            pathname: "/login",
            state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function ProtectedPage() {
  return <Topics/>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: {pathname: "/"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
