import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Countries from './Countries';
import './Form.css';

const validate = (values) => {
  const errors = {};
  if (!values.personalNum) {
    errors.personalNum = 'Required';
  } else if (
    !/^[1-2][0|9][0-9]{2}[0-1][0-9][0-3][0-9][-][0-9]{4}$/i.test(
      values.personalNum
    )
  ) {
    errors.personalNum = 'Must in this form 19000000-000';
  }
  if (!values.phoneNum) {
    errors.phoneNum = 'Required';
  } else if (!/^(0|[0-9][0-9]{9})$/i.test(values.phoneNum)) {
    errors.phoneNum = 'Invalid phone number';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let FormCode = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="personalNum"
          component={renderField}
          label="Personal Number"
        />
        <Field name="phoneNum" component={renderField} label="Phone Number" />
        <Field name="email" component={renderField} label="Email" />

        <div>
          <label>Choose Country</label>
          <Countries />
        </div>
        <button type="submit" disabled={pristine || submitting} className="btn">
          Submit
        </button>
        <button
          type="button"
          disabled={pristine || submitting}
          className="btn"
          onClick={reset}
        >
          Reset Info
        </button>
      </div>
    </form>
  );
};
FormCode = reduxForm({
  form: 'contacts',
  validate,
})(FormCode);

export default FormCode;
