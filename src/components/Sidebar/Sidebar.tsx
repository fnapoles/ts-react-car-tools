import classes from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

export const Sidebar: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.sidebar}>
      <div>
        <Link className={classes.sidebarLink} to="/vin-decoder">
          VIN Decoder
        </Link>
      </div>
    </div>
  );
};
