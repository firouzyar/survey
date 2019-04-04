import React,{PureComponent} from 'react';
import Name from "./Name";
import Family from "./Family";
import Gender from "./Gender";
import Country from "./Country";
import Preview from "./Preview";
import ProgressBar from './ProgressBar/ProgressBar';


class Home extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            step:1,
            name:'',
            family:'',
            gender:'',
            country:'',
            percentage:0
        }
    }
    // get data from localStorage after closing browser
    componentWillMount(){
       let localStorageData = JSON.parse(localStorage.getItem('myData'));
       this.setState(localStorageData);
    }


    //check input value and set and remove disabled attr
    inputHandler = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        if (value.length > 0 && value !== '') {
            document.querySelector(".next").removeAttribute("disabled");
        }
        else{
            document.querySelector(".next").setAttribute('disabled','disabled');
        }
    };
    // go to next step
    nextStep = (e) => {
        e.preventDefault();
        const {step} = this.state;
        this.setState({
            percentage:step*25,
            step: step + 1,
        },() =>{
            localStorage.setItem('myData', JSON.stringify(this.state));
        });

    };
    //back to prev step
    prevStep = (e) => {
        e.preventDefault();
        const {percentage,step} = this.state;
        this.setState({
            step: step - 1,
            percentage: percentage - 25

        },() =>{
            localStorage.setItem('myData', JSON.stringify(this.state));
        })

    }
    render(){
        const {step,name,family,gender,country} = this.state;
        let buttonHolder = ['buttonWrapper','col','s12','m6','offset-m3'];
        (step===1) ? buttonHolder.push('firstPageButton') : buttonHolder.push('');
        return(
            <div className="container">
                <div className="row">
                    <div className="col m6 s12 offset-m3">
                        <ProgressBar percentage={this.state.percentage}/>
                    </div>
                    <div className="col s12 m6 offset-m3 ">
                        {step === 1 && <Name inputValue={name} inputHandler={this.inputHandler}/>}
                        {step === 2 && <Family inputValue={family} inputHandler={this.inputHandler}/>}
                        {step === 3 && <Gender inputValue={gender} inputHandler={this.inputHandler}/>}
                        {step === 4 && <Country selectValue={country} inputHandler={this.inputHandler}/>}
                        {step === 5 && <Preview previewData = {this.state} inputHandler={this.inputHandler}/>}
                    </div>
                    <div className={buttonHolder.join(' ')}>
                        {step > 1 && <a className="waves-effect waves-light btn-small prev" href="#void" onClick={this.prevStep}><i className="material-icons left">navigate_before</i>prev</a>}
                        {step < 5 && <a className="waves-effect waves-light btn-small next" href="#void" disabled onClick={this.nextStep}><i className="material-icons right">navigate_next</i>next</a>}
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;