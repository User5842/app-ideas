/**
 * Manages creation of Operation elements.
 */
class OperationFactory {
  #templateSelector = null;

  /**
   * Constructs an instance of `OperationFactory`.
   * @param {String} templateSelector The relevant CSS selector.
   */
  constructor(templateSelector) {
    this.#templateSelector = templateSelector;
  }

  /**
   * Receives an operation element and transforms it into one
   * that can be used within the application.
   * @param {HTMLDivElement} operation Operation from the Github status page.
   * @return {HTMLDivElement} Element representing a transformed operation to be used
   * within the `github-status` application.
   */
  generateOperation(operation) {
    const operationName = operation.querySelector('.name').textContent.trim();
    const operationStatus = operation
        .querySelector('.component-status')
        .textContent.trim();

    const element = this.#getElement();
    element.querySelector('.operation__name').textContent = operationName;

    const operationStatusElement = element.querySelector('.operation__status');
    operationStatusElement.textContent = operationStatus;

    if (operationStatus === 'Operational') {
      operationStatusElement.classList.add('operational');
    } else {
      operationStatusElement.classList.add('error');
    }

    return element;
  }

  /**
   * Retrieves and clones the operation template for use.
   * @return {HTMLDivElement} Operation element.
   */
  #getElement() {
    return document
        .querySelector(this.#templateSelector)
        .content.cloneNode(true)
        .querySelector('.operation');
  }
}

export default OperationFactory;
