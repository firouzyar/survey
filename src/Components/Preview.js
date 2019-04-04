import React,{Component,Fragment} from 'react';


class Preview extends Component {
    render(){
        const {name,family,gender,country}= this.props.previewData;
        return(
            <Fragment>
                <div className='card-panel'>
                    <ul>
                        <li><span>Name: </span>{name}</li>
                        <li><span>Family: </span>{family}</li>
                        <li><span>Country: </span>{country}</li>
                        <li><span>Gender: </span>{gender}</li>
                    </ul>

                </div>
            </Fragment>

        )
    }

}

export default Preview;