export const getCurrentDate = (fecha:Date) => {
  const dateObj = new Date(fecha);

  const opciones: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  return dateObj.toLocaleDateString('en-US', opciones);
}
