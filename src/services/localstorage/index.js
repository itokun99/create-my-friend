export const setStorage = (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key,jsonData);

    return data;
  } catch (e) {
    console.log('storage error:', e)
    throw e;
  }
}

export const getStorage = key => {
  try {
    const data = localStorage.getItem(key);
    const parseData = JSON.parse(data);
    return parseData;
  } catch (e) {
    console.log('storage error:', e)
    throw e;
  }
}


export const deleteStorage = key => {
  try {
    localStorage.removeItem(key);
    return key;
  } catch (e) {
    console.log('storage error:', e)
    throw e;
  }
}

export const clearStorage = () => localStorage.clear();