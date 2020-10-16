import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import { icArrowLeft } from '../../assets/images';
import { useHistory } from 'react-router-dom';


const NavBar = ({ title, onClickLeft }) => {
  const history = useHistory();

  const handleClickLeft = () => {
    if(!onClickLeft) {
      return history.goBack();
    }

    return onClickLeft();
  }

  return (
    <div className="nav-bar">
      <div onClick={handleClickLeft} className="nav-bar__button nav-bar__button--left">
        <Image src={icArrowLeft} />
      </div>
      <span className="nav-bar__title">
        {title}
      </span>

    </div>
  )
}


NavBar.propTypes = {
  title: PropTypes.string,
  onClickLeft: PropTypes.func
}

NavBar.defaultProps = {
  title: '',
  onClickLeft: null
}




export default React.memo(NavBar);