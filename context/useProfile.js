import React from 'react'

const ProfileContext = React.createContext({
  profile: {},
  setProfile: () => {},
})

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = React.useState({})

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

const useProfile = () => {
  const context = React.useContext(ProfileContext)
  if (!context) throw new Error('Erro ao usar contexto de perfil')

  return context
}

export default useProfile
