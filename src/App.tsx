import React from 'react';
import bgImg from './assets/background.svg';
import audioAlien from './assets/audio_alien.png';
import danceAlien from './assets/dance_alien.png';
import fogAlien from './assets/fog_alien.png';
import signLangAlien from './assets/sign_lang_alien.png';
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';


import { useMediaQuery } from '@/components/utils/useMediaQuery';

const App: React.FC = () => {
  const isTablet = useMediaQuery('(max-width: 1430px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const topPadding = isMobile ? "pt-8" : isTablet ? "pt-4" : "";
  
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
  return (
    <div className={`flex flex-col justify-center items-center w-auto min-h-screen ${topPadding}`} style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="flex flex-wrap gap-x-2 gap-y-8 justify-between items-center w-full px-16">
          {aliens.map((alien, index) => (
            <Card key={index} title={alien.title} image={alien.image} description={alien.description} />
          ))}
        </div>
    </div>
  );
};

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
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
      <div className="absolute bottom-2 right-3 font-light">
        <Badge variant="destructive" className="font-light">Incomplete</Badge>
      </div>
    </div>
  )
}

export default App;