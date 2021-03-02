/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
lib/src/components/NxNavigationSidebar/NxNavigationSidebar.tsx

import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, NavigationSidebarLinkProps, propTypes } from './types';

import './NxNavigationSidebar.scss';

const NxNavigationSidebarLink =
  function NxNavigationSidebarLink({ name, href, icon, current }: NavigationSidebarLinkProps) {
    const navigationLinkClassnames = classnames('nx-sidebar__item', {
      'selected': current
    });

    return (
      <a href={href} className={navigationLinkClassnames} key={`nav-link-${name}`}>
        <NxFontAwesomeIcon icon={icon} fixedWidth />
        <span className="nx-sidebar__link-name">{name}</span>
      </a>
    );
  };

const NxNavigationSidebar: FunctionComponent<Props> = function NxNavigationSidebar(props) {
  const {
    isOpen,
    children,
    className,
    toggleOpenIcon,
    toggleCloseIcon,
    onToggleClick,
    logoImg,
    logoText,
    logoLink,
    links
  } = props;

  const classes = classnames(className, 'nx-page-sidebar', 'nx-page-sidebar--navigation', {
    'open': isOpen,
    'closed': !isOpen
  });

  const toggleButtonIcon = isOpen ? toggleOpenIcon : toggleCloseIcon;
  const toggleButton = (
    <NxButton variant="icon-only"
              onClick={onToggleClick}
              className="nx-sidebar__toggle">
      <NxFontAwesomeIcon icon={toggleButtonIcon} fixedWidth />
    </NxButton>
  );

  const navigationLinks = (
    <nav className="nx-sidebar__items">
      { links.map(NxNavigationSidebarLink)}
    </nav>
  );

  const logo = <img src={logoImg} className="nx-sidebar__logo" />;

  return (
    <aside className={classes}>
      <div className="nx-sidebar__header">
        <a href={logoLink} className="nx-sidebar__product-info">
          { logo }
          <span className="nx-sidebar__product-name">{ logoText }</span>
        </a>
        { toggleButton }
      </div>
      { navigationLinks }
      { children }
    </aside>
  );
};

NxNavigationSidebar.propTypes = propTypes;

export default NxNavigationSidebar;
export { Props, propTypes } from './types';
