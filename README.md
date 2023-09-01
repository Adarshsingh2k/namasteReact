# namasteReact

## Day - 1
- Learned how to add react directly to html
- Learned on how to use `React.CreateElement`  in 2 different ways consisting of childrens and sibling elements
``` 
const parent= React.createElement(
"div",
{id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
       [ React.createElement("h1",{},"Nested H1 Tag"),
       React.createElement("h4",{},"I am a H2 tag")
    ]

    )
)

const heading= React.createElement("h1",{id:"heading"},"Hello World");

```
- Transitive dependencies-> ` Dependencies of package on package `
- added parcel 

## Day - 2

- Run App using Parcel- npx parcel index.html
- Added BrowserList
- React.createElement => ReactElement - which is a JS Object =>Rendered as HTML Element
- JSX is TRanspilled to JS Using-> PARCEL  which uses-> Babel
- BABEL transpiles to React.createElement => ReactElement - which is a JS Object =>Rendered as HTML Element

`Usage of JSX`

```
    const heading=(<h1 className="heading">We Are up using JSX </h1>);

    //(closing brackets)=>required when we have to add multi line JSX

    const root= ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading)
```
