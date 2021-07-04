// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { Component } from 'react';
import { searchSuccess } from '../../reducers/actions';
import { connect } from 'react-redux';

class ShowPage extends Component {
    componentDidMount(){
        const { searchSuccess } = this.props;
        searchSuccess();
    }
    render(){
        const { shows } = this.props;

        if (shows) return  <p>blablabla</p>
        console.log('asdasda');
        return (
            <>
                <p>asdasd</p>
            </>
        );
    }
};

const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = {
    searchSuccess
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);