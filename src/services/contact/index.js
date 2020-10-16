import { store, setFriend } from '../../modules';

// baseUrl
const baseUrl = 'https://simple-contact-crud.herokuapp.com';

const apiUrl = {
  contact: `${baseUrl}/contact`
}

const headers ={
  'Content-Type': 'application/json'
};


/**
 * get contact data from api
 * @param {*} id is optional
 */
export const getFriend = async (id = '') => {
  try {
    const response = await fetch(`${apiUrl.contact}${id && `/${id}`}`);
    const result = await response.json();

    const { data } = result;

    if(!id) {
      store.dispatch(setFriend(data)) 
    }
    return data;
  } catch (err) {
    throw err;
  }
}


/**
 * create contact data from api
 * @param {*} id is optional
 */
export const createFriend = async (payload = {}) => {
  try {
    const response = await fetch(`${apiUrl.contact}`, {
      method: 'post',
      body: JSON.stringify(payload),
      headers
    });
    const result = await response.json();

    if(response && response.status !== 201) {
      throw result;
    }

    return result;
  } catch (err) {
    throw err;
  }
}


/**
 * update contact data from api
 * @param {*} id is optional
 */
export const updateFriend = async (id = '', payload = {}) => {
  try {
    const response = await fetch(`${apiUrl.contact}${id && `/${id}`}`, {
      method: 'put',
      body: JSON.stringify(payload),
      headers
    });
    const result = await response.json();

    if(response && response.status === 201) {
      throw result;
    }

    return result;
  } catch (err) {
    throw err;
  }
}



/**
 * delete contact data from api
 * @param {*} id is optional
 */
export const deleteFriend = async (id = '') => {
  try {
    const response = await fetch(`${apiUrl.contact}${id && `/${id}`}`, {
      method: 'delete',
    });

    const result = await response.json();

    console.log(result, response);


    if(response && response.status !== 200) {
      throw result;
    }

    return result;
  } catch (err) {
    throw err;
  }
}