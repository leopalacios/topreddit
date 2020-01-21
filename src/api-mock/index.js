import TopPayload from './top.json';
import uniqueId from'lodash/uniqueId';

const ApiMock = {
  getTop: () => {
    const serviceRequest = new Promise(function(resolve) {
      setTimeout(function() {

        // generate random IDS to simulate multiple pages
        const newChildren = TopPayload.data.children.map(childInfo => ({
          ...childInfo,
          data: {
            ...childInfo.data,
            id: uniqueId(),
          }
        }));

        resolve({
          ...TopPayload,
          data: {
            children: newChildren,
          },
        });
      }, 500);
    });

    return serviceRequest;
  }
};

export default ApiMock;
