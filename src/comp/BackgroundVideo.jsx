import React from 'react';
import PropTypes from 'prop-types';

const BackgroundVideo = ({ video, children, overlay }) => (
    <div
        style={{
            position: 'relative',
            width: '100%',
            height: '100%',
        }}
    >
        <video
            src={video}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
        />
        {overlay && (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            />
        )}
        {children}
    </div>
);

BackgroundVideo.propTypes = {
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    overlay: PropTypes.bool,
};

BackgroundVideo.defaultProps = {
    overlay: false,
};

export default BackgroundVideo;