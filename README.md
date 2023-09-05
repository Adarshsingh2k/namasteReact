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
## Day 3

- Learned How to write functional Components and how using JSX we can excute Js inside functional component

`Different ways of writting Functional Components`
### Way 1
```
 const Comp=()=>{
        return <h1> Pass this arrow Func</h1>
    }
```

### Way 3

```
const Title=()=>(
    <h1 className="heading">
        We Are up using JSX 
    </h1>
);
```

- Learned component Composition and how to render react component
```
const HeadingComponent= ()=>(
    <div id="container">
        {/* {console.log(5+'5')} -> this is correct we cna writ js using {} */}
        {heading}
    <Title/>

        <h1 className="heading">Functional Component 🚀</h1>

    </div>
)
```

`Rendering React Component`
```
// root.render(heading) --> we render React element  Like this
root.render(<HeadingComponent/>) // We render React component like this
```
