import OperationFactory from "./operation-factory.component.js";

import { parseStatusPage } from "../utils/utils.js";

/**
 * Manages the operations container.
 */
class Operations {
  #operationsElement = null;
  #operationFactory = null;

  /**
   * Constructs an instance of the `Operations` class.
   * @param {string} operationsSelector The relevant CSS selector.
   */
  constructor(operationsSelector) {
    this.#operationsElement = document.querySelector(operationsSelector);
    this.#operationFactory = new OperationFactory("#operation__template");

    this.fetchOperations();
  }

  /**
   * Clears the operations element.
   */
  clear() {
    this.#operationsElement.innerHTML = "";
  }

  /**
   * Fetches the operations from the Github status page
   * and pipes them through multiple operators including:
   * DOM Parsing, sanitization and filtering.
   */
  fetchOperations() {
    fetch("https://www.githubstatus.com/")
      .then((response) => response.text())
      .then(parseStatusPage)
      .then((statusPage) => statusPage.querySelector(".components-container "))
      .then((operationsContainer) => operationsContainer.children)
      .then(this.#filterOperations)
      .then((operations) => this.#renderOperations(operations));
  }

  /**
   * Filters out hidden operations.
   * @param {HTMLCollection} operations Collection of `HTMLDivElements` representing
   * the individual operation boxes from the Github status page.
   * @return {HTMLCollection} Filtered collection.
   */
  #filterOperations(operations) {
    const operationsArray = Array.from(operations);
    return operationsArray.filter(
      (operation) => !operation.textContent.trim().includes("githubstatus.com")
    );
  }

  /**
   * Iterates through each operation and generates a new `Operation`
   * to be appended to the `Operations` element.
   * @param {Array} operations Operations from the Github status page.
   */
  #renderOperations(operations) {
    for (const operation of Array.from(operations)) {
      const generatedOperation =
        this.#operationFactory.generateOperation(operation);
      this.#operationsElement.append(generatedOperation);
    }
  }
}

export default Operations;
