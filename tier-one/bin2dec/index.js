import Binary from "./components/binary.component.js";
import Output from "./components/output.component.js";
import Validation from "./components/validation.component.js";
import { convertBinaryToDecimal } from "./utils/converter.js";

const output = new Output("#output");
const validationMessage = new Validation("#validation");

new Binary("#form", {
  handleInput: (e) => {
    const { valid } = e.target.validity;

    if (valid) {
      output.setOutput(convertBinaryToDecimal(e.target.value));
      validationMessage.clearValidationMessage();
    } else {
      output.clearOutput();
      validationMessage.setValidationMessage(e.target.validationMessage);
    }
  },
});
