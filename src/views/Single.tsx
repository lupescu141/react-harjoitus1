import {NavigateFunction, useNavigate} from 'react-router';
import {useLocation} from 'react-router';
import {MediaItem} from '../types/DBTypes';

const Single = () => {
  const navigate: NavigateFunction = useNavigate();
  const {state} = useLocation();
  const item: MediaItem = state.item;
  return (
    <>
      <h1>{item.media_type}</h1>
      {item.media_type.includes('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
