const formatDate = (date) => {
  const newDate = new Date(date);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  
  return newDate.toLocaleDateString('id-ID', options);
};

export default formatDate;