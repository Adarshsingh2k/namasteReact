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

### Way 2

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

#### Inline styles
- give style as js object

```
const styleC={
    color: black;
}
<h1 style={styleC}>Check Me</h1>
<h1 style={{color: black;}}>Check Me</h1>

```
- both above ways are correct but not preferd to write inline css

## working with Props 🐱‍🚀
- Passing prop  to a component is same as passing args to Function
- So props is used to pass data across component

`Syntax`
```
{resObj.map(data => (
 <RestaurantCard key={data.info.id} resInfo={data.info} />
))}

```
- in this code resInfo is a prop


```
`consuming Prop`

const RestaurantCard=(props)=>{
   const {resInfo}=props

   // destructuring data from props
   const {avgRating,  
          areaName,
          cloudinaryImageId,
          costForTwo,
          cuisines,
          isOpen,
          name

         }=resInfo

  return(  
            <div className="res-card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
               <div className="res-card-header">
                    <h3>{name}</h3>  
                    <h5>{avgRating}⭐</h5>

               </div>
                <h4>{costForTwo}</h4>
                <h5>{cuisines.join(", ")}</h5>
        
            </div>
    )
}

```

> [!IMPORTANT]
>  It is important to pass key when we rendera component in a loop  because if won't react will rerender the component

## Day 4
>  **React Hooks** 🚀

1. **useState**
    - useState hook is a utility function which help us to keep our Data Layer and UI Layer Synchronized

    `in simple JS`
    ```
    let ResList=[]; // we Declare or intialise like this

    // to update it we do
    ResList=['abc'] or ResList.push(abc) 
        
    ```
    - this above way will update data but our ui wont get updated

    `in React `
    ```
    const [resList, setResList]= useState(resObj); // => use usestate to declare array and setReslist to update it whenever needed

    const Body=()=>{

        const [resList, setResList]= useState(resObj);

        // const filterRes=()=>{
        //    return setResList( resObj.filter((data)=>{
        //       if(data.info.avgRating>4){
        //         return <RestaurantCard key={data.info.id} resInfo={data.info} ></RestaurantCard>
        //       }
        //     }))
        // }  ==> This also works correctly

        const filterRes = () => {
            const topRated = resObj.filter(data => data.info.avgRating > 4);
            setResList(topRated); // Update state with filtered restaurants
        }
        return(
            <div className="body">
                <div className="search">Search</div>
                <button onClick={()=>{filterRes()}} className="filter-btn">Top 🌟 Restaurants</button>
                <div className="res-container">
                    
                {resList.map(data => (
                        <RestaurantCard key={data.info.id} resInfo={data.info} />
                    ))}
                
                </div>
            </div>
        )
    }

    ```
    >[!Algorithm_Behind_this]

        React's reconciliation is the process by which React updates the DOM. It's a key part of how React efficiently handles changes to the application's state and props and then renders the UI.

        Here's a high-level overview:

        1. **Virtual DOM**: React maintains a virtual representation of the DOM called the Virtual DOM. When a change occurs in a component's state or props, React creates a new Virtual DOM tree.

        2. **Diffing**: React then compares this new Virtual DOM tree with the previous one. This process is called "diffing". By doing this, React identifies what has changed between the two trees.

        3. **Minimal Updates**: After the diffing process, React has a list of changes. Instead of re-rendering the entire application, React will only update the parts of the real DOM that have changed. This selective update mechanism makes React efficient.

        4. **Component Lifecycle**: As part of the reconciliation, React adheres to the component lifecycle. Methods like `shouldComponentUpdate` can be used to optimize and skip parts of the reconciliation process if we know a component hasn't changed.

        5. **Keys**: When rendering a list of elements derived from an array, React uses the `key` prop to identify each element uniquely. This helps React maintain and reuse DOM nodes correctly during the reconciliation process. It's why you often see warnings if you don't provide a `key` prop when mapping over an array to produce JSX.

        6. **Algorithm**: The reconciliation algorithm is `O(n)` where `n` is the number of elements in the tree. This is a simplified model, but in practice, it allows React to be incredibly fast and efficient.

        The whole idea behind reconciliation is to ensure that only the minimal necessary updates are made to the real DOM. Updating the real DOM is often the slowest part of the process, so by minimizing these updates, React ensures that applications remain responsive and fluid.

        It's worth noting that reconciliation is different from rendering. Rendering is the process by which React constructs the new Virtual DOM tree. Reconciliation, on the other hand, is the process of comparing this new tree with the old one and making the necessary DOM updates.