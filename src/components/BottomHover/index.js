import React from 'react';
import Image from '../Image';



const BottomHover = ({ imageLeft, onClickLeft, imageRight, onClickRight}) => {
  return (
    <div className="bottom-hover">
      <div onClick={onClickLeft} className="bottom-hover__column bottom-hover__column--left">
        <Image src={imageLeft} className="bottom-hover__image" />
      </div>
      <div onClick={onClickRight} className="bottom-hover__column bottom-hover__column--right">
        <Image src={imageRight} className="bottom-hover__image" />
      </div>
    </div>
  )
}

export default React.memo(BottomHover);