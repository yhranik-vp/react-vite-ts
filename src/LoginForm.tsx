import { useState, SyntheticEvent } from 'react'
import {
  Flex,
  Title,
  Paper,
  TextInput,
  PasswordInput,
  Button,
} from '@mantine/core'

// import classes from './LoginForm.module.css'

type FormField = 'email' | 'password'

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  function updateFormData(value: string, field: FormField) {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  function onFormSubmit(e: SyntheticEvent) {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <Flex align="center" justify="center">
      <Paper shadow="sm" p="sm" maw="40rem" w="100%" bg="orange-1">
        <form onSubmit={onFormSubmit}>
          <Title order={2}>Login</Title>

          {JSON.stringify(formData)}

          <TextInput
            label="email"
            value={formData.email}
            onChange={(e) => updateFormData(e.target.value, 'email')}
            my="sm"
          />
          <PasswordInput
            label="password"
            value={formData.password}
            onChange={(e) => updateFormData(e.target.value, 'password')}
            my="sm"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </Flex>
  )
}

export default LoginForm
