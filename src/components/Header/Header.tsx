import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

export const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <Link className={classes.link} to="/">
        Tools
      </Link>
    </header>
  );
};
