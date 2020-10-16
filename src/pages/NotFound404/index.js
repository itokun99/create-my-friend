import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Button } from '../../components'
import { img404 } from '../../assets/images';


const NotFound404 = () => {
  const history = useHistory();
  return (
    <div className="not-found-404">
      <div className="not-found-404__content">
        <Image src={img404} className="not-found-404__image" />
        <Button block onClick={() => history.push('/')}>Back To Home</Button>
      </div>
    </div>
  )
}


export default NotFound404;