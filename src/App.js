// styles
import './App.css';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// firebase
import { onAuthStateChanged } from 'firebase/auth';

//context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashbord from './pages/Dashbord/Dashbord';

//components
import NavbarComponent from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })

  },[auth])

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavbarComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? <Login/> : <Navigate to="/" />} 
              />
              <Route path="/register" element={!user ? <Register/> : <Navigate to="/" />} />
              <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to="/login" />} />
              <Route path="/dashbord" element={user ? <Dashbord/> : <Navigate to="/login" />} />  
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
