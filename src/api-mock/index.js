import uniqueId from 'lodash/uniqueId';
import TopPayload from './top.json';

const ApiMock = {
  getTop: () => {
    const serviceRequest = new Promise(((resolve) => {
      setTimeout(() => {
        // generate random IDS to simulate multiple pages
        const newChildren = TopPayload.data.children.map((childInfo) => ({
          ...childInfo,
          data: {
            ...childInfo.data,
            id: uniqueId(),
          },
        }));

        resolve({
          ...TopPayload,
          data: {
            children: newChildren,
          },
        });
      }, 500);
    }));

    return serviceRequest;
  },
};

export default ApiMock;
