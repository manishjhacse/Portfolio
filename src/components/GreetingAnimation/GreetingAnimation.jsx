import React, { useState, useEffect } from 'react';
import './GreetingAnimation.css';

const GreetingAnimation = () => {
    const greetings = [
        'Hello',
        'नमस्ते',
        'வணக்கம்',
        'ಹೆಲೋ'
    ];

    const totalDuration = 1000; // 1 second
    const perGreetingDelay = totalDuration / greetings.length; // 250ms for 4 greetings

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (isCompleted) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex + 1 === greetings.length) {
                    setIsCompleted(true);
                    clearInterval(interval);
                    return prevIndex;
                }
                return prevIndex + 1;
            });
        }, 350);

        return () => clearInterval(interval);
    }, [isCompleted, greetings.length, perGreetingDelay]);

    return (
        !isCompleted && (
            <div className="animation-container absolute h-screen w-screen bg-black">
                <h1 className="greeting-text">{greetings[currentIndex]}</h1>
            </div>
        )
    );
};



export default GreetingAnimation;
