import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Button } from '../../components'
import { imgHome } from '../../assets/images';


const Home = () => {
  const history = useHistory();
  return (
    <div className="homepage">
      <div className="homepage__content">
        <h2 className="homepage__title">Create Your Virtual Friend</h2>
        <Image src={imgHome} className="homepage__image" />
        <Button block onClick={() => history.push('/onboarding')}>Get Started</Button>
      </div>
    </div>
  )
}


export default Home;