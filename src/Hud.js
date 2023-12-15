import { SearchInput, TextInput } from 'evergreen-ui'

export default function Hud() {
    return (
        <div id="map-ui" className="map-ui w-full h-full p-2">
            <div className="flex gap-3">
                <SearchInput placeholder="Location" />
                <TextInput name="text-input-name" placeholder="Text input placeholder..." />
            </div>
            <div className="w-128 max-w-xl h-full rounded-md bg-green-500">Search results</div>
        </div>
    )
}