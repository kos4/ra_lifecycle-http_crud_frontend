export default class Api {
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
    const response = await fetch(process.env.REACT_APP_API_URL + options.input, options.init);
    options.callback(await response);
  }
}