class HelloClient {
  async getIP() {
    const response = await fetch("http://localhost:3000/ip");

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }

  async sayHelloWithCode(code) {
    const response = await fetch(`http://localhost:3000/hello/code/${code}`);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }

  async sayHelloWithIP(ip) {
    const response = await fetch(`http://localhost:3000/hello/ip/${ip}`);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
}

export default HelloClient;
