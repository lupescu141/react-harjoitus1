import {MediaItem} from '../types/DBTypes';

const SingleView = (props: {
  item: MediaItem;
  setSelectedItem: (item: MediaItem | undefined) => void;
}) => {
  const {item, setSelectedItem} = props;
  return (
    // TODO: Add JSX for displaying a mediafile here
    // - use e.g. a <dialog> element for creating a modal
    // - use item prop to render the media item details
    // - use img tag for displaying images
    // - use video tag for displaying videos
    <>
      <dialog open>
        {item && (
          <>
            <button
              onClick={() => {
                setSelectedItem(undefined);
              }}
            >
              Close
            </button>
            <h1>{item.media_type}</h1>
            {item.media_type.includes('image') ? (
              <img src={item.filename} alt={item.title} />
            ) : (
              <video src={item.filename} controls />
            )}
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
          </>
        )}
      </dialog>
    </>
  );
};

export default SingleView;
