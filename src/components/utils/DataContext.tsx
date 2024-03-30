import { ArkGameData } from "@/components/utils/gameData";
import React, { createContext, useContext, useEffect, useState } from 'react';
import localForage from "localforage";

export const defaultData: ArkGameData = {
    firstPlaythrough: true,
    allCompleted: false,
    gameStarted: false,
    fiumeUserAnswer: "",
    fiumeCompletionTime: 0,
    fiumeCompleted: false,
    fiumeOpenedRefSheetCount: 0,
    gelataUserAnswer: "",
    gelataCompletionTime: 0,
    gelataCompleted: false,
    gelataOpenedRefSheetCount: 0,
    nuvolaUserAnswer: "",
    nuvolaCompletionTime: 0,
    nuvolaCompleted: false,
    nuvolaOpenedRefSheetCount: 0,
    scoglioUserAnswer: "",
    scoglioCompletionTime: 0,
    scoglioCompleted: false,
    scoglioOpenedRefSheetCount: 0,
};
  
type DataContextType = {
    data: ArkGameData;
    setData: React.Dispatch<React.SetStateAction<ArkGameData>>;
    defaultData: ArkGameData;
};

const DataContext = createContext<DataContextType | undefined>(undefined);
  
const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState(defaultData);
  
    const loadGameState = async () => {
      const storedData = await localForage.getItem<ArkGameData>('arkGameState');
      if (storedData === null) {
        await localForage.setItem('arkGameState', data);
      } else {
        setData(storedData);
      }
    };
  
    useEffect(() => {
      localForage.setItem('arkGameState', data);
    }, [data]);
    
    useEffect(() => {
      loadGameState();
    }, []);
  
    return <DataContext.Provider value={{ data, setData, defaultData }}>{children}</DataContext.Provider>;
};
  
const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export { DataProvider, useData };