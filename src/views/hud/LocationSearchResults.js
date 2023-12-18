import { useSelector } from 'react-redux'

export default function LocationSearchResults() {
    const places = useSelector((state) => {
        return state.locationResults.places
    })

    if (places.length <= 0) return (null)

    const placeViews = !places ? [] : places.map((place) =>
        <div key={place.id} className="location-item h-24">
            <a href="#">{place.location}</a>
        </div>
    )

    return (
        <div className="search-results-list relative h-full pt-8 pd-4">
            {placeViews}
        </div>
    )
}
