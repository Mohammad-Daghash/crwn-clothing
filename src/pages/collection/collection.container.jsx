import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const selectors = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
    connect(selectors),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
