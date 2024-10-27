'use client'

import { useSearchParams } from 'next/navigation';

export default function RecipePage() {
    const searchParams = useSearchParams()

    return (
        <div>
            <h1>Recipe ID: </h1>
            <p>Displaying details for recipe </p>
        </div>
    );
}
