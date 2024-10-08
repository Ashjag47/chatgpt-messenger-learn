'use client';
import { db } from '@/firebase';
import { PlusIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

function NewChat() {
    const { data: session } = useSession();
    const router = useRouter();

    const createNewChat = async () => {
        console.log('Creating a new chat');
        const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp()
        });
        router.push(`/chat/${doc.id}`);
    }

    return (
        <div onClick={createNewChat} className='border-gray-700 border chatRow'>
            <PlusIcon className='h-4 w-4 text-white' />
            <p>New Chat</p>
        </div>
    )
}

export default NewChat
