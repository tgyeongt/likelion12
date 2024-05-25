import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import IntroPage from './pages/Intro';
import ErrorPage from './pages/Error';
import RootLayout from './components/RootLayout';
import IntroLayout from './components/IntroLayout';
import IntroDetailPage from './pages/IntroDetail';


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
        element: <IntroLayout/>,
        children: [
          {
            index: true,
            element: <IntroPage/>,
          },
          {
            path: ':id',
            element: <IntroDetailPage/>,
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
