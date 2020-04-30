import React from 'react';

import ArtistCard from './ArtistCard';

const ArtistList = (props) => {
    const artistList = props.artists.map((artist) =>
        <ArtistCard
            key={artist.id}
            name={artist.name}
            about={artist.about}
            image={artist.image}
            onClick={() => props.onClick(artist.id)}
        />
    );
    return (
        <table className="table table-hover">
            <tbody>
                {artistList}
            </tbody>
        </table>
    );
}

export default ArtistList;