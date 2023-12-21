export default function LocationListItem({ place }) {
    const showAlert = (e) => alert('Clickd')

    return (
        <div key={place.id} className="location-item h-24">
            <a href="#" onClick={showAlert}>{place.location}</a>
        </div>
    )
}