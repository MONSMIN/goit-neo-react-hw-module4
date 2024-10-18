import styles from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => (
  <div className={styles.button}>
    <button className={styles.loadbut} onClick={onClick}>Load more</button>
  </div>
);

export default LoadMoreBtn;
