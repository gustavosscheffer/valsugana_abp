
import { createElement } from 'react'
import InputPassword from './fields/inputPassword'
import InputText from './fields/inputText'

const fields = new Map()
fields.set('text', InputText)
fields.set('password', InputPassword)
const Field = ({ type, ...props }) => createElement(fields.get(type), props)

export default Field;