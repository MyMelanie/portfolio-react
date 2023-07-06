
const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#001D39] text-gray-300">
            <div className=" flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-left pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-left text-4xl font-bold ">
                            <p>Hi! I'm Natallia, nice to meet you.</p>
                        </div>
                        <div>
                            <p>
                            Learning web development has been a true adventure for me during the lockdown. Initially, I was just looking for a way to fill my free time, but when I started learning HTML and CSS, I realized that it was exactly what I wanted to do.
                            <div class="mt-4"></div>

                            After mastering the fundamentals of HTML and CSS, I developed a keen interest in creating interactive and dynamic web applications. That's why I delved into the world of JavaScript and React. These technologies have opened up vast possibilities for me, and I am continuously exploring them. 
                            <div class="mt-4"></div>

                            I am committed to continuing my growth and improving my web development skills. I am genuinely passionate about this field because each new project represents an opportunity for me to learn new technologies and create something exciting. I am ready to take on any challenge and enthusiastically participate in new and engaging projects.

                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About