const mockserver = require('mockserver-node');
import { mockServerClient } from 'mockserver-client';
import * as mocks from '../mocks';

const serverPort = 7777;

const mockClient = mockServerClient('localhost', serverPort);

(async () => {
    mockserver.stop_mockserver({
        serverPort
    });

    console.log('-> Starting mockserver');

    await mockserver.start_mockserver({
        serverPort,
        trace: true
    });

    await mockClient.mockAnyResponse(
        Object.values(mocks)
    ).then(() => console.log('-> Finished mocking'), (error) => console.log(error))
})();
