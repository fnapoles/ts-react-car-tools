import classes from './TireSize.module.scss';
import { Title } from '../title/Title';

export const TireSize = (): JSX.Element => {
  return (
    <div className={classes.tireSize}>
      <Title title="Tire Size" />
    </div>
  );
};
