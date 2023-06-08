import { format } from 'date-fns';

export function formatDate(dateString: string) {
  return format(new Date(dateString), 'MMMM dd, yyyy');
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
