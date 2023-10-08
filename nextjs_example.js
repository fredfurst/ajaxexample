'use client'

import React, {useState} from 'react';

export default function useStateExample() {
    const [number, setNumber] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const increase = () => setNumber((previousValue) => previousValue + 1);
    const decrease = () => setNumber((previousValue) => previousValue - 1);
    const enter = () => {
        setNumbers((prev) => [...prev, number]);
        setNumber(0);
    };
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-5xl">
            <div>{number}</div>
            <div>{numbers.join(', ')}</div>
            <div className="flex items-center justify-center gap-4">
                <button
                    className="rounded bg-green-500 p-2 text-white"
                    onClick={increase}>
                    +
                </button>
                <button
                    className="rounded bg-red-500 p-2 text-white"
                    onClick={decrease}>
                    -
                </button>
                <button
                    className="rounded bg-stone-800 p-2 text-white"
                    onClick={enter}>
                    Y
                </button>
            </div>
        </div>
    );
}
