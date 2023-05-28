import './index.scss';

function Feature(props) {

    const data = props.data;

    const image = data[0];
    const alt = data[1];
    const title = data[2];
    const description = data[3];

    return (
        <div className="feature-item">
            <img src={image} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Feature;