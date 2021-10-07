import React from 'react'
import {
  MeQuery,
  SigninMutation,
  SignupMutation,
} from 'src/modules/gql/generated'

export type ContextValue = {
  user: MeQuery['me']

  onAuthSuccess: (
    data: SignupMutation['signup'] | SigninMutation['signin']
    //| CreatePostMutation['createPost']
  ) => void

  hello: string
}

export const Context = React.createContext<ContextValue | null>(null)
