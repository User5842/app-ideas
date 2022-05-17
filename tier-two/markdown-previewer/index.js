import Copy from './components/copy.component.js';
import Markdown from './components/markdown.component.js';
import Output from './components/output.component.js';

const output = new Output('#output');

new Copy('#copy', {
  handleCopy: () => {
    const cleanHTML = output.getCleanHTML();

    if (cleanHTML == null) {
      alert('You should write some markdown first.');
    } else {
      navigator.clipboard.writeText(cleanHTML);
    }
  },
});

new Markdown('#markdown', {
  handleInput: (inputEvent) => {
    const parsedValue = marked.parse(inputEvent.target.value);
    output.render(parsedValue);
  },
});
