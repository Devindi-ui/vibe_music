import { useEffect, useState } from 'react'
import Header from './components/common/Header'
import LoadingSpinner from './components/common/LoadingSpinner'
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/components.css";
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Router, Routes, BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './config/firebase';
import Home from './components/common/Home';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  },[]);

  if(loading){
    return (
      <LoadingSpinner/>
    )
  }

  return(
    // <ThemeProvider>
    //   <AuthProvider>
    //     <BrowserRouter>
    //       <div className="app">
    //         <Header/>
    //         <main className='main-content'>
    //           <Routes>

    //           </Routes>
    //         </main>
    //       </div>
    //     </BrowserRouter>
    //   </AuthProvider>
    // </ThemeProvider>

    <Home/>
  )
}

export default App
