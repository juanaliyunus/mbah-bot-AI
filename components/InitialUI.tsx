import Image from 'next/image';
import React from 'react';

const InitialUI = () => {
    return (
        <div className='h-full w-full flex items-center justify-center flex-col gap-5 text-white'>
            <Image className='h-auto w-96 object-cover' src="/mbahbot.png" alt='Mbah Bot Image' height={400} width={400} />
            <h1 className='text-4xl text-center font-bold'>Say Hello to <span className='gradient-text'>Mbah Bot</span>, Your AI Assistant</h1>
            <p className='text-lg text-gray-400 text-center'>
                Mbah Bot is here to assist you with intelligent and insightful responses. 
                Feel free to ask anything and get quick, accurate answers!
            </p>
        </div>
    );
}

export default InitialUI;
