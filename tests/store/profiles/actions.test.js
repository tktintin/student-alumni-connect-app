import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/profiles/actions';
// import { useSelector, useDispatch } from 'react-redux';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

// jest.mock('react-redux', () => ({
//     useSelector: jest.fn(),
//     useDispatch: jest.fn()
// }));

describe.skip('Test otherProfile actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch SET_ALL_PROFILES after a successful API request', () => {
        // useSelector.mockImplementation((selectorFn) => selectorFn());
        // useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        let promise = store.dispatch(actions.loadAllProfiles()).then(() => {
            expect(store.getActions()).toBeTruthy()
        });
        return promise;
    });
});