import { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();   
    onSubmit(searchTerm);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.input}
          />
          <button type="submit" className={styles.iconButton}>
            <BiSearch className={styles.icon} />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
