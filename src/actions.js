import Api from './api';

export const GET_HISTORY_BEGIN   = 'GET_HISTORY_BEGIN';
export const GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS';
export const GET_HISTORY_FAILURE = 'GET_HISTORY_FAILURE';
const api = new Api();

export const fetchHistoryBegin = () => ({
  type: GET_HISTORY_BEGIN
});

export const fetchHistorySuccess = taskHistory => ({
  type: GET_HISTORY_SUCCESS,
  payload: { taskHistory }
});

export const fetchProductsFailure = error => ({
  type: GET_HISTORY_FAILURE,
  payload: { error }
});

export function getTaskHistory() {
    return dispatch => {
        dispatch(fetchHistoryBegin());
        return api.getTaskHistory()
            .then(res => {
                dispatch(fetchHistorySuccess(res));
            })
            //.catch(error => dispatch(fetchProductsFailure(error)));
    };
}
