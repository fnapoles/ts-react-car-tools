// import classes from './Content.module.scss';
import { VinDecoder } from '../VinDecoder/VinDecoder';
import { Dashboard } from '../Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';

// type ContentProps = {
//   children?: JSX.Element | JSX.Element[];
// };

export const Content = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/vin-decoder" element={<VinDecoder />} />
    </Routes>
  );
};
