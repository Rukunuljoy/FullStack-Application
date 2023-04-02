import Login from "../component/Login";
import Registration from "../component/Registration";
import Main from "../Layout/Main";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Registration></Registration>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        
      ]
    }
  ])

  export default router;