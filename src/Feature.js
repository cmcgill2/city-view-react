import React from 'react';

const Feature = ( props ) => {
    return (
        <div className="col-1-of-4">
            <div className="feature-box">
                    <i className="feature-box__icon icon-basic-world"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">{props.city}</h3>
                    <p className="feature-box__text">
                                {props.lorem}
                    </p>
            </div>
        </div>
    );
}

export default Feature;