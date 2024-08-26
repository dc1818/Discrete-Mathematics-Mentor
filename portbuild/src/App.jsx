
import './App.css'
import PrimarySearchAppBar from "./components/PrimarySearchAppBar.jsx";
import PrimaryNavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import PositionedSnackbar from "./components/Toast.jsx";




function App() {


  return (
   <>
        <div style={{flex: '1', justifyContent: 'center', alignItems: 'center', marginLeft: '30%', marginTop: '0'}}>
            <paper elevation={12}>
                <PrimarySearchAppBar/>

            </paper>
        </div>

        <PrimaryNavBar/>
       <Footer/>

   </>
  )
}

export default App
