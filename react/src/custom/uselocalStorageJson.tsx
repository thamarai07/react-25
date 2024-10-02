import { useEffect, useState } from "react";

export default function uselocalStorageJson(key: string, defaultValues: string) {
    const [value, setvalue] = useState(() => {
        let currentValues;
        try {
            currentValues = JSON.parse(
                localStorage.getItem(key) || JSON.stringify(defaultValues) // Ensure proper JSON format here
            );
        } catch (error) {
            currentValues = defaultValues;
        }
        return currentValues;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setvalue]; // Return as an array
}
