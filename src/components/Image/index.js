import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  src,
  alt,
  title,
  className,
  style,
  isBackgroundImage,
  resizeMode,
  children,
  imageProps,
  onClick
}) => {

  if(isBackgroundImage) {
    const bgStyle = {
      backgroundImage: `url(${src})`,
      backgroundSize: resizeMode,
      ...style
    }
    return (
      <React.Fragment>
        <div onClick={onClick} style={bgStyle} className={className} {...imageProps}>{children}</div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <img onClick={onClick} src={src} className={className} title={title} alt={alt} style={style} {...imageProps} />
    </React.Fragment>
  )
}

Image.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  title: PropTypes.string,
  isBackgroundImage: PropTypes.bool,
  resizeMode: PropTypes.string,
  imageProps: PropTypes.object,
  onClick: PropTypes.func
}

Image.defaultProps = {
  src: null,
  alt: '',
  title: '',
  isBackgroundImage: false,
  resizeMode: '',
  imageProps: {},
  onClick: () => {}
}

export default React.memo(Image);