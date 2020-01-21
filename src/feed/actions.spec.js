import { getPostList } from './actions';
import '../api-mock';

jest.mock('../api-mock', () => ({
  getTop: () => Promise.resolve('response'),
}));

describe('Actions', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
  });

  describe('getPostList', () => {
    it('should trigger postsRequest', async () => {
      await getPostList()(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledTimes(2);
      expect(dispatchMock).toHaveBeenCalledWith({
        type: 'POSTS_REQUEST',
      });
      expect(dispatchMock).toHaveBeenCalledWith({
        type: 'POSTS_RESPONSE',
        payload: {
          data: 'response',
        },
      });
    });
  });
});
