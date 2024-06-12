import { useState, useEffect, useMemo } from 'react';

const Typewriter = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const words = useMemo(
        () => ['Upload your own files.', 'Query about youtube videos.', 'Toggle between multiple LLM models'],
        []
    );

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentWord = words[currentIndex];
            const currentText = text;

            if (!isDeleting) {
                setText(currentText + currentWord[currentText.length]);
                if (currentText.length === currentWord.length - 1) {
                    setIsDeleting(true);
                }
            } else {
                setText(currentText.slice(0, -1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, 100); // Delay of 500 milliseconds

        return () => clearTimeout(timeout);
    }, [text, currentIndex, isDeleting, words]);

    return (
        <h1 className="p-2 text-2xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            {text}
        </h1>
    );
};

export default Typewriter;
