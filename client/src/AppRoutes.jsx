import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import RegisterPage from "./components/RegisterPage.jsx";
import VerifiedUserSettings from "./components/VerifiedUserSettings.jsx";
import Login from "./components-sub/Login.jsx";
import ProfilePage from "./components/ProfilePage.jsx";



const AppRoutes = ()=>{
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/RegisterPage' element={<RegisterPage/>}/>
            <Route path='/VerifiedUserSettings' element={<VerifiedUserSettings/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/user/:URLName' element={<ProfilePage/>} />
        </Routes>
    );
}
export default AppRoutes