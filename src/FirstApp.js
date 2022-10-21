import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ col = 'Yellow', spe }) => {
    
    return (
        <>  
            <h1> { col } </h1>
            <p> { spe } </p>
        </>
    );
};

FirstApp.propTypes = {
    col : PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    spe: 'Kaede',
};

export default FirstApp;
