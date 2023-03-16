// For Firebase JS SDK V7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAXyZl-MyTxRzlGjrVYOQCVsst5PbfF_bw",
  authDomain: "rdpd-dbaa4.firebaseapp.com",
  projectId: "rdpd-dbaa4",
  storageBucket: "rdpd-dbaa4.appspot.com",
  messagingSenderId: "300679241652",
  appId: "1:300679241652:web:0f1e8bca99955c4b401ce1"
};


function Spa() {
    return (
      <HashRouter>
        <div>
          <NavBar/>        
          <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/balance/" component={Balance} />
              <Route path="/alldata/" component={AllData} />
            </div>
          </UserContext.Provider>
        </div>
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
  