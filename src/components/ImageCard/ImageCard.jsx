import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div  onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.card}/>
    </div>
  );
};

export default ImageCard;
