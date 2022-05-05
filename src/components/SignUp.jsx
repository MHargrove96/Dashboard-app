import React from 'react'

import InputWrapper from './InputWrapper'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp(props) {
  const {
    state, 
    setState
  }= props
  return (
    <InputWrapper>
    <TextField label="Username" type={'text'} required variant="standard" />
    <TextField label="Password" type={'password'} required variant="standard" />
    <Button  variant="contained" onClick={() => {setState(!state)}}>Login</Button>
    </InputWrapper>
  )
}

export default SignUp