import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = ({ image, children, overlay }) => (
    <div
        style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor:'#e3e3db'
        }}
    >
        {/*<img*/}
        {/*    src={image}*/}
        {/*    alt=""*/}
        {/*    style={{*/}
        {/*        position: 'absolute',*/}
        {/*        width: '100%',*/}
        {/*        height: '100%',*/}
        {/*        objectFit: 'cover',*/}
        {/*    }}*/}
        {/*/>*/}
        {overlay && (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                }}
            />
        )}
        {children}
    </div>
);

BackgroundImage.propTypes = {
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    overlay: PropTypes.bool,
};

BackgroundImage.defaultProps = {
    overlay: false,
};

export default BackgroundImage;