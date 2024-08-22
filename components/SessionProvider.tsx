'use client';
import React from 'react'
import { SessionProvider as Provider } from "next-auth/react"
import { Session } from "next-auth"

type props = {
    session: Session | null,
    children: React.ReactNode
}

function SessionProvider({ session, children }: props) {
    return (
        <Provider session={session}>
            {children}
        </Provider>
    )
}

export default SessionProvider
