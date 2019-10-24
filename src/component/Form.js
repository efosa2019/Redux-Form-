import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Countries from './Countries'
import './Form.css';

const validate = values => {
    const errors = {}
    const { personalNum, phoneNum, email } = values; 
    const personalNumL = personalNum && personalNum.length;
    const phoneNumL = phoneNum && phoneNum.length;
    const isValidNumber = personalNum && isNaN(Number(personalNum))
    const isValidPersonalNumber = personalNumL !== 12;
    const startWithValidYear = personalNum && personalNum.substring(0, 2) !== '19';
    const isValidPhoneNum = phoneNumL !==11  && phoneNumL !==12;
    const startWithValidPhoneNum = phoneNum && phoneNum.substring(0, 3) !== '+46';
   
    console.log(personalNum, personalNumL, phoneNum,  email, isValidNumber, startWithValidPhoneNum, isValidPersonalNumber,startWithValidYear,isValidPhoneNum,phoneNumL);
      if (!personalNum) {
        errors.personalNum = 'Required'
      } else if (isValidNumber || isValidPersonalNumber || startWithValidYear) {
        errors.personalNum = 'Invalid personal number'
      }
      if(!phoneNum) {
        errors.phoneNum = 'Required';
      }else if (isValidPhoneNum || startWithValidPhoneNum) {
        errors.phoneNum = 'Invalid phone number must, be 11 or 12 numbers'
      }
      if (!email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address'
      }
    
    return errors
  }

const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let FormCode = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group"> 
      <Field name="personalNum" component={renderField} label="Personal Number" placeholder={"YYYYMMDDXXXX"} />
      <Field name="phoneNum" component={renderField} label="Phone Number" placeholder={"+46"}  />
      <Field name="email" component={renderField} label="Email" placeholder={"aol@.se"}  />

      <div>
      <label>Choose Country</label>
         <Countries />
         </div>
        <button type="submit" disabled={pristine || submitting} className="btn">Submit</button>
        <button type="button" disabled={pristine || submitting} className="btn" onClick={reset}>
        Reset Info
        </button>
      </div>
    </form>
  )
}
FormCode = reduxForm({
  form: 'contacts',
  validate,
})(FormCode);

export default FormCode;
