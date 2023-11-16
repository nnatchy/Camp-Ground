'use client'
import React from 'react';

export default function InteractiveCard( { children, contentName } : { children: React.ReactNode, contentName: string }) {

    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type == "mouseover") {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.remove("bg-white");
            event.currentTarget.classList.add("bg-neutral-200");
        } else {
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove("bg-neutral-200");
            event.currentTarget.classList.add("bg-white");
        }
    }
    return (
        <div className='w-[420px] h-[600px] rounded-lg shadow-lg m-[0px] transform 
        duration-[400ms] hover:scale-[1.055] bg-white shadow-white' 
        onMouseOver={ (e) => onCardMouseAction(e)}
        onMouseOut={ (e) => onCardMouseAction(e)}
        >
            { children }
        </div>
    ); 
}