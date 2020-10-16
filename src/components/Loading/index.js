import React from 'react';
import Image from '../Image';
import { imgLoading } from '../../assets/images';
import cx from 'classnames';


const Loading = ({ show }) => {

  const wrapperClass = cx('loading', {
    [`loading--show`]: show
  })
  
  return (
    <div  className={wrapperClass}>
      <Image src={imgLoading} alt="loading"/>
    </div>
  )
}


export default React.memo(Loading);