import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Get, { loader as postViewLoader } from './pages/Get'
import Post from './pages/Post'
import RootLayout from './components/RootLayOut';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'get',
        element: <Get/>,
        loader: postViewLoader
      },
      {
        path: 'post',
        element: <Post/>,
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

