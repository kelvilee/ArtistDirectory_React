import React, { useState } from 'react';

import ArtistForm from './ArtistForm';
import ArtistList from './ArtistList';
import AddArtistForm from './AddArtistForm';


const ArtistDirectory = () => {
    const [showForm, setShowForm] = useState(false);
    const [artistList, setArtistList] = useState([]);

    const handleAddArtist = (e) => {
        let list = artistList.slice();
        const newArtist = [{
            id: uuidv4(),
            name: e.name,
            about: e.about,
            image: e.image,
        }];
        list = list.concat(newArtist);
        setArtistList(list);
        setShowForm(false);
    }

    const handleDelete = (id) => {
        let list = artistList.slice();
        list = list.filter((artist) =>
            artist.id !== id
        );
        setArtistList(list);
    }

    return (
        <div className="container" >
            <ArtistForm onClick={() => setShowForm(!showForm)} />
            {showForm && <AddArtistForm onSubmit={handleAddArtist} />}
            <ArtistList artists={artistList} onClick={handleDelete} />
        </div>
    )
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export default ArtistDirectory;