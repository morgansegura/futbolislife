import { css } from 'styled-components'
import { normalize } from 'styles/config/normalize'
import { reset } from 'styles/config/reset'
import { root } from 'styles/config/root'
import { base } from 'styles/config/base'
import { nprogress } from 'styles/vendors/nprogress'

export const GlobalStyle = css`
  ${normalize};
  ${base};
  ${nprogress}
  ${root}
`
