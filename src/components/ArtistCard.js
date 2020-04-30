import React from 'react';

const ArtistCard = (props) => {
    return (
        <tr className="row align-items-center">
            <td className="border-0">
                <img src={props.image} alt="profileImg" />
            </td>
            <td className="border-0">
                <h5>{props.name}</h5>
                <p>{props.about}</p>
            </td>
            <td className="ml-auto border-0">
                <button type="button" onClick={props.onClick} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default ArtistCard;