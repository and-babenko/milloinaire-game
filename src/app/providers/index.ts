import compose from 'compose-function';
import withRouter from './with-router';
import withStore from './with-store';
import withPresistor from './with-presistor';

const withProviders = compose(withRouter, withStore, withPresistor);

export default withProviders;
