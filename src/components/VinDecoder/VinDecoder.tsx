import classes from './VinDecoder.module.scss';
import { useState, useCallback, FunctionComponent } from 'react';
import { VinDetails } from './VinDetails';
import { VinSearch } from './VinSearch';
import { Variable } from './VinSearch';

export const VinDecoder: FunctionComponent = (): JSX.Element => {
  const [vinInfo, setVinInfo] = useState<Variable[]>();

  const getDetailsHandler = useCallback((variables: Variable[]): void => {
    setVinInfo(variables);
  }, []);

  return (
    <div className={classes.vinDecoder}>
      <div className={classes.title}>VIN Decoder</div>
      <VinSearch getDetails={getDetailsHandler} />
      {vinInfo !== undefined && <VinDetails variables={vinInfo} />}
    </div>
  );
};
