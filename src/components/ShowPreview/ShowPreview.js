// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React from 'react';
import { Link } from 'react-router-dom';
import style from './ShowPreview.module.css';

const ShowPreview = (props) => {
    return (
        <>
            <div className={`t-preview ${style.container}`}>
                <div className={style.containerTop}>
                    <Link className="t-link" to={`/shows/${props.id}`}>{props.name}</Link>
                    <img src={props.image} alt={props.name}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: props.summary}} />
            </div>
        </>
    );
};

export default ShowPreview