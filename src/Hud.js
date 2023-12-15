export default function Hud() {
    return (
        <div className="map-ui w-full h-full p-2 grid grid-cols-12 gap-4 grid-rows-[auto,1fr]">
            <div className="col-span-3">
                <h1 className="bg-green-500">whatever</h1>
            </div>
            <div className="col-span-2">
                <h1 className="bg-blue-500">Price</h1>
            </div>
            <div className="col-span-7" />
            <div className="row-span-2 col-span-3 h-full bg-green-500">Search results</div>
        </div>
    )
}