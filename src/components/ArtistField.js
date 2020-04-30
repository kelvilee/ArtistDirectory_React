import React from 'react';
import { useField } from 'formik';

const ArtistField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input
                className={`form-control mt-2 ${(meta.touched && meta.error) && "is-invalid"}`}
                {...field}
                {...props}
            />
            {(meta.touched && meta.error) && <div className="text-danger">{meta.error}</div>}
        </>
    );
}

export default ArtistField;