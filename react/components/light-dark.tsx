'use client'
import uselocalStorageJson from '@/src/custom/uselocalStorageJson'; // Ensure the correct import path

export default function LightAndDark() {
    const [value, setvalue] = uselocalStorageJson('theme', 'dark'); // Destructure array from hook

    function handleToggleTheme() {
        setvalue(value === "light" ? "dark" : "light");
    }
    
    console.log(value)

    return (
        <>
            <div className={`light__dark__wrap ${value}`} data-theme={value}>
                <div className='light__dark__container'>
                    <h1>Hello World</h1>
                    <button onClick={handleToggleTheme}>Change the theme</button>
                </div>
            </div>
        </>
    );
}
