import { SearchInput } from 'evergreen-ui'
import LocationSearchResults from './LocationSearchResults'
import { searchByQuery } from '../../store/features/search/location-results/searchResults'
import { useDispatch } from 'react-redux'
import _ from 'lodash'

export default function Hud() {
    const dispatch = useDispatch()
    let onQueryInput = _.throttle((e) => {
        const query = e.target.value
        dispatch(searchByQuery(query))
    }, 500, { 'trailing': true })

    return (
        <div id="map-ui">
            <SearchInput
                className="w-full h-12"
                placeholder="Search"
                onChange={onQueryInput}
            />
            <LocationSearchResults />
        </div>
    )
}