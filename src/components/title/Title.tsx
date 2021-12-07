import classes from './Title.module.scss';

interface Props {
  title: string;
}

export const Title = ({ title }: Props): JSX.Element => {
  return <div className={classes.title}>{title}</div>;
};
