/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import RawHtmlExample from '../../RawHtmlExample';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPageTitlePolicyViolationIndicatorExample from './NxPageTitlePolicyViolationIndicatorExample';

const nxPageTitleCode = require('!!raw-loader!./NxPageTitleExample.html').default,
    nxPageTitleActionsCode = require('!!raw-loader!./NxPageTitleActionsExample.html').default,
    nxPageTitlePolicyViolationIndicatorCode =
      require('!!raw-loader!./NxPageTitlePolicyViolationIndicatorExample.tsx').default;

const NxPageTitlePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        nx-page-title is used at the top of a page, it always has a title, and can also have an icon
        and descriptive text.
      </p>
      <p className="nx-p">
        Note: <code className="nx-code">.nx-page-title</code> replaces
        <code className="nx-code">.nx-tile--top-tile</code> and <code className="nx-code">.nx-tile--title-only</code>.
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
            <td className="nx-cell"><code className="nx-code">.nx-page-title</code></td>
            <td className="nx-cell">Top level</td>
            <td className="nx-cell">
              This is the basic wrapper class. The title text is almost always contained in an
              <code className="nx-code">&lt;h1&gt;</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-page-title__page-icon</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Class for an icon that appears to the left of the page title.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-page-title__description</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              If there is page level descriptive text it should be wrapped in a containing
              <code className="nx-code">&lt;div&gt;</code> with this class.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <RawHtmlExample html={nxPageTitleCode} />
    <CodeExample content={nxPageTitleCode} />

    <RawHtmlExample html={nxPageTitleActionsCode} />
    <CodeExample content={nxPageTitleActionsCode} />

    <GalleryExampleTile title="NX Tile with Policy Violation Indicator"
                        id="nx-tile-policy-violation-indicator-example"
                        defaultCheckeredBackground={false}
                        liveExample={NxPageTitlePolicyViolationIndicatorExample}
                        codeExamples={nxPageTitlePolicyViolationIndicatorCode}>
      An example of a page title with an <code className="nx-code">NxPolicyViolationIndicator</code>.
    </GalleryExampleTile>
  </>;

export default NxPageTitlePage;
