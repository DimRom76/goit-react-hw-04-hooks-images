import PropagateLoader from 'react-spinners/PropagateLoader';

import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.container}>
      <PropagateLoader color="#3f51b5" />
    </div>
  );
}
