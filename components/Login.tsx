'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'

function Login() {
    return (
        <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
            <Image src='https://links.papareact.com/2i6' width={300} height={300} alt='ChatGPT logo' />
            <button
                className='text-white font-bold text-3xl animate-pulse'
                onClick={() => signIn('google')}
            >
                Sign in to use ChatGPT
            </button>
        </div>
    )
}

export default Login
