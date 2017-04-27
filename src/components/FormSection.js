import React from 'react';

const styles = {
  formSection: {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  formInput: {
    padding: 10,
    outline: 'none',
    marginTop: 10,
    marginBottom: 10,
  },
};

const FormSection = props => (
  <div style={styles.formSection}>
    <label>{props.label}</label>
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.handleChange.bind(this)}
      style={styles.formInput}
    />
  </div>
);

export default FormSection;
