import React, { createContext } from 'react'

export const DataContext=createContext()
const Usercontext = ({children}) => {
  
  const name="Ram"
  return (
    <div>
      <DataContext.Provider value={name}>
      {children}
      </DataContext.Provider>
     </div>
  )
}

export default Usercontext