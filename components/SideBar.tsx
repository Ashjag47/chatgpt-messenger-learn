'use client';
import React from 'react'
import NewChat from './NewChat'
import { signOut, useSession } from 'next-auth/react';
import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';


function SideBar() {
    const { data: session } = useSession();
    const imageUrl = session?.user?.image?.split('=')[0]; // Removes the query parameters

    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, 'users', session?.user?.email!, 'chats'),
            orderBy('createdAt', 'asc')
        )
    );

    return (
        <div className='p-2 flex flex-col h-screen'>
            <div className='flex-1'>
                <div>
                    <NewChat />
                </div>
                <div>
                    model selection
                </div>
                <div>
                    {
                        chats?.docs.map((chat) => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))
                    }
                </div>
            </div>

            {
                session && (
                    <img
                        src={`${imageUrl}?s96`} // or try another size like ?s128, ?s256
                        alt="Profile Pic"
                        className="rounded-full h-12 w-12 cursor-pointer mx-auto mb-2 hover:opacity-50"
                        onClick={() => signOut()}
                    />
                )
            }
        </div>
    )
}

export default SideBar
