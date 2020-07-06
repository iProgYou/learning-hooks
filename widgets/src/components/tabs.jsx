import React, { useState, useEffect } from 'react';

export default function Tabs({ tabs }) {
    const [currentTab, setCurrentTab] = useState(0)

    useEffect(() => {
        for(let i = 0; i < tabs.length; i++) {
            let current = document.getElementById(i)
            current.addEventListener('click', () => {
                setCurrentTab(i)
            })
        }
        return () => {
            for(let i = 0; i < tabs.length; i++) {
                let current = document.getElementById(i)
                current.removeEventListener('click', () => {
                    setCurrentTab(i)
                })
            }
        }
    })
    return(
        <div>
            {tabs.map((tab,i) => (
                <h1 id={i} key={i} >{tab.title}</h1>
            ))}
            {tabs[currentTab].content}
        </div>
    )
}