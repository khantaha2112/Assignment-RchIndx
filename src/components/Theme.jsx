import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Theme() {
    // Check the initial theme from localStorage or system preference
    const [darkMode, setDarkMode] = useState(
        () => window.localStorage.getItem('theme') === 'dark' || false
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        // Save the user's preference
        window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="mr-10">
            <button
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded-md flex items-center"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <FaSun className="mr-2" />
                ) : (
                    <FaMoon className="mr-2" />
                )}
                <span>Toggle Theme</span>
            </button>
        </div>
    );
}

export default Theme;
