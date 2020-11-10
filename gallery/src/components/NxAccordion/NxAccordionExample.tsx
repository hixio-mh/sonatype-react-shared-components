/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { NxAccordion, NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';

export default function NxAccordionExample() {
  const [open, setOpen] = useState(false);

  return (
    <NxAccordion open={open} onToggle={setOpen}>
      <NxAccordion.Header>
        <div className="nx-accordion__header-title">Foo</div>
        <div className="nx-btn-bar">
          <NxButton variant="icon-only">
            <NxFontAwesomeIcon icon={faCog} />
          </NxButton>
          <NxButton variant="icon-only">
            <NxFontAwesomeIcon icon={faCog} />
          </NxButton>
        </div>
      </NxAccordion.Header>
      <p>Foo Bar Baz</p>
    </NxAccordion>
  );
}
