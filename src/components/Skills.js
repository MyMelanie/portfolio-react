import Css from '../assets/css.png'
import Github from '../assets/github.png'
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import Bootstrap from '../assets/bootstrap.png'
import Node from '../assets/node.png'
import React from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import { useMagicBackground } from './MagicBgContent'

const Skills = () => {
    const { isMagicBackground } = useMagicBackground();
    return (
        <div name='skills' className={`w-full h-screen bg-[#001D39] text-gray-300 ${isMagicBackground ? 'bg-skills' : 'bg-default'}`}>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>My Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid lg:grid-cols-4 gap-4 sm:grid-cols-2 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                        <p className='py-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Css} alt="Css icon" />
                        <p className='py-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                        <p className='py-4'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={React} alt="React icon" />
                        <p className='py-4'>React</p>
                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='py-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p className='py-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                        <p className='py-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                        <p className='py-4'>Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills