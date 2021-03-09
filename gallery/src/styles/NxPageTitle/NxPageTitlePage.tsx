/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPageTitlePolicyViolationIndicatorExample from './NxPageTitlePolicyViolationIndicatorExample';

const nxPageTitleCode = require('./NxPageTitleExample.html'),
    nxPageTitleActionsCode = require('./NxPageTitleActionsExample.html'),
    nxPageTitlePolicyViolationIndicatorCode =
      require('./NxPageTitlePolicyViolationIndicatorExample.tsx?raw');

const NxPageTitlePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <NxCode>nx-page-title</NxCode> is used at the top of a page, it always has a title, and can also
        have an icon and descriptive text.
      </p>
      <p className="nx-p">
        In addition <NxCode>.nx-page-title</NxCode> can have tags or actions inline with the title.
      </p>
      <p className="nx-p">
        Note: <NxCode>.nx-page-title</NxCode> replaces
        <NxCode>.nx-tile--top-tile</NxCode> and <NxCode>.nx-tile--title-only</NxCode>.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-page-title</NxCode></td>
            <td className="nx-cell">Top level</td>
            <td className="nx-cell">
              This is the basic wrapper class. The title text is almost always contained in an
              <NxCode>&lt;h1&gt;</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-page-title__page-icon</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Class for an icon that appears to the left of the page title.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-page-title__description</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              If there is page level descriptive text it should be wrapped in a containing
              <NxCode>&lt;div&gt;</NxCode> with this class.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NX Page Title Example"
                        id="nx-page-title-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleCode}
                        codeExamples={nxPageTitleCode}>
      A simple example of an <NxCode>nx-page-title</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Page Title with Actions Example"
                        id="nx-page-title-actions-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleActionsCode}
                        codeExamples={nxPageTitleActionsCode}>
      An example of <NxCode>nx-page-title</NxCode> with actions in the form of a drop-down.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Page Title with Policy Violation Indicator"
                        id="nx-page-title-policy-violation-indicator-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxPageTitlePolicyViolationIndicatorExample}
                        codeExamples={nxPageTitlePolicyViolationIndicatorCode}>
      An example of a page title with an <NxCode>NxPolicyViolationIndicator</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxPageTitlePage;
