import React, {useState} from 'react';
import bgImg from './assets/background.svg';
import audioAlien from './assets/audio_alien.png';
import danceAlien from './assets/dance_alien.png';
import fogAlien from './assets/fog_alien.png';
import signLangAlien from './assets/sign_lang_alien.png';
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import { useData } from './components/utils/DataContext';
import { Button } from './components/ui/button';
import { useMediaQuery } from '@/components/utils/useMediaQuery';
import { ArkGameBooleanDataKeys } from './components/utils/gameData';

const App: React.FC = () => {
  const isTablet = useMediaQuery('(max-width: 1430px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [completionTime, setCompletionTime] = useState<string>("");
  const { data: gameData, setData: setGameData, defaultData } = useData();
  const topPadding = isMobile ? "pt-8" : isTablet ? "pt-4" : "";
  const finishedTextSize = isMobile ? "24px" : isTablet ? "32px" : "40px";
  const finishedButtonSize = isMobile ? "xl" : isTablet ? "2xl" : "3xl";

  const aliens = [
    {
      title: 'Fiume',
      image: audioAlien,
      description: "Spawning from Laguna's Braccio di Mare, Fiume use echolocation for communication and nutrient absorption."
    },
    {
      title: 'Gelata',
      image: danceAlien,
      description: "Inhabitants of Dune Boreali, the Gelata communicate and regulate their body temperature through dance."
    },
    {
      title: 'Nuvola',
      image: fogAlien,
      description: "Dwelling in the misty Foresta Nebbiosa, the Nuvola converse by projecting symbols onto the mist using their snouts."
    },
    {
      title: 'Scoglio',
      image: signLangAlien,
      description: "The Scoglio reside in the caves of Picco Senz’aria and communicate via hand symbols due to the region’s air scarcity."
    }
  ]

  function str_pad_left(string: string, pad: string, length: number) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }
  
  if (!completionTime && gameData.fiumeCompleted && gameData.gelataCompleted && gameData.nuvolaCompleted && gameData.scoglioCompleted) {
    const totalCompletionTime = gameData.fiumeCompletionTime + gameData.gelataCompletionTime + gameData.nuvolaCompletionTime + gameData.scoglioCompletionTime;
    const minutes = Math.floor(totalCompletionTime / 60);
    const seconds = totalCompletionTime % 60;
    const finalTime = str_pad_left(minutes.toString(), '0', 2) + ':' + str_pad_left(seconds.toString(), '0', 2);

    setCompletionTime(finalTime);
  }

  const resetGame = () => {
    setCompletionTime("");
    setGameData({ ...defaultData, firstPlaythrough: false });
  }

  return (
    <div className={`flex flex-col justify-center items-center w-auto min-h-screen ${topPadding}`} style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div>
            <div className="flex flex-wrap gap-x-2 gap-y-8 justify-between items-center w-full px-16">
                {aliens.map((alien, index) => (
                    <Card key={index} title={alien.title} image={alien.image} description={alien.description} completed={gameData[`${alien.title.toLowerCase()}Completed` as ArkGameBooleanDataKeys]}/>
                ))}
            </div>
            {
              completionTime &&
              <div className={`flex flex-col justify-center items-center text-white font-bold pt-2 tracking-wider font-teko`} style={{fontSize: finishedTextSize}}>
                  <h1>Congrats you have finished all tasks in <span className="text-green-500">{completionTime}</span>!</h1>
                  <h2 className="mb-2">Please fill out our <a target="_blank" className="underline decoration-[#3344dd] hover:decoration-[#bb1122]" href="https://docs.google.com/forms/d/e/1FAIpQLSfarbdcxLbog54gW8q6dEYhzLeU4v936CKNuQCAaLOn1HB69Q/viewform">survey</a> for a class project.</h2>
                  <Button onClick={resetGame} size="xl" variant="gradient" className={`tracking-wider text-${finishedButtonSize}`}>Play Again</Button>
              </div>
            }
        </div>
    </div>
  );
};

interface CardProps {
  title: string;
  image: string;
  description: string;
  completed: boolean;
}

const Card: React.FC<CardProps> = ({ title, image, description, completed }) => {
  const navigate = useNavigate();
  return (
    <div 
      className="w-80 h-[420px] rounded-2xl font-teko tracking-widest text-white pt-4 px-3 overflow-none cursor-pointer border border-seagreen hover:border-4 transform hover:scale-105 transition-transform duration-200" 
      style={{background: 'linear-gradient(153deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0) 100%)', backdropFilter: 'blur(22px)'}}
      onClick={() => navigate(title.toLowerCase())}
    >      
      <h1 className="text-2xl text-center">
        {title}
      </h1>
      <div className="flex justify-center h-52">
        <img src={image} alt="Audio Alien" />
      </div>
      <p className="text-2xl tracking-wide font-light mt-2">
        {description}
      </p>
      <div className="absolute bottom-2 right-3">
        {
          completed ?
          <Badge variant="secondary" className="text-sm text-white font-light bg-green-500">Complete</Badge>
          :
          <Badge variant="destructive" className="text-sm font-light">Incomplete</Badge>
        }
      </div>
    </div>
  )
}

export default App;