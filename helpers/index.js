export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export const formatToMoney = (value) => {
  const formattedValue = value.toString().replace(',', '.')
  return Number(formattedValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}