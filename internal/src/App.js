import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./Components/RootLayout/RootLayout"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Home from "./Components/Home/Home"

function App() {

  const router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
        {
          path:'/signin',
          element: <Login/>
        },
        
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
