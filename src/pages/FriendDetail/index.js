import React from 'react';
import {Container, ImageInput, FormGroup, NavBar, BottomHover} from '../../components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPopup, setLoading } from '../../modules';
import { icUserEdit, icClose } from '../../assets/images';
import { getFriend, deleteFriend } from '../../services'



const FriendDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();


  const [image, setImage] = React.useState(null);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [age, setAge] = React.useState('');

  const initialData = React.useCallback(() => {
    if(id) {
      dispatch(setLoading(true))
      getFriend(id).then(data => {
        setImage(data.photo)
        setFirstName(data.firstName)
        setLastName(data.lastName);
        setAge(data.age)
        dispatch(setLoading(false))
      }).catch(err => {
        dispatch(setLoading(false))
      })
    }
  }, [id, dispatch])

  const submitDelete = async () => {
    if(id) {
      try {
        await deleteFriend(id);
        dispatch(setPopup({
          title: "Your friend has been deleted :(, dont worry, i'ts ok!",
          show: true,
          onClickLeftButton: () => history.goBack()
        }))
      } catch(err) {
        dispatch(setPopup({
          title: err && err.message ? err.message : 'Something Wrong!',
          show: true
        }))
      }

    }
  }


  const handleDelete = () => {
    dispatch(setPopup({
      title: 'Oh no! are you sure want to delete your friend?',
      show: true,
      buttonLeftTitle: 'Yes, I do',
      buttonRightTitle: 'No, I cant',
      onClickLeftButton: submitDelete
    }))
  }

  React.useEffect(() => {
    initialData();
  }, [initialData])



  return (
    <div className="friend-detail">
      <NavBar title="Detail" />
      <div className="friend-detail__content">
        <Container size="lg">
          <ImageInput disabled image={image} className="friend-detail__image-input" />
          <FormGroup>
            <h3 className="friend-detail__user-name">{`${firstName} ${lastName}`}</h3>
            <h4 className="friend-detail__user-age">{`${age} Yo`}</h4>
          </FormGroup>
        </Container>
      </div>
      <BottomHover 
        onClickLeft={() => history.push(`/friend/${id}/edit`)}
        onClickRight={handleDelete}
        imageLeft={icUserEdit}
        imageRight={icClose} />
    </div>
  )
}


export default FriendDetail;