import { type } from 'os'
import React from 'react'

type Props = {
    chatId: string
}

function Chat({ chatId }: Props) {
    return (
        <div className='flex-1'>
            Chat
        </div>
    )
}

export default Chat
