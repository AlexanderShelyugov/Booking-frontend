import { SearchInput } from 'evergreen-ui'
import LocationSearchResults from './LocationSearchResults'

export default function Hud() {
    return (
        <div id="map-ui" className="map-ui w-full h-full p-2">
            <div className="flex flex-col gap-2 w-128 max-w-xl h-full">
                <SearchInput className="w-full" placeholder="Location" />
                <div className="h-full rounded-md bg-purple-950 p-4 px-6">
                    <LocationSearchResults />
                </div>
            </div>
        </div>
    )
}