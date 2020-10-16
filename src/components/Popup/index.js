import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button';
import cx from 'classnames';
import { clearPopup } from '../../modules';
import { useDispatch } from 'react-redux';


const Popup = ({ title, buttonLeftTitle, buttonRightTitle, onClickLeftButton, onClickRightButton, show }) => {
  const dispatch = useDispatch();

  const wrapperClass = cx('popup', {
    'popup--show': show,
  })

  const handleClickLeft = () => {
    if(!onClickLeftButton) {
      return dispatch(clearPopup())
    }

    dispatch(clearPopup())
    return onClickLeftButton();
  }

  const handleClickRight = () => {
    if(!onClickRightButton) {
      return dispatch(clearPopup())
    }

    dispatch(clearPopup())
    return onClickRightButton();
  }

  return (
    <div className={wrapperClass}>
      <div className="popup__main">
        <h3 className="popup__title">{title}</h3>
        <div className="popup__button-wrapper">
          {buttonLeftTitle && <Button onClick={handleClickLeft}>{buttonLeftTitle}</Button>}
          {buttonLeftTitle && buttonRightTitle ? <div style={{ width: 12, display: 'inline-block'}}></div> : null}
          {buttonRightTitle && <Button color="danger" onClick={handleClickRight}>{buttonRightTitle}</Button>}
        </div>
      </div>
    </div>
  )
}


Popup.propTypes = {
  title: PropTypes.string,
  buttonLeftTitle: PropTypes.string,
  buttonRightTitle: PropTypes.string,
  onClickLeftButton: PropTypes.any,
  onClickRightButton: PropTypes.any,
};
Popup.defaultProps = {
  title: '',
  buttonLeftTitle: 'Ok',
  buttonRightTitle: '',
  onClickLeftButton: null,
  onClickRightButton: null
};

export default React.memo(Popup);