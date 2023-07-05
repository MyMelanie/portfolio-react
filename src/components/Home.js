import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import FloatingImg from './floatingImg/FloatingImg'
import { useMagicBackground } from './MagicBgContent'

const Home = () => {
    const { isMagicBackground } = useMagicBackground();

    return (
        <div name='home' className={`w-full h-screen ${isMagicBackground ? 'bg-space' : 'bg-default'}  flex items-center justify-center`}>
            <div className="max-w-[1000px]  px-8 md:pl-6 flex flex-col justify-center h-full">

                    <p className= 'text-white bold'>Aloha! My name is</p>
                    <h1 className='text-5xl sm:text-7xl font-bold text-pink-600'>Natallia Karpuk</h1> 
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Web-developer</h2>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat enim laboriosam ducimus rerum dolorum officiis eaque alias, dolorem nisi impedit, voluptate reiciendis quasi earum tempore veritatis consectetur velit! Quo, nam.</p>
                
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to='/work' className='flex items-center'>
                            <span className='mr-3'>View Work</span>
                            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight/></span>
                        </Link>
                    </button>
                </div>
            </div>

            <div className="hidden lg:flex justify-end mt-8 max-w-[200px]">
                <NavLink to="/about">
                    <FloatingImg />
                </NavLink>
                
            </div>
        </div>
    )
}

export default Home