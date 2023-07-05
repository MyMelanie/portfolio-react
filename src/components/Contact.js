

import React, { useEffect, useState } from 'react';
import { useMagicBackground } from "./MagicBgContent";


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const { isMagicBackground } = useMagicBackground();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Дополнительная обработка формы
        // ...
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
        <div name='contact' className={`w-full h-screen ${isMagicBackground ? 'bg-contact' : 'bg-default'} flex justify-center items-center p-4 `}>
            {!submitted ? (
                <form  method='POST' action="https://getform.io/f/591b2d4d-3866-4d33-95f8-c5be6a968af0" onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full mt-14">
                    <div className="pb-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                        <p className="text-gray-300 py-4">write me something</p>
                    </div>
                    <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name='name'/>
                    <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name='email'/>
                    <textarea className="bg-[#ccd6f6] px-2" name="message" rows="10" placeholder="Message"></textarea>
                    <button className="text-white border-2 hover:bg-pink-600 hover:border-pinh-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
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
