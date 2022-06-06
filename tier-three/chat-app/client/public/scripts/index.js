import ChatForm from "../components/ChatForm/chat-form.js";
import ChatInput from "../components/ChatInput/chat-input.js";
import Message from "../components/Message/message.js";
import Messages from "../components/Messages/messages.js";

const socket = io();

const input = new ChatInput();

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

socket.on("chat message", (msg) => {
  const message = Message.createMessage(msg);
  messages.addNewMessage(message);
});

socket.on("user connected", (id) => {
  const message = Message.createMessage(id);
  messages.addNewMessage(message);
});
