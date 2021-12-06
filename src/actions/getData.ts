import axios from 'axios';
import { Variable } from '../components/VinDecoder/VinSearch';
import { VariableList } from '../data/variables';

export const getData = async (url: string): Promise<Variable[]> => {
  const response = await axios.get(url);
  const variables: Variable[] = response.data.Results.filter(
    (variable: Variable) => VariableList.includes(variable.Variable)
  );
  return variables;
};
