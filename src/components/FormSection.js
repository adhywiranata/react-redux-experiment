import React from 'react';

const styles = {
  formSection: {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
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
    />
  </div>
);

export default FormSection;
