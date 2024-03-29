import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import localForage from 'localforage';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Puzzle: React.FC<{ name: string, translationContent: JSX.Element, answer: string, children?: React.ReactNode }> = ({ name, translationContent, answer, children }) => {
    const navigate = useNavigate();
    const [answerInput, setAnswerInput] = useState("");
    const cleanInput = (input: string) => {
        const lowerInput = input.toLowerCase();
        // Remove everything but letters and spaces
        const cleanedInput = lowerInput.replace(/[^a-z ]/g, '');
        return cleanedInput;
    }
    const verifyAnswer = (input: string) => {
        const cleanedInput = cleanInput(input);
        return cleanedInput === answer;
    }

    // Save input to localForage
    const saveInput = async (input: string) => {
        await localForage.setItem(`answerInput_${name}`, input);
    }

    // Load input from localForage
    const loadInput = async () => {
        const savedInput = await localForage.getItem(`answerInput_${name}`);
        if (savedInput) {
            setAnswerInput(savedInput.toString());
        }
    }

    // Load input when component mounts
    useEffect(() => {
        loadInput();
    }, []);

    const correctAnswer = answerInput && verifyAnswer(answerInput);
    const answerBottomBorder = answerInput ? (correctAnswer ? "border-green-500": "border-red-600") : "border-white";
    return (
        <div className="flex flex-col bg-black w-auto min-h-screen font-ibm">
            {/* Navbar */}
            <div className="flex justify-between items-center pt-8">
                <h1 className="border-white font-medium tracking-widest ml-6 pl-2 text-white border-t border-l text-[50px] uppercase">
                    {name}
                </h1>
                <Drawer>
                    <DrawerTrigger asChild={true} className="mr-4">
                        <Button variant="outline" className="mr-4">
                            <Icon icon="material-symbols-light:book-sharp" />
                            <span>Reference</span>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="h-[60%] px-4">
                        <div className="flex justify-between text-stone-500">
                            <h1 className="text-[50px]">TRANSLATIONS</h1>
                            {/* <h1 className="text-[50px]">GRAMMAR</h1> */}
                        </div>
                        <div className="overflow-auto mb-8 pr-4">
                            {translationContent}
                        </div>
                    </DrawerContent>
                </Drawer>
                
            </div>
            {/* Play Area */}
            <div className="flex flex-1 justify-center" style={{ backgroundImage: `url(https://utfs.io/f/440babb5-a815-4448-b826-fe48f1e75df9-vnev2n.svg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                <div className="w-4/5 bg-gray-800 bg-opacity-40 shadow-lg">
                    {children}
                </div>
            </div>
            {/* Input and return */}
            <div className="flex flex-col gap-12 mt-2">
                <div className="w-4/5 text-white mx-auto mb-2 text-2xl">
                    <div className="flex relative">
                        <input 
                            className="border-none bg-transparent w-full uppercase outline-offset-8" 
                            placeholder="TRANSLATE THE ALIEN COMMUNICATION"
                            value={answerInput}
                            onChange={e => {
                                setAnswerInput(e.target.value);
                                saveInput(e.target.value);
                            }}
                        />
                        {answerInput && !correctAnswer && <Icon className="absolute right-1 mt-1" icon="zondicons:close-solid" color="red"/>}
                    </div>
                   
                    <div className={`border-t ${answerBottomBorder} w-full`}></div>
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
        <Puzzle name="fiume" translationContent={<FiumeTranslationContent/>} answer="">
        </Puzzle>
    )
}

const FiumeTranslationContent: React.FC = () => {
    const audioFiles = [
        {
            title: "audio_1",
            translation: "translation here",
            link: "https://utfs.io/f/9354091b-fffe-4a0f-9d97-47080da9df8c-16p.wav",
        },
        {
            title: "audio_2",
            translation: "translation here",
            link: "https://utfs.io/f/b8d13f2a-68bc-4a97-b12e-f669c8507d2b-16q.wav",
        },
        {
            title: "audio_3",
            translation: "translation here",
            link: "https://utfs.io/f/2dad7793-843c-4f8a-aedf-d32566ca7b5f-16r.wav",
        },
        {
            title: "audio_4",
            translation: "translation here",
            link: "https://utfs.io/f/b303e057-844e-47c0-b979-65c9f460c2fe-16s.wav",
        },
        {
            title: "audio_5",
            translation: "translation here",
            link: "https://utfs.io/f/bc7230d9-4623-4503-93b9-118d64b230de-16t.wav",
        },
        {
            title: "audio_6",
            translation: "translation here",
            link: "https://utfs.io/f/2725f518-fabb-469b-914c-e22d464b5bf0-16u.wav",
        },
        {
            title: "audio_7",
            translation: "translation here",
            link: "https://utfs.io/f/7caa030d-98ae-4e49-8542-224cf947ddc1-16v.wav",
        },
        {
            title: "audio_8",
            translation: "translation here",
            link: "https://utfs.io/f/e2cb669d-9c1a-4fcc-afe7-041df7849b87-16w.wav",
        },
        {
            title: "audio_9",
            translation: "translation here",
            link: "https://utfs.io/f/b09d3ed4-3533-4ba0-9225-23bdcdf84547-16x.wav",
        },
        {
            title: "audio_10",
            translation: "translation here",
            link: "https://utfs.io/f/2ad91e35-27c7-400a-b940-d097c09fe9e0-17j.wav",
        },
        {
            title: "audio_11",
            translation: "translation here",
            link: "https://utfs.io/f/7018c6f6-cda2-44b9-b3e7-dadfbe7633a3-17k.wav",
        },
        {
            title: "audio_12",
            translation: "translation here",
            link: "https://utfs.io/f/ee460e19-347c-4d3f-bd1a-8bbba821a728-17l.wav"
        }
    ]
    const playAudio = (audioRef: React.RefObject<HTMLAudioElement>) => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="mx-2 flex flex-wrap justify-between gap-x-2 gap-y-8">
            {audioFiles.map((audioFile, index) => {
                const audioRef = useRef<HTMLAudioElement>(null);
                return (
                    <div>
                        <div key={index} className="relative w-[200px] h-[200px] border-2 rounded-sm bg-slate-100 hover:bg-slate-200 cursor-pointer" onClick={() => playAudio(audioRef)}>
                            <audio ref={audioRef} src={audioFile.link} style={{ display: 'none' }} />
                            <p className="absolute ml-2 italic text-slate-400">{audioFile.title}</p>
                            <div className="flex justify-center items-center h-full w-full">
                                <div className="border-2 border-slate-400 hover:bg-slate-300 rounded-full w-20 h-20 flex items-center">
                                    <div className="ml-[30%]">
                                        <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M38 22L0.5 43.6506L0.5 0.349365L38 22Z" fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="font-ibm">{audioFile.translation}</p>
                    </div>

                );
            })}
        </div>
    );
}

const GelataPuzzle: React.FC = () => {
    return (
        <Puzzle name="gelata" translationContent={<GelataPuzzleContent/>} answer="">
        </Puzzle>
    )
}

const GelataPuzzleContent: React.FC = () => {
    const dancePositions = [
        {
            title: "alien_dance_lay",
            translation: "translation here",
            link: "https://utfs.io/f/57e1731c-0922-4291-ab40-3564e0a13d6e-sg1py6.png"
        },
        {
            title: "alien_dance_close",
            translation: "translation here",
            link: "https://utfs.io/f/f0de506c-7906-4a1e-b48a-a96151964cd2-an6oi6.png"
        },
        {
            title: "alien_dance_leg_down_right",
            translation: "translation here",
            link: "https://utfs.io/f/989563e5-35e5-483c-a7a9-418c4605d1a1-j7502c.png"
        },
        {
            title: "alien_dance_base",
            translation: "translation here",
            link: "https://utfs.io/f/92b21f7c-0fe8-4a72-8e8b-aecebcfb01a0-tfyas7.png"
        },
        {
            title: "alien_dance_legs_together",
            translation: "translation here",
            link: "https://utfs.io/f/26313695-1978-4ef6-a3c1-a3c25aad6848-frwjtb.png"
        },
        {
            title: "alien_dance_square",
            translation: "translation here",
            link: "https://utfs.io/f/ed33dd04-5ea5-4c39-a123-d4fe339d7e4c-wudkgz.png"
        },
        {
            title: "alien_dance_full_bend",
            translation: "translation here",
            link: "https://utfs.io/f/0bd0c6b5-be3a-4d6f-98b9-3a70a135f163-jl461w.png"
        },
        {
            title: "alien_dance_half_bend",
            translation: "translation here",
            link: "https://utfs.io/f/465c4fdf-70f9-4b59-b48d-cf1328474dba-js5eo0.png"
        },
        {
            title: "alien_dance_jump",
            translation: "translation here",
            link: "https://utfs.io/f/7303e37c-905c-4df2-bb20-4094248e1e02-tg3tdg.png"
        },
        {
            title: "alien_dance_leg_down_left",
            translation: "translation here",
            link: "https://utfs.io/f/04a25e18-ddfd-47e5-8e40-28d821b8b051-j7502i.png"
        },
        {
            title: "alien_dance_triangle",
            translation: "translation here",
            link: "https://utfs.io/f/691ace8d-8f41-4882-b768-9d5b16cffd48-81i376.png"
        },
        {
            title: "alien_dance_leg_up_left",
            translation: "translation here",
            link: "https://utfs.io/f/0e78ac98-ddda-48ca-98ab-6a7844b987a9-56oich.png"
        },
        {
            title: "alien_dance_leg_up_right",
            translation: "translation here",
            link: "https://utfs.io/f/4be1c13c-0a59-477b-86d4-df97619d8078-56oicb.png"
        }
    ]
    return (
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-8">
            {dancePositions.map((dancePosition, index) => {
                return (
                    <div>
                        <img key={index} src={dancePosition.link} className="border-2 rounded-sm" />
                        <p className="font-ibm">{dancePosition.translation}</p>
                    </div>

                );
            })}
        </div>
    )
}

const NuvolaPuzzle: React.FC = () => {
    return (
        <Puzzle name="nuvola" translationContent={<NuvolaPuzzleContent/>} answer="">
        </Puzzle>
    )
}

const NuvolaPuzzleContent: React.FC = () => {
    const symbols = [
        {
            title: "leaf",
            translation: "Food",
            link: "https://utfs.io/f/d3cdc8f2-330f-420c-9f68-efc892e175a3-1eoam.svg"
        },
        {
            title: "red_leaf",
            translation: "Eat",
            link: "https://utfs.io/f/3e5ff433-a828-409e-9962-9e2327a467af-bxs510.svg"
        },
        {
            title: "claws",
            translation: "Get",
            link: "https://utfs.io/f/5f18ddfe-540e-4e5a-baa2-f82dc930aa1c-12t978.svg"
        },
        {
            title: "wing",
            translation: "Go\"/\"Fly",
            link: "https://utfs.io/f/ff82074b-2f0f-4215-afd9-517bc8fde347-1lsff.svg"
        },
        {
            title: "forest",
            translation: "Forest",
            link: "https://utfs.io/f/987b2564-6c9e-4a5e-af89-dc23a2292b6f-yw9np9.svg"
        },
        {
            title: "cloud",
            translation: "Word",
            link: "https://utfs.io/f/bf828dfa-ec84-48d2-95bf-6f69113886f9-12tjit.svg"
        },
        {
            title: "red_cloud",
            translation: "Speak",
            link: "https://utfs.io/f/53d0a028-d63b-4d5c-8300-46093daba003-f2hfll.svg"
        },
        {
            title: "outline_bottom_right",
            translation: "You",
            link: "https://utfs.io/f/93e782d2-8685-43c4-b3ee-dc88880e124a-84ayaj.svg"
        },
        {
            title: "outline_right_left",
            translation: "We",
            link: "https://utfs.io/f/c03b657e-88ea-42e3-8c8a-d7cbdb5e91de-13n1up.svg"
        },
        {
            title: "outline_top_left",
            translation: "I",
            link: "https://utfs.io/f/f501ebd6-3ccc-45d5-b841-46fbc614fc01-alnocu.svg"
        }
    ]
    return (
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-8">
            {symbols.map((symbol, index) => {
                return (
                    <div>
                        <div className="flex justify-center items-center border-2 rounded-sm w-[275px] h-[275px]">
                            <img key={index} src={symbol.link} className="w-auto h-[256px]" />
                        </div>
                        <p className="font-ibm">"{symbol.translation}"</p>
                    </div>

                );
            })}
        </div>
    )
}

const ScoglioPuzzle: React.FC = () => {
    const signLanguage = [
        {
            title: "sign_hands",
            translation: "Hands",
            link: "https://utfs.io/f/4aec6ce5-cf1a-4a48-abb7-a2f44da97ce9-m81kg1.png"
        },
        {
            title: "sign_my",
            translation: "My",
            link: "https://utfs.io/f/d774eefb-8315-488a-811a-fae1894d5734-yj9fqn.png"
        },
        {
            title: "sign_me",
            translation: "Me",
            link: "https://utfs.io/f/66b7dd04-465a-47b7-af18-a6eb89594c57-yj9fq3.png"
        },
        {
            title: "sign_own",
            translation: "Own",
            link: "https://utfs.io/f/eda5c637-92ee-4e4d-9bd2-c1b0448c62c6-54frtv.png"
        },
        {
            title: "sign_your",
            translation: "Your",
            link: "https://utfs.io/f/83ffae06-fabb-40f7-9605-5fb760678609-grj2ye.png"
        },
        {
            title: "sign_tell",
            translation: "Tell",
            link: "https://utfs.io/f/d4582858-34b4-43f5-8927-55eff4fa9165-grfodw.png"
        },
        {
            title: "sign_home",
            translation: "Home",
            link: "https://utfs.io/f/ae4166fb-dc43-4939-97d3-c03675352d8f-gr87z6.png"
        },
        {
            title: "sign_plot",
            translation: "Plot",
            link: "https://utfs.io/f/18682197-057b-4b38-9532-1c0f80965cf1-grd9pg.png"
        },
        {
            title: "sign_place",
            translation: "Place",
            link: "https://utfs.io/f/7a5da39d-7238-48d9-8b61-85e45613db28-mcmodg.png"
        },
        {
            title: "sign_story",
            translation: "Story",
            link: "https://utfs.io/f/b5b0dfaf-f83b-4287-b69f-e0302987944e-mefgsy.png"
        },
        {
            title: "sign_about",
            translation: "About",
            link: "https://utfs.io/f/02dfd489-5789-40f3-b304-68588fe8a0ba-m47ofe.png"
        }
    ];
    const answer = "tell me story about your home";
    // Split the answer into an array of words
    const answerWords = answer.split(' ');
    // Filter the signLanguage array to only include items that match a word in the answer
    const relevantSigns = answerWords.map(word => 
        signLanguage.find(sign => sign.translation.toLowerCase() === word)
    ).filter(Boolean); // remove undefined items if any word is not found
    return (
        <Puzzle name="scoglio" translationContent={<ScoglioPuzzleContent signLanguage={signLanguage}/>} answer={answer}>
            <div className="h-full flex justify-center items-center">
                <div className="w-[50%]">
                    <Carousel>
                        <CarouselContent>
                            {relevantSigns.map((handSign, index) => (
                                <CarouselItem key={index} className="flex justify-center items-center">
                                    <img src={handSign?.link} alt={handSign?.title} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </Puzzle>
    )
}

const ScoglioPuzzleContent: React.FC<{ signLanguage: { title: string, translation: string, link: string }[] }> = ({ signLanguage }) => {
    return (
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-8">
            {signLanguage.map((handSign, index) => {
                return (
                    <div>
                        <img key={index} src={handSign.link} className="border-2 rounded-sm" />
                        <p className="font-ibm">"{handSign.translation}"</p>
                    </div>

                );
            })}
        </div>
    )
}

export { FiumePuzzle, GelataPuzzle, NuvolaPuzzle, ScoglioPuzzle };