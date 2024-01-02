import { useDispatch } from 'react-redux'
import _ from 'lodash'

import LocationSearchResults from './LocationSearchResults'
import { searchByQuery } from 'store/features/search/location-results'

export default function Hud() {
    const dispatch = useDispatch()
    let onQueryInput = _.throttle((e) => {
        const query = e.target.value
        dispatch(searchByQuery(query))
    }, 500, { 'trailing': true })

    return (
        <div id="map-ui">
            <input type="text"
                className="w-full h-12 dotted-underline"
                placeholder="Search"
                onChange={onQueryInput}
            />
            <LocationSearchResults />
        </div>
    )
}