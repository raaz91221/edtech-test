import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';


function Card({ backgroundColor, height, width, ...props }) {
    return (
        <Fragment>
            <Box height={height} width={width} style={{backgroundColor:backgroundColor,borderRadius:'14px'}}>
                {props.children}
            </Box>
        </Fragment>
    )
}
Card.propTypes = {
   
    height: PropTypes.string,
    width: PropTypes.string,
    backgroundColor: PropTypes.string,
   
};
Card.defaultProps = {
    width: 'auto',
    backgroundColor: '#F5F5F7'
}

export default Card;