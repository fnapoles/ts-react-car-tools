import classes from './Dashboard.module.scss';

export const Dashboard: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.title}>Dashboard</div>
    </div>
  );
};
