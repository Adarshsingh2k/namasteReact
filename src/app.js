import React from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"






const AppLayout=()=>(
    <div className="app">
        <Header/>
        <Body/>

    </div>
)


const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading) --> we render React element  Like this
root.render(<AppLayout/>) // We render React component like this