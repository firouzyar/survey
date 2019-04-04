import React,{Component,Fragment} from 'react';
import Radio from './UI/Radio';


class Name extends Component{
    //check if input has value or not to disable button
    componentDidMount (){
        const inputValue=document.querySelector('input[type="radio"]:checked');
        if(inputValue && inputValue !== ''){
            document.querySelector(".next").removeAttribute("disabled");
        }
        else{
            document.querySelector(".next").setAttribute('disabled','disabled');
        }
    }
    render(){
        const genderType = ['male','female','other'];

        return(
            <Fragment>
                <div className='title'>
                    <h1>Chose Your Gender</h1>
                </div>
                <div className="formWrapper">
                    <Radio
                        inputVale={this.props.inputValue}
                        type = {genderType}
                        name='gender'
                        inputHandler={this.props.inputHandler}

                    />
                </div>
            </Fragment>
        )
    }

}
export default Name;