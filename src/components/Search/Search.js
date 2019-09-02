// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React from 'react';
import styles from './Search.module.css';

const Search = () => {
    return (
        <>
            <div className={styles.previewList}>
                <input type="text" className={`${styles.input} t-input`} placeholder="Название сериала"/>
                <div className={styles.buttonWrapper}>
                    <button className={`${styles.button} t-search-button`}>Найти</button>
                </div>
            </div>
        </>
    );
};

export default Search;