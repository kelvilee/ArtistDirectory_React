import React from 'react';
import { Formik, Form, Field } from 'formik';

const ArtistForm = (props) => {
    return (
        <div className="p-5">
            <h2 className="mb-3">Artist Directory</h2>
            <Formik
                initialValues={{
                    search: '',
                }}
            >
                <Form>
                    <div className="input-group">
                        <Field name='search' type='text' className="form-control mr-2" />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-primary" onClick={props.onClick}>Add Artist</button>
                        </span>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default ArtistForm;