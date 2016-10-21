import connect from './connect';
import HitsPerPageComponent from './HitsPerPage';
import HitsPerPageSelectComponent from './HitsPerPageSelect';

/**
 * The HitsPerPage widget displays a list of possible number of items that can be displayed.
 * With it a user can choose to display more or less results from Algolia.
 * @kind component
 * @category widget
 * @propType {string} id - The id of the widget.
 * @propType {number} defaultHitsPerPage - The number of items  selected by default
 * @propType {{value, label}[]|number[]} items - List of hits per page options. Passing a list of numbers `[n]` is a shorthand for `[{value: n, label: n}]`.
 * @themeKey root - the root of the component.
 * @themeKey item - the container of a single item.
 * @themeKey itemLink - the link part of the selectable item.
 * @themeKey itemSelected - the selected item.
 * @example
 * import React from 'react';

 * import {
 *   InstantSearch,
 *   Hits,
 * } from 'react-instantsearch';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       className="container-fluid"
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <HitsPerPage defaultHitsPerPage={20}/>
 *     </InstantSearch>
 *   );
 * }
 */
const HitsPerPage = connect(HitsPerPageComponent);

/**
 * The HitsPerPage widget displays a dropdown menu of possible number of items that can be displayed.
 * With it a user can choose to display more or less results from Algolia.
 *
 * Passing a list of numbers `[n]` is a shorthand for `[{value: n, label: n}]`.
 * Beware: Contrary to `HitsPerPage`, the `label` of `HitsPerPage` items must be either a string or a number.
 * @name HitsPerPageSelect
 * @kind component
 * @category widget
 * @propType {number} hitsPerPage - How many hits should be displayed for every page.
 *   Ignored when a `HitsPerPage` component is also present.
 * @propType {Component} itemComponent - Component used for rendering each hit from
 *   the results. If it is not provided the rendering defaults to displaying the
 *   hit in its JSON form. The component will be called with a `hit` prop.
 * @themeKey root - the root of the component
 * @example
 * import React from 'react';

 * import {
 *   InstantSearch,
 *   Hits,
 * } from 'react-instantsearch';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       className="container-fluid"
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <HitsPerPageSelect defaultHitsPerPage={20}/>
 *     </InstantSearch>
 *   );
 * }
 */
HitsPerPage.Select = connect(HitsPerPageSelectComponent);

HitsPerPage.connect = connect;
export default HitsPerPage;