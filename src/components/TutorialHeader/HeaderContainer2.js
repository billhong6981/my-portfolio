/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Custom rewrite HeaderContainer
 * add feature of control right panel child expand and collapse
 */
import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';

// eslint-disable-next-line react/prop-types
const HeaderContainer2 = ({
  isSideNavExpanded,
  isRightPanelExpanded,
  render: Children,
}) => {
  //state for expandable sidenav
  const [isSideNavExpandedState, setIsSideNavExpandedState] = useState(
    isSideNavExpanded
  );
  const [isRightPanelExpandedState, setIsRightPanelExpandedState] = useState(
    isRightPanelExpanded
  );

  const handleHeaderMenuButtonClick = useCallback(() => {
    setIsSideNavExpandedState(!isSideNavExpandedState);
  }, [isSideNavExpandedState, setIsSideNavExpandedState]);

  const handleHeaderMenuButtonMouseOver = useCallback(() => {
    setIsSideNavExpandedState(true);
  }, [isSideNavExpandedState, setIsSideNavExpandedState]);
  const handleHeaderMenuButtonMouseOut = useCallback(() => {
    setIsSideNavExpandedState(false);
  }, [isSideNavExpandedState, setIsSideNavExpandedState]);

  const handleGlobleActionButtonClick = useCallback(() => {
    setIsRightPanelExpandedState(!isRightPanelExpandedState);
  }, [isRightPanelExpandedState, setIsSideNavExpandedState]);

  const handleGlobleActionButtonMouseOver = useCallback(() => {
    setIsRightPanelExpandedState(true);
  }, [isRightPanelExpandedState, setIsRightPanelExpandedState]);
  const handleGlobleActionButtonMouseOut = useCallback(() => {
    setIsRightPanelExpandedState(false);
  }, [isRightPanelExpandedState, setIsRightPanelExpandedState]);

  return (
    <Children
      isSideNavExpanded={isSideNavExpandedState}
      onClickSideNavExpand={handleHeaderMenuButtonClick}
      onMouseOverSideNavExpand={handleHeaderMenuButtonMouseOver}
      onMouseOutSideNavExpand={handleHeaderMenuButtonMouseOut}
      isRightPanelExpanded={isRightPanelExpandedState}
      onClickRightPanelExpand={handleGlobleActionButtonClick}
      onMouseOverRightPanelExpand={handleGlobleActionButtonMouseOver}
      onMouseOutRightPanelExpand={handleGlobleActionButtonMouseOut}
    />
  );
};

HeaderContainer2.propTypes = {
  /**
   * Optionally provide a custom class name that is applied to the underlying <header>
   */
  isSideNavExpanded: PropTypes.bool,
  isRightPanelExpanded: PropTypes.bool,
};

HeaderContainer2.defaultProps = {
  isSideNavExpanded: false,
  isRightPanelExpanded: false,
};

export default HeaderContainer2;
