import { useState } from 'react';

export default function BlogDataForm() {
    const [message, setMessage] = useState('');


    const blogChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userid = parseInt(sessionStorage.getItem('userid'));
        try {

            const response = await fetch('http://localhost:5001/messages/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userid, message}),
            });

                if (!response.ok) {
                throw new Error('Failed to submit blog data');
                }
            } catch (error) {
            console.error('Error submitting blog data:', error);
        }
    };

    return (
        <>
            <div className={'flex flex-col m-1'}>
                <form onSubmit={handleSubmit}>
                    <input
                        value={message}
                        onChange={blogChange}
                        className={'flex flex-col h-32 w-[400px] mb-2 whitespace-pre-wrap overflow-wrap-break-word width-100px'}
                        type={'text'}
                        id={''}
                        placeholder={'Enter Blog'}
                    />
               </form>
            </div>
        </>
    );
}
