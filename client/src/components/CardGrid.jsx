import Billy from '../assets/Billy.jpg';
import Card from './Card';
import {useEffect, useState} from "react";
import {peopleList} from "../people.js"; // Import the Card component

export default function CardGrid() {
    const [users, setUsers] = useState([]);
    const imageImport = import.meta.glob('../assets/*jpg', {eager:true});

    useEffect(() => {
        setUsers(peopleList);
    }, []);

    const getImage = (imageName) => {
        return imageImport[`../assets/${imageName}`]?.default || null;
    }

    const cards = users.slice(0, users.length).map((user, index) => (
        <Card
            key={index}
            image={ `${getImage(user.propic) || Billy}`}
            link={user.name.replaceAll(" ", "_") || '#'}
            title={user.name || 'Unnamed User'}
        />
    ));

    return (
        <div className='gridClass'>
            {cards}
        </div>
    );
}
