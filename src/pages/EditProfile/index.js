import React from 'react';
import { ImageInput, Input, FormGroup, Button, Container, NavBar } from '../../components';
import { useDispatch } from 'react-redux';
import { setPopup, setProfile } from '../../modules';
import { setStorage, getStorage } from '../../services';

const EditProfile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState('');

  
  const handleImageChange = ({ imageBase64 }) => {
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


    dispatch(setPopup({
      title: 'Profile Saved :)',
      show: true
    }))
  }

  React.useEffect(() => {
    const user_data = getStorage('user_data');
    if(user_data) {
      setImage(user_data.image)
      setName(user_data.name);
    }
  }, [])

  return (
    <div className="onboarding">
        <NavBar title="Profile" />
        <div className="onboarding__content">
          <Container size="lg">
            <ImageInput image={image} onChange={handleImageChange} className="onboarding__image-input" />
            <FormGroup>
              <Input placeholder="Your Name" onChange={handleNameChange} value={name}/>
            </FormGroup>
            <Button block onClick={handleSubmit}>Continue</Button>
          </Container>
        </div>
    </div>
  )
}

export default EditProfile;