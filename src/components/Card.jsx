import '../styles/card-styles.css'

export default function Card(props)
{
    const journal = props.journal

    return (
        <div className="card">
            <img className="card--image" src={journal.imageUrl} alt="Image" />
            <section className="card--details">
                <div className="card--location">
                    <img className="card--location-icon" src="./location.png" alt="" />
                    <span>{journal.location}</span>
                    <a href={journal.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title" >{journal.title}</h1>
                <span className='card--date'><b>{journal.startDate}-{journal.endDate}</b></span>
                <p className='card--description'>{journal.description}</p>
            </section>
        </div>
    );
}