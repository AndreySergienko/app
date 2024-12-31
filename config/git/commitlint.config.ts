import type { UserConfig } from '@commitlint/types'
import prompt from './prompt'
import rules from './rules'

export default <UserConfig>{
  rules,
  prompt
}
