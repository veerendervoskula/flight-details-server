exports.dateAndTimeConverter = (time, dateTime) => {
  const hours = time.slice(0, 1);
  const minutes = time.slice(2);

  // eslint-disable-next-line no-param-reassign
  dateTime = new Date(dateTime);
  dateTime.setHours(hours, minutes);
};
