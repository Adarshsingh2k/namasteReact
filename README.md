# namasteReact

## Day - 1

- Learned how to add react directly to html
- Learned on how to use `React.CreateElement` in 2 different ways consisting of childrens and sibling elements

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

- Transitive dependencies-> `Dependencies of package on package`
- added parcel

## Day - 2

- Run App using Parcel- npx parcel index.html
- Added BrowserList
- React.createElement => ReactElement - which is a JS Object =>Rendered as HTML Element
- JSX is TRanspilled to JS Using-> PARCEL which uses-> Babel
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

- Passing prop to a component is same as passing args to Function
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
> It is important to pass key when we rendera component in a loop because if won't react will rerender the component

## Day 4

> **React Hooks** 🚀

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

   > [!IMPORTANT]
   > React's Reconciliation Process

   React's reconciliation is the process by which React updates the DOM. This is crucial for React to efficiently handle changes in the application's state and props and update the UI accordingly.

   ### 1. Virtual DOM

   React maintains a virtual representation of the DOM, known as the **Virtual DOM**. When a change occurs in a component's state or props, React creates a new Virtual DOM tree.

   ### 2. Diffing

   React then compares this new Virtual DOM tree with the previous one in a process called **diffing**. Through this comparison, React determines what has changed between the two trees.

   ### 3. Minimal Updates

   After the diffing process, React identifies the changes and instead of re-rendering the entire application, it **updates only the segments** of the real DOM that have changed. This ensures React's efficiency.

   ### 4. Component Lifecycle

   During reconciliation, React adheres to the **component lifecycle**. Methods like `shouldComponentUpdate` can be used to optimize and possibly skip parts of the reconciliation process if we determine a component hasn't changed.

   ### 5. Keys

   When rendering a list of elements from an array, React uses the `key` prop to uniquely identify each element. This helps React in preserving and reusing DOM nodes correctly during the reconciliation process. It's essential to provide a `key` prop when mapping over an array to generate JSX.

   ### 6. Algorithm

   The reconciliation algorithm is efficient, standing at `O(n)`, where `n` is the number of elements in the tree. This allows React to be incredibly fast and efficient.

   > **Note:** It's essential to differentiate between reconciliation and rendering. Rendering is the process by which React creates the new Virtual DOM tree. Reconciliation, on the other hand, involves comparing this new tree with the previous one and making the necessary DOM updates.

2. **useEffect 🚀**

   - useEffect is used to render a API cal when our Bsic UI is rendered
   - useEffect() hook accepts 2 arguments:

     `useEffect(callback[, dependencies]);`

     - callback is a function that contains the side-effect logic. callback is executed right after the DOM update.
     - dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
     - Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().

- implemented filter and search functionality using useState

```
  const searchFilter = () => {
    const srchedRes = resList.filter((data) => {
      return data.info.name.toLowerCase().includes(srchText.toLowerCase());
    });
    console.log("Filtered Results:", srchedRes);

    srchedRes.length > 0
      ? setFltrdList(srchedRes)
      : alert("no Restaurant found");
  };

```

## Day 5

1.  **useEffect** (continued..):
    - if no dependancy array is present => useEffect is called on every render
    - if dependency array is empty [] => useEffect is called on intial render (just once)
    - if dependency array has any dependency=> it will only be called evertime deppendency component is updated
      ```
      useEffect(() => {
      fetchData();
      }, [btnComponent]);

      ```
    ```

    ```

## Server-side vs Client-side Routing

| Feature/Aspect    | Server-side Routing                                                               | Client-side Routing                                                                                          |
| ----------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **How it works**  | Every request goes to the server for a full page refresh.                         | After initial load, page transitions are handled by JavaScript without full page reloads.                    |
| **Advantages**    | - Better for SEO<br>- Initial page loads can be faster for first-time visitors.   | - Faster subsequent page transitions after initial load<br>- Enhanced user experiences like animations.      |
| **Disadvantages** | - Slower subsequent page transitions<br>- More server resources for each request. | - Slower initial page load due to larger bundle size<br>- Potential SEO challenges if not handled correctly. |
| **Examples**      | PHP, ASP.NET, Ruby on Rails, Django                                               | React (with React Router), Angular, Vue.js                                                                   |
