import loading from './loading/reducer';
import popup from './popup/reducer';
import profile from './profile/reducer';
import friend from './friend/reducer';


/**
 * all reducer will exported here!
 */
export {
  popup,
  loading,
  profile,
  friend
}


export * from './loading/action';
export * from './popup/action';
export * from './profile/action';
export * from './friend/action';