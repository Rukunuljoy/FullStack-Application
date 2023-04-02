
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Route/Route';

function App() {
  return (
    <div className='mx-w-[1440]'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
