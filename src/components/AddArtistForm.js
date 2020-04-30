import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import ArtistField from './ArtistField';

const AddArtistForm = (props) => {
    return (
        <Formik
            initialValues={{
                name: '',
                about: '',
                image: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, 'Name must be less than 15 characters')
                    .required('Required'),
                about: Yup.string()
                    .max(15, 'About must be less than 15 characters'),
                image: Yup.string()
                    .url('Invalid URL')
                    .required('Required'),
            })}
            onSubmit={props.onSubmit}
        >
            <Form>
                <div className="form-group mx-auto" style={{ width: '400px' }}>
                    <ArtistField
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                    <ArtistField
                        name="about"
                        type="text"
                        placeholder="About"
                    />
                    <ArtistField
                        name="image"
                        type="url"
                        placeholder="Image URL"
                    />
                    <button type="submit" className="btn btn-primary btn-block mt-2">Add</button>
                </div>
            </Form>
        </Formik>
    );
}

export default AddArtistForm;