import { call, put, takeLatest } from 'redux-saga/effects'
// import Api from '...'
const getRecords = (isbnNum = null) => {
    console.log('Get Records');
    const results =  fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNum}`)
    .then(response => response.json()); 
    return results;
}

// worker Saga: will be fired on BOOK_FETCH_REQUESTED actions
function* fetchBookDetail(action) {
   try {
     const json = yield call(getRecords, action.payload.isbnNum);
      yield put({type: "BOOK_FETCH_SUCCEEDED",  response: json});
   } catch (e) {
      yield put({type: "BOOK_FETCH_FAILED", message: e.message});
   }
}

function* getRecordsSaga() {
  yield takeLatest("BOOK_FETCH_REQUESTED", fetchBookDetail);
}

export default getRecordsSaga;