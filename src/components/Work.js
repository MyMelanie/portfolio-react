import Todolistreact from '../assets/projects/todolistreact.jpg'
import WeatherApp from '../assets/projects/weather-app-js.jpg'
import Pulse from '../assets/projects/pulse.jpg'
import Japan from '../assets/projects/japan.jpg'
import Food from '../assets/projects/Food.jpg'
import Uber from '../assets/projects/uber.jpg'
import Relvise from '../assets/projects/relvise.jpg'
import Windows from '../assets/projects/windows.jpg'
import Art from '../assets/projects/art.jpg'

const Work = () => {

    return (
        <div name='work' className="w-full min-h-screen text-gray-300 bg-[#001D39]">
            <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full min-h-full">
                <div className="pb-6" style={{ marginTop: '4rem' }}>
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-6">Check out of my recent works</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid item */}
                    <div style={{backgroundImage: `url(${Todolistreact})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS - Todo List
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://react-todo-nine-silk.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/todo-list-react" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${WeatherApp})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                vanilla JavaScript - Weather App
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://weather-app-iota-lovat-35.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/weather_app" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Windows})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Work with scripts, vanilla JS - <br/> Windows project
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://windows-u1ua.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/windows" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Art})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Work with scripts, vanilla JS - <br/> Art project
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://art-six-kappa.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/art" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Food})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Work with scripts, vanilla JS - Food project
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://food-tawny.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/food" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Pulse})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                HTML, CSS/SASS/Bootstrap, BEM - <br/> Pulse project
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://pulse-sable.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/pulse" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Uber})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML, CSS/SASS, Bootstrap - <br/> Uber
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://uber-two-brown.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/uber" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Japan})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                HTML CSS/SCSS JS - Travel
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://japan-one.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/relvise" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Relvise})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div flex-grow">
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML + CSS/SCSS, JS - <br/> Relvise
                            </span>
                        
                            <div className='pt-8 text-center'>
                                <a href="https://relvise-kappa.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Demo</button>
                                </a>
                                <a href="https://github.com/MyMelanie/relvise" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg hover:text-gray-800'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </div>
    )
}

export default Work