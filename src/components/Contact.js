import React, { useEffect, useState } from 'react';
import { useMagicBackground } from "./MagicBgContent";
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const { isMagicBackground } = useMagicBackground();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (


        <div name='contact' className={`w-full min-h-screen ${isMagicBackground ? 'bg-contact' : 'bg-default'} flex justify-center items-center p-4 `}>
            

            {!submitted ? (
                <form method='POST' action="https://getform.io/f/591b2d4d-3866-4d33-95f8-c5be6a968af0" onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full mt-14">
                    <div >
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mb-4">Contact</p>
                            <div >
                                <ul className="lg:hidden md sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-2 p-4 sm:w-full">
                                    <li className="w-[100%] h-[60px] flex justify-between items-center bg-[#D3215A] hover:scale-110 duration-500 mb-4">
                                        <a
                                            className="flex  justify-between item-center w-full text-gray-300"
                                            href="https://www.linkedin.com/in/natallia-karpuk-37414824b/"
                                            target="_blank"
                                        >
                                            Linkedin <FaLinkedin size={30} />
                                        </a>
                                    </li>
                                    <li className="w-[100%] h-[60px] flex justify-between items-center bg-[#333333] hover:scale-110 duration-500 mb-4">
                                        <a
                                            className="flex  justify-between item-center w-full text-gray-300"
                                            href="https://github.com/MyMelanie"
                                            target="_blank"
                                        >
                                            Github <FaGithub size={30} />
                                        </a>
                                    </li>
                                    <li className="w-[100%] h-[60px] flex justify-between items-center  bg-[#3674B0] hover:scale-110 duration-500">
                                        <a
                                            className="flex  justify-between item-center w-full text-gray-300"
                                            href="https://t.me/natallia_karpuk"
                                            target="_blank"
                                        >
                                            Telegram <FaTelegramPlane size={30} />
                                        </a>
                                    </li>
                                    <li className="w-[100%] h-[60px] flex justify-between items-center  bg-[#585400] hover:scale-110 duration-500 mb-4">
                                        <a
                                            className="flex  justify-between item-center w-full text-gray-300"
                                            href="https://drive.google.com/drive/u/1/my-drive?ths=true"
                                            target="_blank"
                                        >
                                            Resume <BsFillPersonLinesFill size={30} />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        <p className="text-gray-300 py-4">Drop me an email</p>
                    </div>
                    <input type="text" className="bg-[#ccd6f6] p-2"  placeholder="Name" name='name'/>
                    <input type="email" className="my-4 p-2 bg-[#ccd6f6]"  placeholder="Email" name='email'/>
                    <textarea type='text' className="bg-[#ccd6f6] px-2" name="message" rows="10" placeholder="Message"></textarea>
                    <button type="submit" className="text-white border-2 hover:bg-pink-600 hover:border-pinh-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
                </form>
            ) : (
                <div className="flex flex-col items-center">
                    <p className="text-pink-600 text-4xl bold ">Great! I will contact you soon</p>
                </div>
            )}
        </div>
        
    );
};

export default Contact;


