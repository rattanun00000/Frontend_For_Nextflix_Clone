"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import TopTenForCard from '../../atoms/svg/TopTenForCard';

interface MovieCardProps {
    imageUrl: string;
    imageUrlMb: string;
    title: string;
    netflix: boolean;
    topTen: boolean;
    newSeason: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
    imageUrl,
    imageUrlMb,
    title,
    netflix,
    topTen,
    newSeason
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <main className="w-24 md:w-60 rounded overflow-hidden shadow-lg bg-white relative">
            <Image
                src={(isMobile ? imageUrlMb : imageUrl) || "/api/placeholder/400/200"}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover"
                priority={false}
            />
            {netflix &&
                <Image
                    src={"/asset/images/logo/shot_netflix_logo.png"}
                    alt={title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-5 object-cover absolute top-1"
                    priority={false}
                    unoptimized
                />
            }
            {topTen &&
                <TopTenForCard className=' absolute top-0 right-0' />
            }
            {newSeason &&
                <div className='hidden md:block bg-red-600 text-white text-sm px-2 absolute bottom-2'>NEW EPISODE</div>
            }
        </main>
    )
}

export default MovieCard