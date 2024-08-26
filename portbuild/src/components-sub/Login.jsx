
import '../App.css';


export default function Login({ x, y }) {
    const divStyle = {
        left: `${x}px`,
        top: `${y}px`
    };

    return (
        <div className="styled-div" style={divStyle}>
            <textarea className="styled-textarea" placeholder="Name"/>
            <textarea className="styled-textarea" placeholder="Password" />
            <div className="button-container">
                <button className="styled-button">Submit</button>
                <button className="styled-button">Cancel</button>
            </div>
        </div>
    );
}
