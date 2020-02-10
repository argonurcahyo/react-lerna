import moment from 'moment';

export const formatDateOnly = (value: string) => {
  return moment(value).format('DD MMM YYYY');
};
