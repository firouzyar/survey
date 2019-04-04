import React,{Component,Fragment} from 'react';
import DropDown from './UI/DropDown';


class Country extends Component{
    //check if input has value or not to disable button
    componentDidMount (){
        const inputValue=document.querySelector('option:checked').value;
        if(inputValue && inputValue !== ''){
            document.querySelector(".next").removeAttribute("disabled");
        }
        else{
            document.querySelector(".next").setAttribute('disabled','disabled');
        }
    }
    render(){
        const countries =['Italy','Iran','Spain','Usa','China','France','German','Brazil','Argentina'];
        return(
            <Fragment >
                <div className='title'>
                    <h1>Chose Your Country</h1>
                </div>
                <div className="formWrapper">
                    <DropDown
                        name='country'
                        inputHandler={this.props.inputHandler}
                        countries={countries}
                        selectValue = {this.props.selectValue}
                    />
                </div>
            </Fragment>
        )
    }

}
export default Country;

