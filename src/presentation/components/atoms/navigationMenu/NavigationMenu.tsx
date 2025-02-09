"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react'

const NavigationMenu = () => {
    const navigationItems = {
        desktop: [
            { id: 1, label: 'Home' },
            { id: 2, label: 'TV Shows' },
            { id: 3, label: 'Movies' },
            { id: 4, label: 'New & Popular' },
            { id: 5, label: 'Browse by Languages' }
        ],
        mobile: [
            { id: 2, label: 'TV Shows' },
            { id: 3, label: 'Movies' }
        ],
        categories: [
            { id: 4, label: 'New & Popular' },
            { id: 5, label: 'Browse by Languages' }
        ]
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <main className='absolute anchor-center -bottom-8 md:static'>
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-2 text-white">
                {navigationItems.desktop.map((item) => (
                    <li
                        key={item.id}
                        className="px-4 py-2 text-sm hover:text-gray-300 cursor-pointer"
                    >
                        {item.label}
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden gap-2 items-center relative">
                {navigationItems.mobile.map((item) => (
                    <span
                        key={item.id}
                        className="px-4 py-2 text-center text-sm hover:text-gray-300 cursor-pointer w-24 text-white"
                    >
                        {item.label}
                    </span>
                ))}

                <div className="relative w-fit">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-between px-4 py-2 text-sm w-full hover:text-gray-300 text-white"
                    >
                        <span>Categories</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                        <div className="absolute top-full right-0 w-full min-w-[180px] mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                            {navigationItems.categories.map((item) => (
                                <button
                                    key={item.id}
                                    className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                    onClick={() => {
                                        setIsOpen(false);
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default NavigationMenu