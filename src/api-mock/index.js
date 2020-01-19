import TopPayload from './top.json';

const ApiMock = {
  getTop: () => {
    const serviceRequest = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(TopPayload);
      }, 1000);
    });

    return serviceRequest;
  }
};

export default ApiMock;
