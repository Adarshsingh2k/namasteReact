import React from "react"
import  ReactDOM  from "react-dom/client"


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0xWvvlyF3nR_xwbwb0eNN7jI31D4W95bdA&usqp=CAU"/>

            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>

            </div>

        </div>
    )
}

const RestaurantCard=()=>(
    <div className="res-card">
        <h3>Meghana Foods</h3>
        
    </div>
)


const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout=()=>(
    <div className="app">
        <Header/>
        <Body/>

    </div>
)


const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading) --> we render React element  Like this
root.render(<AppLayout/>) // We render React component like this