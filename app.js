import React from "react"
import  ReactDOM  from "react-dom/client"

// JSX is TRanspilled to JS Using-> PARCEL  which uses-> Babel

// BABEL transpiles to React.createElement => ReactElement - which is a JS Object =>Rendered as HTML Element

// THis Is React Element
const heading=(
    <h1 className="heading">
        We Are up using JSX 
    </h1>
);


// React Functional Component

/*
    can be also written as simple arrow function
    const Comp=()=>{
        return <h1> Pass this arrow Func</h1>
    }
*/

const Title=()=>(
    <h1 className="heading">
        We Are up using JSX 
    </h1>
);

// the below syntax is called component composition
const HeadingComponent= ()=>(
    <div id="container">
        {/* {console.log(5+'5')} -> this is correct we cna writ js using {} */}
        {heading}
    <Title/>

        <h1 className="heading">Functional Component 🚀</h1>

    </div>
)

const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading) --> we render React element  Like this
root.render(<HeadingComponent/>) // We render React component like this