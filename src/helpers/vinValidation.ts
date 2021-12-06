import { Variable } from '../components/VinDecoder/VinSearch';

export const validateVin = (vin: string): boolean => {
  return vin.length === 17 ? true : false;
};

export const isDataPresent = (variables: Variable[]): boolean => {
  for (let i = 0; i < variables.length; i++) {
    if (variables[i].Value !== null) {
      return true;
    }
  }
  return false;
};
