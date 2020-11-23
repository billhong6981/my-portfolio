/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { Search16, Close16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import * as keys from './keys';
import warning from 'warning';
const { prefix } = settings;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @typedef Key
 * @property key {Array<string>|string}
 * @property which {number}
 * @property keyCode {number}
 */

/**
 * Check to see if at least one key code matches the key code of the
 * given event.
 *
 * @example
 * import * as keys from '../keys';
 * import { matches } from '../match';
 *
 * function handleOnKeyDown(event) {
 *   if (matches(event, [keys.Enter, keys.Space]) {
 *     // ...
 *   }
 * }
 *
 * @param {Event} event
 * @param {Array<Key>} keysToMatch
 * @returns {boolean}
 */
export function matches(event, keysToMatch) {
  for (let i = 0; i < keysToMatch.length; i++) {
    if (match(event, keysToMatch[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Check to see if the given key matches the corresponding keyboard event. Also
 * supports passing in the value directly if you can't used the given event.
 *
 * @example
 * import * as keys from '../keys';
 * import { matches } from '../match';
 *
 * function handleOnKeyDown(event) {
 *   if (match(event, keys.Enter) {
 *     // ...
 *   }
 * }
 *
 * @param {Event|number|string} eventOrCode
 * @param {Key} key
 * @returns {boolean}
 */
export function match(eventOrCode, { key, which, keyCode } = {}) {
  if (typeof eventOrCode === 'string') {
    return eventOrCode === key;
  }

  if (typeof eventOrCode === 'number') {
    return eventOrCode === which || eventOrCode === keyCode;
  }

  if (eventOrCode.key && Array.isArray(key)) {
    return key.indexOf(eventOrCode.key) !== -1;
  }

  return (
    eventOrCode.key === key ||
    eventOrCode.which === which ||
    eventOrCode.keyCode === keyCode
  );
}

/**
 * Get a string character for a given event or event code (useful for synthetic
 * events)
 *
 * @param {Event|number} eventOrCode
 * @returns {string}
 */
export function getCharacterFor(eventOrCode) {
  if (typeof eventOrCode === 'number') {
    return String.fromCharCode(eventOrCode);
  }

  return (
    eventOrCode.key ||
    String.fromCharCode(eventOrCode.which || eventOrCode.keyCode)
  );
}

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const didWarnAboutDeprecation = {};

export function deprecate(propType, message) {
  function checker(props, propName, componentName, ...rest) {
    if (props[propName] === undefined) {
      return;
    }

    if (
      !didWarnAboutDeprecation[componentName] ||
      !didWarnAboutDeprecation[componentName][propName]
    ) {
      didWarnAboutDeprecation[componentName] = {
        ...didWarnAboutDeprecation[componentName],
        [propName]: true,
      };

      warning(
        false,
        message ||
          `The prop \`${propName}\` has been deprecated for the ` +
            `${componentName} component. It will be removed in the next major ` +
            `release`
      );
    }

    return propType(props, propName, componentName, ...rest);
  }

  return checker;
}

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Generic utility to compose event handlers so that consumers can supply their
 * own event listeners on table components. The default heuristic here is to
 * iterate through the given functions until `preventDefault` is called on the
 * given event.
 *
 * @param {Array<Function>} fns array of functions to apply to the event
 * @returns {Function}
 */
export const composeEventHandlers = fns => (event, ...args) => {
  for (let i = 0; i < fns.length; i++) {
    if (event.defaultPrevented) {
      break;
    }
    if (typeof fns[i] === 'function') {
      fns[i](event, ...args);
    }
  }
};

export default class Search extends Component {
  static propTypes = {
    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify a label to be read by screen readers on the "close" button
     */
    closeButtonLabelText: PropTypes.string,

    /**
     * Optionally provide the default value of the `<input>`
     */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Specify whether the `<input>` should be disabled
     */
    disabled: PropTypes.bool,

    /**
     * Specify a custom `id` for the input
     */
    id: PropTypes.string,

    /**
     * Provide the label text for the Search icon
     */
    labelText: PropTypes.node.isRequired,

    /**
     * Specify light version or default version of this control
     */
    light: PropTypes.bool,

    /**
     * Optional callback called when the search value changes.
     */
    onChange: PropTypes.func,

    /**
     * Provide a handler that is invoked on the key down event for the input
     */
    onKeyDown: PropTypes.func,

    /**
     * Provide an optional placeholder text for the Search.
     * Note: if the label and placeholder differ,
     * VoiceOver on Mac will read both
     */
    placeHolderText: PropTypes.string,

    /**
     * Specify the search size
     */
    size: PropTypes.oneOf(['sm', 'lg', 'xl']),

    /**
     * Specify whether the Search should be a small variant
     */

    /**
     * Specify whether the load was successful
     */
    small: deprecate(
      PropTypes.bool,
      `\nThe prop \`small\` for Search has been deprecated in favor of \`size\`. Please use \`size="sm"\` instead.`
    ),

    /**
     * Optional prop to specify the type of the `<input>`
     */
    type: PropTypes.string,

    /**
     * Specify the value of the `<input>`
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    type: 'text',
    placeHolderText: '',
    closeButtonLabelText: 'Clear search input',
    onChange: () => {},
  };

  state = {
    hasContent: this.props.value || this.props.defaultValue || false,
    prevValue: this.props.value,
  };

  static getDerivedStateFromProps({ value }, state) {
    const { prevValue } = state;
    return prevValue === value
      ? null
      : {
          hasContent: !!value,
          prevValue: value,
        };
  }

  clearInput = evt => {
    if (!this.props.value) {
      this.input.value = '';
      this.props.onChange(evt);
    } else {
      const clearedEvt = Object.assign({}, evt.target, {
        target: {
          value: '',
        },
      });
      this.props.onChange(clearedEvt);
    }

    this.setState({ hasContent: false }, () => this.input.focus());
  };

  handleChange = evt => {
    this.setState({
      hasContent: evt.target.value !== '',
    });

    this.props.onChange(evt);
  };

  handleKeyDown = evt => {
    if (match(evt, keys.Escape)) {
      this.clearInput(evt);
    }
  };

  render() {
    const {
      className,
      type,
      id = (this._inputId =
        this._inputId ||
        `search__input__id_${Math.random()
          .toString(36)
          .substr(2)}`),
      placeHolderText,
      labelText,
      closeButtonLabelText,
      small,
      size = !small ? 'xl' : 'sm',
      light,
      disabled,
      onChange,
      onKeyDown,
      ...other
    } = this.props;

    const { hasContent } = this.state;

    const searchClasses = classNames({
      [`${prefix}--search`]: true,
      [`${prefix}--search--${size}`]: size,
      [`${prefix}--search--light`]: light,
      [`${prefix}--search--disabled`]: disabled,
      [className]: className,
    });

    const clearClasses = classNames({
      [`${prefix}--search-close`]: true,
      [`${prefix}--search-close--hidden`]: !hasContent,
    });

    const searchId = `${id}-search`;

    return (
      <div role="search" aria-labelledby={searchId} className={searchClasses}>
        <Search16 className={`${prefix}--search-magnifier`} />
        <label id={searchId} htmlFor={id} className={`${prefix}--label`}>
          {labelText}
        </label>
        <input
          role="searchbox"
          autoComplete="off"
          {...other}
          type={type}
          disabled={disabled}
          className={`${prefix}--search-input`}
          id={id}
          placeholder={placeHolderText}
          onChange={composeEventHandlers([onChange, this.handleChange])}
          onKeyDown={composeEventHandlers([onKeyDown, this.handleKeyDown])}
          ref={input => {
            this.input = input;
          }}
        />
        <button
          className={clearClasses}
          disabled={disabled}
          onClick={this.clearInput}
          type="button"
          aria-label={closeButtonLabelText}>
          <Close16 />
        </button>
      </div>
    );
  }
}
