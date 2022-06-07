import {
  ChatForm,
  ChatInput,
  Message,
  Messages,
  UsernameDialog,
} from "../components/ui.js";

const URL = "http://localhost:3000";
const socket = io(URL, { autoConnect: false });

const input = new ChatInput();

const usernameDialog = new UsernameDialog({
  handleFormSubmit: (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    socket.auth = { username: formData.get("username") };

    socket.connect();
    usernameDialog.close();
  },
});

usernameDialog.show();

new ChatForm({
  handleFormSubmit: (e) => {
    e.preventDefault();

    if (!input.isEmpty()) {
      socket.emit("chat message", input.value);
      input.value = "";
    }
  },
});

const messages = new Messages();

socket.on("chat message", ({ message, username }) => {
  const newMessage = Message.createUserMessage(username, message);
  messages.addNewMessage(newMessage);
});

socket.on("user connected", (username) => {
  const message = Message.createMessage(`${username} has connected.`);
  messages.addNewMessage(message);
});
