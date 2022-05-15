import languageCodes from '../data/data.js';

/**
 * Component class used to interact with the
 * control panel.
 */
class ControlPanel {
  /**
   * Constructs an instance of `ControlPanel`.
   * @param {String} controlPanelSelector The relevant CSS selector.
   * @param {Object} handlers Handler object.
   * @param {Function} handlers.handleLogin Handles the login action.
   * @param {Function} handlers.handleLogout Handles the logout action.
   */
  constructor(controlPanelSelector, {handleLogin, handleLogout}) {
    this._controlPanelElement = document.querySelector(controlPanelSelector);
    this._languageCodesElement =
      this._controlPanelElement.querySelector('#codes');

    this._handleLogin = handleLogin;
    this._handleLogout = handleLogout;

    this._generateLanguageCodes();
    this._setEventListeners();
  }

  /**
   * Retrieves select menu language code.
   * @return {String} Select menu language code.
   */
  getLanguageCode() {
    return this._languageCodesElement.value;
  }

  /**
   * Determines whether or not a language code is currently
   * selected.
   * @return {Boolean} Whether or not a language code is currently
   * selected.
   */
  languageCodeSelected() {
    return this._languageCodesElement.value.length > 0;
  }

  /**
   * Using the language code data, appends language code
   * information to the language code select menu.
   */
  _generateLanguageCodes() {
    const codesFragment = new DocumentFragment();

    languageCodes.forEach(({English, alpha2}) => {
      const optionElement = document.createElement('option');
      optionElement.textContent = English;
      optionElement.value = alpha2;
      codesFragment.append(optionElement);
    });

    this._languageCodesElement.append(codesFragment);
  }

  /**
   * Sets necessary event listeners for the component.
   */
  _setEventListeners() {
    this._controlPanelElement.addEventListener('submit', (e) =>
      this._handlePanelSubmit(e),
    );
  }

  /**
   * Handles a form submission on the control panel element.
   * @param {SubmitEvent} e Submit event {@link https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent}
   */
  _handlePanelSubmit(e) {
    e.preventDefault();

    'login' in e.submitter.dataset ? this._handleLogin() : this._handleLogout();
  }
}

export default ControlPanel;
