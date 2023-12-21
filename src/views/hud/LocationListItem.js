
export default function LocationListItem({ place }) {
    return (
        <div key={place.id} className="location-item h-24">
            <a href="#">{place.location}</a>
        </div>
    )
}