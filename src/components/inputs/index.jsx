
import { createElement } from 'react'
import InputCep from './fields/inputCep'
import InputCpf from './fields/inputCpf'
import InputDate from './fields/inputDate'
import InputNumber from './fields/inputNumber'
import InputPassword from './fields/inputPassword'
import InputSelect from './fields/inputSelect'
import InputTelefone from './fields/inputTelefone'
import InputText from './fields/inputText'

const fields = new Map()
fields.set('text', InputText)
fields.set('password', InputPassword)
fields.set('number', InputNumber)
fields.set('cpf', InputCpf)
fields.set('cep', InputCep)
fields.set('telefone', InputTelefone)
fields.set('date', InputDate)
fields.set('select', InputSelect)
const Field = ({ type, ...props }) => createElement(fields.get(type), props)

export default Field;