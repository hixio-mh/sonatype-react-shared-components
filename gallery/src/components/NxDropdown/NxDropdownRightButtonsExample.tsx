/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDropdown, NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function NxDropdownRightButtonsExample() {
  const [isOpen, toggleOpen] = useState(false),
      onToggleCollapse = () => { toggleOpen(!isOpen); },
      onClick = () => { alert('click'); };

  return (
    <NxDropdown label="Navigation" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
      <div className="nx-dropdown-button-container">
        <a onClick={onClick} className="nx-dropdown-button">
          Nav Link1
        </a>
      </div>
      <div className="nx-dropdown-button-container">
        <NxButton onClick={() => alert('icon click')} className="nx-dropdown-button--right" variant="icon-only">
          <NxFontAwesomeIcon icon={faTrash}/>
        </NxButton>
        <button onClick={onClick} className="nx-dropdown-button">
          Nav Link2
        </button>
      </div>
      <div className="nx-dropdown-button-container">
        <NxButton onClick={() => alert('icon click')} className="nx-dropdown-button--right" variant="icon-only">
          <NxFontAwesomeIcon icon={faTrash}/>
        </NxButton>
        <a onClick={onClick} className="nx-dropdown-button">
          Nav Link3 - this link should trigger truncation
        </a>
      </div>
    </NxDropdown>
  );
}

export default NxDropdownRightButtonsExample;
