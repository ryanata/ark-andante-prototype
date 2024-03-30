import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FiumePuzzle, GelataPuzzle, NuvolaPuzzle, ScoglioPuzzle } from './Puzzles.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DataProvider } from './components/utils/DataContext.tsx';
import '../app/globals.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "fiume",
    element: <FiumePuzzle/>,
  },
  {
    path: "gelata",
    element: <GelataPuzzle/>,
  },
  {
    path: "nuvola",
    element: <NuvolaPuzzle/>,
  },
  {
    path: "scoglio",
    element: <ScoglioPuzzle/>,
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
