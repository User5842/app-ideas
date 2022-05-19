/**
 * Fetch client used to communicate with the app-ideas-nest
 * server.
 */
class HelloClient {
  /**
   * Retrieves relevant user information including their IPv4 address.
   */
  async getIP() {
    const response = await fetch("http://localhost:3000/ip");
    return this._handleResponse(response);
  }

  /**
   * Returns greeting using default or chosen language code.
   * @param {String} code Language code.
   */
  async sayHelloWithCode(code) {
    const response = await fetch(`http://localhost:3000/hello/code/${code}`);
    return this._handleResponse(response);
  }

  /**
   * Returns greeting using user IPv4 address.
   * @param {String} ip IPv4 address.
   */
  async sayHelloWithIP(ip) {
    const response = await fetch(`http://localhost:3000/hello/ip/${ip}`);
    return this._handleResponse(response);
  }

  /**
   * Generic reponse handler.
   * @param {Response} res Fetch response.
   * @return {Promise<any>} Resolved response or error.
   */
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    throw new Error();
  }
}

export default HelloClient;
