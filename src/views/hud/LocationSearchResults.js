import { useSelector } from 'react-redux'
import LocationListItem from './LocationListItem'

export default function LocationSearchResults() {
    const places = useSelector((state) => {
        return state.locationResults.places
    })

    if (!places || places.length <= 0) return (null)

    const placeViews = places.map(
        (place) => <LocationListItem place={place} />
    )

    return (
        <div className="search-results-list relative h-full pt-8 pd-4">
            {placeViews}
        </div>
    )
}
