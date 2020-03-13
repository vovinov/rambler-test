import * as R from 'ramda';

import data from './data.json';


export const getCardById = (id) => {
    return R.filter(R.propEq('id', id), data)
}