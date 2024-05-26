import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import ErrorPage from './pages/Error';
import RootLayout from './components/RootLayout';
import MenuLayout from './components/MenuLayout';
import MenuDetailPage from './pages/MenuDetail';


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
        path: 'intro',
        element: <MenuLayout/>,
        children: [
          {
            index: true,
            element: <MenuPage/>,
          },
          {
            path: ':id',
            element: <MenuDetailPage/>,
          }
        ]
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
