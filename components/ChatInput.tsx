'use client';
import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'

type Props = {
    chatId: string
}

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = React.useState('');
    const { data: session } = useSession();

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt || !session) return;

        const input = prompt.trim();
        setPrompt('');

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session.user?.email!,
                name: session.user?.name!,
                avatar: session.user?.image! || `https://ui-avatars.com/api/?name=${session.user?.name}&background=random`
            }
        }

        await addDoc(
            collection(db, 'users', session.user?.email!, 'chats', chatId, 'messages'),
            message
        );

        // toast notification


    }

    return (
        <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
            <form onSubmit={sendMessage} className='p-5 space-x-5 flex'>
                <input
                    className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    type="text" placeholder='Type your messsage here...'
                    disabled={!session}
                />
                <button
                    type='submit' disabled={!prompt || !session}
                    className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded 
                             disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                    <PaperAirplaneIcon className='h-5 w-5 -rotate-45 text-white' />
                </button>
            </form>
            <div>
                {/* model selection */}
            </div>
        </div>
    )
}

export default ChatInput
