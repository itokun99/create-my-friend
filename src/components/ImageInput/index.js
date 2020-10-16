/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import { imgUser } from '../../assets/images';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { setPopup } from '../../modules';


const ImageInput = ({ image, onChange, className, disabled }) => {
  const dispatch  = useDispatch();
  const handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setTimeout(() => {
        if (reader.result) {
          onChange({ imageFile: file, imageBase64: reader.result });
        }
      }, 100);
    };

    if (file) {
      if(file.size > 273452) {
        return dispatch(setPopup({
          title: 'Oh, no! Photo size cannot be more than 200kb :)',
          buttonLeftTitle: 'Okay!',
          show: true
        }))
      }
      reader.readAsDataURL(file);
    }
  };


  const previewImage =  image || imgUser;
  const imageClass = cx('image-input', className)

  return (
    <Image
      isBackgroundImage
      className={imageClass}
      src={previewImage}
      resizeMode="cover"
    >
      {!disabled && (
        <input
          onChange={handleImageChange}
          type="file"
          
          accept=".jpg,.png"
          className="image-input__input"
          disabled={disabled}
        />
      )}
    </Image>
  );
};

ImageInput.propTypes = {
  image: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};
ImageInput.defaultProps = {
  image: null,
  disabled: false,
  onChange: () => {}
};

export default React.memo(ImageInput);