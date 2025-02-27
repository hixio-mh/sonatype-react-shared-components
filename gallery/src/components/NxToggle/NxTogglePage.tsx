/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxToggleExample from './NxToggleExample';
import NxToggleGaplessExample from './NxToggleGaplessExample';

const exampleCode = require('./NxToggleExample?raw'),
    exampleGaplessCode = require('./NxToggleGaplessExample?raw');

const NxTogglePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Custom toggle control, which uses a hidden checkbox input for its on/checked &amp; off/unselected states.
      </p>
      <p className="nx-p">Child VDOM will be used as a label preceeding the toggle control.</p>
      <p className="nx-p">
        NxToggle can receive any attribute that would be valid on an
        HTML <code className="nx-code">&lt;label&gt;</code> as well as the following props:
      </p>
      <table className="nx-table">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">inputId</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">An id to identify the toggle</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isChecked</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">Whether the toggle should be rendered as on/checked or off/unchecked</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function (() =&gt; void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A callback for when the toggle control is toggled</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the toggle should be rendered as disabled or not. When disabled, the onChange callback will
              not fire. Defaults to false.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">Virtual DOM</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              VDOM rendered as a label. Should be
              {' '}
              <a href="https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content"
                 className="nx-text-link">
                phrasing content
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="nx-h3">CSS classes</h3>
      <table className="nx-table">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">.nx-toggle--no-gap</td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-toggle</code></td>
            <td className="nx-cell">
              When this class is applied to an <code className="nx-code">NxToggle</code> it causes the toggle control
              to appear immediately after the label text rather than appearing to float to the right of the toggle's
              container. Note that the maximum width of the toggle remains in effect as do the rules around the length
              and wrapping of the toggle's label. See the example below for a demonstration.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General NxToggle Example"
                        id="nx-toggle-example"
                        codeExamples={exampleCode}
                        liveExample={NxToggleExample}>
      This example shows a series of toggle controls in a typical vertical layout with
      different label content. Note that one of the toggle controls is disabled.
    </GalleryExampleTile>
    <GalleryExampleTile title="General NxToggle Gapless Example"
                        id="nx-toggle-gapless-example"
                        codeExamples={exampleGaplessCode}
                        liveExample={NxToggleGaplessExample}>
      This example demonstrates toggle controls with only a small spacing gap between the label and the toggle control.
    </GalleryExampleTile>
  </>;

export default NxTogglePage;
