/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {faExclamationTriangle, faEdit, faSave} from '@fortawesome/free-solid-svg-icons';

import { NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxButtonIconOnlyExample = () =>
  <div className="nx-btn-bar">
    <NxButton variant="icon-only">
      <NxFontAwesomeIcon aria-hidden={false}
                         aria-label='alert'
                         icon={faExclamationTriangle}/>
    </NxButton>
    <NxButton variant="icon-only"><NxFontAwesomeIcon aria-hidden={false} aria-label='edit' icon={faEdit}/></NxButton>
    <NxButton variant="icon-only"><NxFontAwesomeIcon aria-hidden={false} aria-label='save' icon={faSave}/></NxButton>
  </div>;

export default NxButtonIconOnlyExample;
