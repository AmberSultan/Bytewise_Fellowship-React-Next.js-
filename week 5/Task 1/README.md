# Bytewise_Fellowship (React & Next.js)
## Week 05 (08/07/24)

### Day 01
## Task 01 - Dynamic routing

### useParams 

- here we use params -> `useparams`
- e.g we want to show data of 100 users ...so instead of making 100 pages for each user ...what we do is we use the concept of params:

- in our App.js ->
  ```
  <Router>
    <Routes>
      <Route path="/user/:name" element={<User/>} />
    </Routes>
  </Router>

  ```
- next step : in our componet where our user info lies -> what we do there is we import params from react-router-dom
  ```
  import{ useParams } from "react-router-dom"

  ```

  - and then inside function we use our params
 ```
function User(){
  const params = useParams();
  const {name} = params;

return(
  <div>
    this is {name} page
  </div>
)
}

export default User

```
### react Outlet

- this is used for nested routing
- Outlet `<Outlet/>` is passed in our parent component which resrves the space for child component
-  e.g: most seen in our e-commerce website such that we take  a shopping website in which we have main page like
  collection -> men -> shirt
                    -> jeans
            -> women
                     ->pret
                     -> unstiched
            -> kids

   - so there collection is our parent componet and we use `<Outlet/>` over there
     ```
     import { Outlet, Link } from 'react-router-dom';
     ```
   - and then in function we use
     ```
     function Collections() {
      return (
        <div>
          <h1>My Collection</h1>
          <nav>
            <Link to="men">Men</Link>
            <Link to="women">Women</Link>
            <Link to="kids">Kids</Link>
          </nav>
          <Outlet />
        </div>
      );
      }
     ```
     

