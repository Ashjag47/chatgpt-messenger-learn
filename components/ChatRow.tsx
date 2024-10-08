'use client';
import { db } from '@/firebase'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

type Props = {
    id: string
}

function ChatRow({ id }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const [active, setActive] = React.useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        if (pathname?.includes(id)) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [pathname]);

    const [messages, loading, error] = useCollection(
        query(
            collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
            orderBy('createdAt', 'asc')
        )
    );

    const removeChat = async () => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
        router.push('/');
    }

    return (
        <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
            <ChatBubbleLeftIcon className='h-5 w-5' />
            <p className='flex-1 hidden md:inline-flex truncate'>
                {
                    messages?.docs[messages?.docs.length - 1]?.data().message
                }
            </p>
            <TrashIcon className='h-5 w-5 text-gray-700 hover:text-red-700' onClick={removeChat} />
        </Link>
    )
}

export default ChatRow
