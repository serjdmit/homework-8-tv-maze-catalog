// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, {Component} from 'react';
import { searchRequest } from '../../reducers/actions';
import { connect } from 'react-redux';
import styles from './Search.module.css';

import SearchPreview from '../ShowPreview';

class Search extends Component {
    componentDidMount() {
        const { searchRequest } = this.props;
        searchRequest();
    }
    render(){
        // const [series, setSeries] = useState('');
        const { shows, search, error } = this.props;
        this.shows = ['adasd'];
        if (search) return <p> Shows are searching... </p>;
        if (error) return <p> Some went wrong </p>;
        return (
            <>
                <div className={styles.previewList}>
                    <input type="text" className={`${styles.input} t-input`} placeholder="Название сериала" />
                    <div className={styles.buttonWrapper}>
                        <button className={`${styles.button} t-search-button`} >Найти</button>
                    </div>
                </div>
                <div className={`${styles.searchPanel} t-search-result`}>
                    {
                        shows.map(show => {
                            let image = '';
                            if (show.image !== null) image = show.image.medium
                            return <SearchPreview
                                key={show.id}
                                name={show.name}
                                id={show.id}
                                image={image}
                                summary={show.summary} />
                        })
                    }
                </div>
            </>
        );
    }
};

const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = {
    searchRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);