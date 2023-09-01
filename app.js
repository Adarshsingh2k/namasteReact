import React from "react"
import  ReactDOM  from "react-dom/client"

// JSX is TRanspilled to JS Using-> PARCEL  which uses-> Babel

// BABEL transpiles to React.createElement => ReactElement - which is a JS Object =>Rendered as HTML Element

const heading=(<h1 className="heading">We Are up using JSX </h1>);

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)