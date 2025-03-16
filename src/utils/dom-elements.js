/* 
 * Copyright (c) 2023-25 Zendalona
 * This software is licensed under the GPL-3.0 License.
 * See the LICENSE file in the root directory for more information.
  */

const getElement = (id) => {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with id "${id}" not found`);
  }
  return element;
};

const getQueryElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element with selector "${selector}" not found`);
  }
  return element;
};

export const elements = {
  get searchResults() { return getElement("search-results"); },
  get detalisElement() { return getElement("detalisElement"); },
  get input() { return getElement("search-input"); },
  get distanceIcon() { return getElement("trigger-icon"); },
  get distanceBox() { return getElement("box"); },
  get ser() { return getQueryElement(".box-input"); },
  get detailsCloseButton() { return getElement("closeBtnD"); }
};

// For backward compatibility
export const {
  searchResults,
  detalisElement,
  input,
  distanceIcon,
  distanceBox,
  ser,
  detailsCloseButton
} = elements;

  
