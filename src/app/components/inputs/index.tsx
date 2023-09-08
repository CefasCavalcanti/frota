import { InputError } from './InputError'
import { TextInputField } from './InputField'
import InputRoot from './InputRoot'
import ToggleSwitch from './InputSwitch'

export const Input = {
  Field: TextInputField,
  Switch: ToggleSwitch,
  Root: InputRoot,
  error: InputError
}
