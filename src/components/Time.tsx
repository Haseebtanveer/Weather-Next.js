import { useState, useEffect } from 'react';

function ClientTime() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true  
                })
            );
        };

       
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='700'
            className='flex h-10 items-center text-lg font-light'
        >
            {time}
        </div>
    );
}

export default ClientTime;
