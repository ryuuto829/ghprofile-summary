import { createContext, useContext, useState } from 'react'
import Router from 'next/router'

const UserSearchContext = createContext()

/**
 * useUserSearch hook works with a search form. It exposes username input
 * to all pages and handle input change and form submit functions.
 */
export const AppWrapper = ({ children }) => {
  const [usernameInputText, setUsernameInputText] = useState('')

  const changeUserInputText = e => {
    setUsernameInputText(e.target.value)
  }

  const submitUsername = e => {
    e.preventDefault()

    Router.push({
      pathname: '/user',
      query: { id: usernameInputText },
    })

    setUsernameInputText(usernameInputText)
  }

  return (
    <UserSearchContext.Provider
      value={{
        usernameInputText,
        changeUserInputText,
        submitUsername,
      }}
    >
      {children}
    </UserSearchContext.Provider>
  )
}

export const useUserSearch = () => useContext(UserSearchContext)
