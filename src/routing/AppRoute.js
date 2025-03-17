import React from "react";
import { Routes , Route } from "react-router-dom";
import Home from "../commponents/Home";
const AppRoute =()=>{

    return(<>
     <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="*" element={{hllo}}/> */}
    </Routes>
    </>);
   

}

export default AppRoute;