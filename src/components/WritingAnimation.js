// WritingAnimation.js
import React, { useEffect, useState } from 'react';
import './WritingAnimation.css'; // Create this CSS file for styling

const WritingAnimation = ({ text }) => {
    const [width, setWidth] = useState('0');

    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth('100%');
        }, 100); // Delay for a smoother appearance

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        <h1
            className="writing-animation"
            style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                borderRight: '4px solid black', // Cursor effect
                width: width, // Controlled width for animation
                animation: 'blink 0.75s step-end infinite' // Blinking cursor animation
            }}
        >
            <strong>{text}</strong>
        </h1>
    );
};

export default WritingAnimation;