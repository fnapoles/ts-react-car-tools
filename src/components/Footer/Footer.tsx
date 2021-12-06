import classes from './Footer.module.scss';

export const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.footer}>
      {new Date().getFullYear()} | Phoenix American Insurance Group
    </div>
  );
};
