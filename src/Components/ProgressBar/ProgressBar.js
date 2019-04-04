import React from 'react';
import Filter from './FilterBar';

const ProgressBar = (props) =>{
    return(
        <div className='progressBar'>
            <span>{props.percentage}%</span>
            <Filter percentage={props.percentage}/>
        </div>
    )
}
export default ProgressBar;