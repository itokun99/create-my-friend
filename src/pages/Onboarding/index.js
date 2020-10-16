import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImageInput, Input, FormGroup, Button, Container } from '../../components';
import { useDispatch } from 'react-redux';
import { setPopup, setProfile } from '../../modules';
import { setStorage } from '../../services';

const Onboarding = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState('');
  
  const handleImageChange = ({ imageFile, imageBase64 }) => {
    setImage(imageBase64);
  }

  const handleNameChange = ({ target }) => {
    setName(target.value);
  }

  const handleSubmit = () => {
    if(!name) {
      return dispatch(setPopup({
        title: 'Name is required!',
        show: true
      }))
    }

    const payload = { name, image }
    setStorage('user_data', payload);
    dispatch(setProfile(payload))

    history.push('/dashboard');
  }

  return (
    <div className="onboarding">
        <div className="onboarding__content">
          <Container size="lg">
            <h3 className="onboarding__title">Set Your Personalize</h3>
              <ImageInput image={image} onChange={handleImageChange} className="onboarding__image-input" />
            <FormGroup>
              <Input placeholder="Your Name" onChange={handleNameChange}/>
            </FormGroup>
            <Button block onClick={handleSubmit}>Continue</Button>
          </Container>
        </div>
    </div>
  )
}

export default Onboarding;