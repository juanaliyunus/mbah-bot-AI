import React from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';

interface TypingProps {
    typing: boolean;
}

const Typing = ({ typing }: TypingProps) => {
    return (
        <>
            {typing && (
                <div className='w-full flex gap-3 items-center animate-pulse'>
                    <div className='h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white text-xl'>
                        <TbFidgetSpinner className='animate-spin' />
                    </div>
                    <p className='text-gray-300 text-lg'>Mbah Bot is typing</p>
                    <div className='ml-2 flex gap-1'>
                        <span className='h-2 w-2 bg-gray-400 rounded-full animate-bounce'></span>
                        <span className='h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75'></span>
                        <span className='h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150'></span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Typing;
