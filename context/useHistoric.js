import React from 'react'

const HistoricContext = React.createContext({
  historic: [],
  setHistoric: () => { },
  clearHistoric: () => { },
  removeHistoricItem: () => { },
  addHistoricItem: () => { },
})

export const HistoricProvider = ({ children }) => {
  const [historic, setHistoric] = React.useState([]);

  const clearHistoric = () => {
    setHistoric([]);
  };

  const removeHistoricItem = (id) => {
    setHistoric((prev) => prev.filter((item) => item.id !== id));
  };

  const addHistoricItem = (item) => {
    setHistoric((prev) => [...prev, item]);
  };

  return (
    <HistoricContext.Provider
      value={{
        historic,
        setHistoric,
        clearHistoric,
        removeHistoricItem,
        addHistoricItem,
      }}
    >
      {children}
    </HistoricContext.Provider>
  );
}

const useHistoric = () => {
  const context = React.useContext(HistoricContext)
  if (!context) throw new Error('Erro ao usar contexto')

  return context
}

export default useHistoric
