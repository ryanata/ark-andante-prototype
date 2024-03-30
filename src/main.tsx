import React, { useEffect } from 'react';
import { ArkGameData } from './gameData';
import localForage from 'localforage';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FiumePuzzle, GelataPuzzle, NuvolaPuzzle, ScoglioPuzzle } from './Puzzles.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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



const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const data: ArkGameData = {
    firstPlaythrough: true,
    gameStarted: false,
    fiumeCompletionTime: 0,
    fiumeOpenedRefSheetCount: 0,
    gelataCompletionTime: 0,
    gelataOpenedRefSheetCount: 0,
    nuvolaCompletionTime: 0,
    nuvolaOpenedRefSheetCount: 0,
    scoglioCompletionTime: 0,
    scoglioOpenedRefSheetCount: 0,
  }
  const loadGameState = async () => {
    const storedData = await localForage.getItem('arkGameState');
    if (storedData === null) {
      await localForage.setItem('arkGameState', data);
    }
  }
  useEffect(() => {
    loadGameState();
  }, []);
  return (
    <>
      {children}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
