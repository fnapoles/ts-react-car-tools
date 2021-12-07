import classes from './VinDecoder.module.scss';
import { useState, useCallback, FunctionComponent } from 'react';
import { VinDetails } from './VinDetails';
import { VinSearch } from './VinSearch';
import { Variable } from './VinSearch';
import { Title } from '../title/Title';

export const VinDecoder: FunctionComponent = (): JSX.Element => {
  const [vinInfo, setVinInfo] = useState<Variable[]>();

  const getDetailsHandler = useCallback((variables: Variable[]): void => {
    setVinInfo(variables);
  }, []);

  return (
    <div className={classes.vinDecoder}>
      <Title title="VIN Decoder" />
      <VinSearch getDetails={getDetailsHandler} />
      {vinInfo !== undefined && <VinDetails variables={vinInfo} />}
    </div>
  );
};
