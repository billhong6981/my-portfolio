import React from 'react';
import HeaderContainer2 from './HeaderContainer2';
import {
  //HeaderContainer,
  Header,
  HeaderName,
  HeaderNavigation,
  //HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  //Content,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherItemLink,
  HeaderMenuButton,
} from 'carbon-components-react/lib/components/UIShell';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import Fade16 from '@carbon/icons-react/lib/fade/16';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer2
    render={({
      isSideNavExpanded,
      onClickSideNavExpand,
      onMouseOverSideNavExpand,
      onMouseOutSideNavExpand,
      isRightPanelExpanded,
      onClickRightPanelExpand,
    }) => (
      <Header aria-label="BH Portfollio">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          isCollapsible
          onClick={onClickSideNavExpand}
          onMouseOver={onMouseOverSideNavExpand}
          onMouseOut={onMouseOutSideNavExpand}
          isActive={isSideNavExpanded}
        />

        <HeaderName element={Link} to="/" prefix="BH">
          Portfolio
        </HeaderName>
        <HeaderNavigation aria-label="BH portfolio">
          <HeaderMenuItem element={Link} to="/repos">
            Github Repos
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav expanded={isSideNavExpanded} aria-label="Side Navigation">
          <SideNavItems>
            <SideNavMenu title="My WebApp" />
            <SideNavLink
              renderIcon={Fade16}
              target="_blank"
              rel="noopener noreferrer"
              href="http://get-github-repos-billhong6981.mybluemix.net/">
              Get Github Repos
            </SideNavLink>
            <SideNavLink
              renderIcon={Fade16}
              target="_blank"
              rel="noopener noreferrer"
              href="https://billhong6981.github.io/nqueens-solution/">
              N-Queens Solution
            </SideNavLink>
            <SideNavLink
              renderIcon={Fade16}
              target="_blank"
              rel="noopener noreferrer"
              href="http://34.94.254.88/">
              Many-to-Many
            </SideNavLink>
            <SideNavLink
              renderIcon={Fade16}
              target="_blank"
              rel="noopener noreferrer"
              href="https://billhong6981.github.io/Calculator-React/">
              Calculator
            </SideNavLink>
            <SideNavLink
              renderIcon={Fade16}
              target="_blank"
              rel="noopener noreferrer"
              href="https://billhong6981.github.io/guess-number-game/">
              Get Github Repos
            </SideNavLink>
            <SideNavLink
              renderIcon={Fade16}
              target="_blank"
              rel="noopener noreferrer"
              href="https://billhong6981.github.io/html-table/">
              Text to Table
            </SideNavLink>
          </SideNavItems>
        </SideNav>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={onClickRightPanelExpand}
            isActive={isRightPanelExpanded}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel aria-label="Header Panel" expanded={isRightPanelExpanded}>
          <Switcher aria-label="Switcher Container">
            <SwitcherItem>
              <SwitcherItemLink href="#">My Cover Letter</SwitcherItemLink>
            </SwitcherItem>

            <SwitcherItem>
              <a
                className="aHeading"
                target="_blank"
                rel="noopener noreferrer"
                href="Resume-cover-letter.pdf">
                Resume
              </a>
            </SwitcherItem>
          </Switcher>
        </HeaderPanel>
      </Header>
    )}
  />
);

export default TutorialHeader;
