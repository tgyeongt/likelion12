import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import MemoPage from './pages/Memo';
import GamePage from './pages/Game';
import ErrorPage from './pages/Error';
import RootLayout from './components/RootLayout';
import ItemLayout from './components/ItemLayout';
import './App.css';

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
        path: 'memo',
        element: <ItemLayout/>,
        children: [
          {
            index: true,
            element: <MemoPage/>,
          }
        ]
      },
      {
        path: 'game',
        element: <ItemLayout/>,
        children: [
          {
            index: true,
            element: <GamePage/>,
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
