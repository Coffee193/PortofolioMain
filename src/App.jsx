import './styles/main.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { NavBar } from './NavBar'
import { AllFeautures } from './AllWebsiteFeatures'
import { Contact } from './Contact'
import { EcommerceDocs } from './Ecommercedocs'
import { Oops } from './Oops'

export function App(){
    return(
        <Routes>
            <Route path="/" element={<><NavBar init='true'/><Home/></>}/>
            <Route path="/allfeautures" element={<><NavBar/><AllFeautures/></>}/>
            <Route path="/contact" element={<><NavBar/><Contact/></>}/>
            <Route path="/docs/ecommerce" element={<><NavBar init='false'/><EcommerceDocs/></>}/>
            <Route path="/docs/machine_learning" element={<><NavBar init='false'/><EcommerceDocs/></>}/>
            <Route path="/docs/ecommerce/*" element={<><NavBar init='true'/><Oops/></>}/>
            <Route path="/docs/machine_learning/*" element={<><NavBar init='true'/><Oops/></>}/>
        </Routes>
    )
}