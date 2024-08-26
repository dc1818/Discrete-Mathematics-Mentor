
import PropTypes from "prop-types";
import {Link, Route} from "react-router-dom";



export default function Card( { image, link, title }){
const address = "/user/" + link;
    return(
        <div className={'card hover:scale-125 hover:border-4'}>
            <Link to={address}>
            <div className={'cardTop'}>
                <img className={'cardImage'} src={image} alt={'picture'}/>
            </div>
            <div className={'cardBottom'}>
                { title }
            </div></Link>
        </div>
    );

}



Card.propTypes = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}