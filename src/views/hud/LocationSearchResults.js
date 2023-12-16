import { useSelector } from 'react-redux'

export default function LocationSearchResults() {
    const places = useSelector((state) => {
        return state.locationResults.places
    })

    const placeViews = places.map((place, index) =>
        <li key={place.id}>{place.location}</li>
    )

    return (<ul>{placeViews}</ul>)
}
