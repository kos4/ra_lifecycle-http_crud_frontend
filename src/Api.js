export default class Api {
  constructor() {
    this.host = 'http://localhost:7070';
  }

  getData(callback) {
    this.createRequest({
      input: '/notes',
      init: {},
      callback
    });
  }

  addData(data, callback) {
    this.createRequest({
      input: '/notes',
      init: {
        method: 'POST',
        body: JSON.stringify(data),
      },
      callback
    });
  }

  deleteData(id, callback) {
    this.createRequest({
      input: `/notes/${id}`,
      init: {
        method: 'DELETE',
      },
      callback
    });
  }

  async createRequest(options) {
    const response = await fetch(this.host + options.input, options.init);
    options.callback(await response);
  }
}