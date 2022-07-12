import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  width: 450px;
  margin: 0 auto;
`;

const Label = styled.label``;
Label.Text = styled.span`
text-align: center;
margin-bottom: 0.5em;
color: #7b7b7b;
display: flex;
flex-direction: column;
font-weight: bold;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 25px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  
  padding: 16px 16px;
  margin-bottom: 15px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }
  `}
`;

function FormField({ 
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);

  return(
    <FormFieldWrapper>
      <Label
          htmlFor={fieldId}
      >
      <Label.Text>
        {label}
      </Label.Text>

      <Input
      as={tag}
      id={fieldId}
      type={type}
      value={value}
      name={name}
      hasValue={hasValue}
      onChange={onChange}
      />
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;