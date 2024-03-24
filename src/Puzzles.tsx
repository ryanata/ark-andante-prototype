import React from 'react';
import bgImg from './assets/puzzle_background.svg';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"

const Puzzle: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col bg-black w-auto min-h-screen font-ibm">
            {/* Navbar */}
            <div className="flex justify-between items-center pt-8">
                <h1 className="border-white font-medium tracking-widest ml-6 pl-2 text-white border-t border-l text-[50px]">
                    ALIEN 001
                </h1>
                <Drawer>
                    <DrawerTrigger>
                        <Button variant="outline" className="mr-4">
                            <Icon icon="material-symbols-light:book-sharp" />
                            <span>Reference</span>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="h-1/2">
                        <div className="flex justify-between mx-4 text-stone-500">
                            <h1 className="text-[50px]">TRANSLATIONS</h1>
                            <h1 className="text-[50px]">GRAMMAR</h1>
                        </div>
                    </DrawerContent>
                </Drawer>
                
            </div>
            {/* Play Area */}
            <div className="flex flex-1 justify-center" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                <div className="w-4/5 bg-gray-800 bg-opacity-40 shadow-lg"></div>
            </div>
            {/* Input and return */}
            <div className="flex flex-col gap-12 mt-2">
                <div className="w-4/5 text-white mx-auto mb-2 text-2xl">
                    <input className="border-none bg-transparent w-full" placeholder="TRANSLATE THE ALIEN COMMUNICATION">
                    </input>
                    <div className="border-t border-white w-full"></div>
                </div>
                <div className="flex justify-left ml-4 mb-4">
                    <Button variant="outline" onClick={() => navigate("/")}>
                        <Icon icon="grommet-icons:return" />
                        <span className="ml-1">Return</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

const FiumePuzzle: React.FC = () => {
    return (
        <Puzzle />
    )
}

const GelataPuzzle: React.FC = () => {
    return (
        <Puzzle />
    )
}

const NuvolaPuzzle: React.FC = () => {
    return (
        <Puzzle />
    )
}

const ScoglioPuzzle: React.FC = () => {
    return (
        <Puzzle />
    )
}

export { FiumePuzzle, GelataPuzzle, NuvolaPuzzle, ScoglioPuzzle };