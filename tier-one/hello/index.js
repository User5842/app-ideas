import HelloClient from './client/hello.client.js';

import ControlPanel from './components/control-panel.js';
import Info from './components/info.js';
import Status from './components/status.js';

const helloClient = new HelloClient();

const infoPanel = new Info('#info');

const statusIndicator = new Status('#status');

const controlPanel = new ControlPanel('#form', {
  handleLogin: async () => {
    try {
      const userInfo = await helloClient.getIP();

      let greeting;

      if (controlPanel.languageCodeSelected()) {
        const languageCode = controlPanel.getLanguageCode();
        greeting = await helloClient.sayHelloWithCode(languageCode);
      } else {
        greeting = await helloClient.sayHelloWithIP(userInfo.query);
      }

      infoPanel.updateInfo(userInfo);
      statusIndicator.updateStatus(
          `${greeting.hello} 👋 You have successfully logged in!`,
      );
    } catch (_) {
      statusIndicator.updateStatus(
          'Whoops! It looks like something went wrong. Try again.',
      );
    }
  },
  handleLogout: () => {
    infoPanel.clear();
    statusIndicator.updateStatus('Have a great day!');
  },
});
