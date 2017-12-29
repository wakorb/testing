import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import commentReducer from '../../src/reducers/comments';

describe('Comments Reducer', () => {
  it('UNKOWN', () => {
    const reducer = commentReducer([], {});

    expect(reducer).to.eql([]);
  });

  it('SAVE_COMMENT', () => {
    const reducer = commentReducer([], { type: SAVE_COMMENT, payload: 'New Comment' });

    expect(reducer).to.eql(['New Comment']);
  });
});
