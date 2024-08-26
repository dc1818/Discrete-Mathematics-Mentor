import {useEffect, useState} from "react";

export default function Footer(){
    const [currentDate, setCurrentDate] = useState(Date);

    useEffect(() => {
        setCurrentDate(Date);

    }, []);

    return(
        <>
            <div style={{   marginTop: `80vh`,
                            border: 'solid gold 2px',
                            backgroundColor: 'darkslateblue',
                            flex: 'auto',
                            width: '40%',
                            marginLeft: '30%',
                            height: '14vh',
                            display: 'block',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>

                    <p>This is the footer. {currentDate}</p>
            </div>
        </>
    );
}