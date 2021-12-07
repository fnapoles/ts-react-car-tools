import { useState, useEffect } from 'react';
import classes from './VinSearch.module.scss';
import { getData } from '../../actions/getData';
import { vinUrl, vinOptions } from '../../data/variables';
import { validateVin, isDataPresent } from '../../helpers/vinValidation';

export interface Variable {
  Value: string;
  Variable: string;
  VariableId: number;
}

interface VinSearchProps {
  getDetails: Function;
}

export const VinSearch = ({ getDetails }: VinSearchProps): JSX.Element => {
  const [enteredText, setEnteredText] = useState('');
  const [isVinValid, setIsVinValid] = useState(true);
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const vinLength: number = 17;

  const onSearchClick = async () => {
    setIsPending(true);
    setIsVinValid(true);
    if (validateVin(enteredText)) {
      const response = await getData(`${vinUrl}${enteredText}${vinOptions}`);
      if (isDataPresent(response)) {
        getDetails(response);
      } else {
        setIsVinValid(false);
      }
    }
    setIsPending(false);
  };

  useEffect(() => {
    if (!isFirstRun) {
      enteredText.length === 17 ? setIsVinValid(true) : setIsVinValid(false);
      return;
    } else {
      setIsFirstRun(false);
    }
  }, [enteredText]);

  return (
    <div className={classes.search}>
      <div>
        <input
          id="vinSearchInput"
          type="text"
          className={classes.vinSearchInput}
          placeholder="VIN"
          minLength={vinLength}
          maxLength={vinLength}
          value={enteredText}
          onChange={(e) => setEnteredText(e.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          className={classes.vinSearchButton}
          onClick={onSearchClick}
          disabled={!isVinValid}
        >
          {isPending ? 'Pending...' : 'Search'}
        </button>
        {!isVinValid && (
          <div className={classes.invalid}>Invalid VIN number</div>
        )}
      </div>
    </div>
  );
};
