import React, {useState} from "react";

interface Props {
    loading: boolean
    listing: Array<string>
    refreshListing: (seed: number) => void
}

export function Dashboard({loading, listing, refreshListing}: Props) {
    const [clicks, setClicks] = useState(0)

    function handleClickRefresh() {
        setClicks(clicks + 1)
        refreshListing(clicks);
    }

    return (
        <div>
            {loading ? <div>Loading...</div> : <>
                <p>Clicks: {clicks}</p>
                <ul>
                    {listing?.length > 0 &&
                        listing.map((N: string) => {
                            return <li>{N}</li>;
                        })}
                </ul>
                <button onClick={handleClickRefresh}>
                    Refresh
                </button>
            </>}
        </div>
    )
}
