import classes from './VinDetails.module.scss';
import { Variable } from './VinSearch';

interface DetailProps {
  variables: Variable[];
}

export const VinDetails = ({ variables }: DetailProps): JSX.Element => {
  return (
    <div className={classes.vinDetails}>
      <table>
        <tbody>
          {variables.map((variable: Variable): JSX.Element => {
            return (
              <tr key={variable.VariableId}>
                <td className={classes.alignRight}>{variable.Variable}</td>
                <td className={classes.alignLeft}>{variable.Value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
