import React, {useState} from 'react';
import './bootstrap.min.css';
import Button from './Button';
import Input from './Input';
import Validation from './Validation';
import Check from './Check';
import helpers from './helpers';

const Form = () => {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [address, setaddress] = useState(null);
  const [phone, setphone] = useState(null);
  const [email, setemail] = useState(null);
  const [isChecked, setisChecked] = useState(true);
  const [firstNameValid, setfirstNameValid] = useState(false);
  const [lastNameValid, setlastNameValid] = useState(false);
  const [addressValid, setaddressValid] = useState(false);
  const [phoneValid, setphoneValid] = useState(false);
  const [phoneValid1, setphoneValid1] = useState(false);
  const [emailValid, setemailValid] = useState(false);
  const [emailValid1, setemailValid1] = useState(false);
  const [submitDisabled, setsubmitDisabled] = useState(true);

  const handleFirstName = (e) => {
    let nameValid = helpers.requestedValidation(e.target.value);
    let submitValue = nameValid && lastNameValid && addressValid && phoneValid && phoneValid1 && emailValid && emailValid1;

    setfirstName(e.target.value);
    setfirstNameValid(nameValid);
    setsubmitDisabled(!submitValue);
  }
  const handleLastName = (e) => {
    let nameValid = helpers.requestedValidation(e.target.value);
    let submitValue = nameValid && firstNameValid && addressValid && phoneValid && phoneValid1 && emailValid && emailValid1;

    setlastName(e.target.value);
    setlastNameValid(nameValid);
    setsubmitDisabled(!submitValue);
  }
  const handleAddress = (e) => {
    let avalid = helpers.requestedValidation(e.target.value);
    let submitValue = avalid && firstNameValid && lastNameValid && phoneValid && phoneValid1 && emailValid && emailValid1;

    setaddress(e.target.value);
    setaddressValid(avalid);
    setsubmitDisabled(!submitValue);
  }
  const handlePhone = (e) => {
    let pValid = helpers.requestedValidation(e.target.value);
    let pValid1 = helpers.phoneValidation(e.target.value);
    let submitValue = pValid && pValid1 && addressValid && firstNameValid && lastNameValid && emailValid && emailValid1;

    setphone(e.target.value);
    setphoneValid(pValid);
    setphoneValid1(pValid1);
    setsubmitDisabled(!submitValue)
  }
  const handleEmail = (e) => {
    let eValid = helpers.requestedValidation(e.target.value);
    let eValid1 = helpers.emailValidation(e.target.value);
    let submitValue = eValid && eValid1 && phoneValid && phoneValid1 && addressValid && firstNameValid && lastNameValid;

    setemailValid(eValid);
    setemailValid1(eValid1)
    setemail(e.target.value);
    setsubmitDisabled(!submitValue)
  }
  const handleCheckChange = (e) => {
    setisChecked(!isChecked);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //Sending data to server
    helpers.sendData(firstName, lastName, address, phone, email, isChecked);
    console.log("Data sent to localhost!");
  }

  return(
    <div className="container-fluid text-center border border-light p-5 mb-2 bg-light text-dark">
      <p className="h2 mb-2">Simple form </p>
      <p>Enter requested data into the form: </p>
      <form className="form-group text-center p-3 col-6 offset-3" onSubmit={handleSubmit}>
        <Input type={'text'} id={'firstName'} className={'form-control mb-2'} placeholder={'First name: '} onChange={handleFirstName}/>
        <Validation id={'firstNameValidation'} className={'form-text text-muted mb-3'} hidden={firstNameValid} value={'Required'} />
        
        <Input type={'text'} id={'lastName'} className={'form-control mb-2'} placeholder={'Last name:'} onChange={handleLastName}/>
        <Validation id={'lastNameValidation'} className={'form-text text-muted mb-3'} hidden={lastNameValid} value={'Required'} />
        
        <Input type={'text'} id={'address'} className={'form-control mb-2'} placeholder={'Address:'} onChange={handleAddress}/>
        <Validation id={'addressValidation'} className={'form-text text-muted mb-3'} hidden={addressValid} value={'Required'} />
        
        <Input type={'text'} id={'phone'} className={'form-control mb-2'} placeholder={'Phone:'} onChange={handlePhone}/>
        <Validation id={'phoneValidation'} className={'form-text text-muted mb-1'} hidden={phoneValid} value={'Required'} />
        <Validation id={'phoneValidation1'} className={'form-text text-muted mb-3'} hidden={phoneValid1} value={'Bad format'} />
        
        <Input type={'text'} id={'email'} className={'form-control mb-2'} placeholder={'E-mail:'} onChange={handleEmail}/>
        <Validation id={'emailValidation'} className={'form-text text-muted mb-1'} hidden={emailValid} value={'Required'} />
        <Validation id={'emailValidation1'} className={'form-text text-muted mb-4'} hidden={emailValid1} value={'Bad format'} />
        
        <div className="custom-control custom-checkbox">
          <Check type={'checkbox'} id={'check'} className={'custom-control-input'} checked={isChecked} onChange={handleCheckChange}/>
          <label className="custom-control-label" htmlFor="check">Checkbox </label>
        </div>
        <br></br>
        <Button value={"Save"} className={"btn btn-info btn-block my-4"} disabled={submitDisabled}/>
      </form>
    </div>
  )
}

export default Form;
