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
        <div id="map-ui" className="map-ui w-full h-full p-2">
            <div className="flex flex-col gap-2 w-128 max-w-xl h-full">
                <SearchInput
                    className="w-full"
                    placeholder="Location"
                    onChange={onQueryInput}
                />
                <div className="h-full rounded-md bg-purple-950 p-4 px-6">
                    <LocationSearchResults />
                </div>
            </div>
        </div>
    )
}