import { getHeader } from "../header/header";
import { getRow } from "../row/row";
import { createBasicElement } from "../utils/element";
import styles from "./body.module.scss";

/**
 * This function takes in a column definition and a data array and returns a HTML
 * div element containing the body of the grid.
 *
 * @param {Grid.ColDef[]} colDefs The column definitions.
 * @param {Grid.DataRow[]} data The data array.
 * @returns {HTMLDivElement} A HTML div element containing the body of the grid.
 *
 * @example
 * const colDefs = [
 *  {
 *   headerName: "Name",
 *   field: "name",
 *   type: "string",
 *  },
 *  {
 *   headerName: "Age",
 *   field: "age",
 *   type: "number",
 *  },
 * ];
 * const data = [
 *  {
 *   name: "John Doe",
 *   age: 25,
 *  },
 *  {
 *   name: "Jane Doe",
 *   age: 26,
 *  },
 * ];
 * const body = getBody(colDefs, data);
 * console.log(body.innerHTML); // <div class="body">...</div>
 * console.log(body.children.length); // 3
 * console.log(body.children[0].innerHTML); // <div class="header">...</div>
 * console.log(body.children[1].innerHTML); // <div class="row">...</div>
 * console.log(body.children[2].innerHTML); // <div class="row">...</div>
 */
function getBody(colDefs: Grid.ColDef[], data: Grid.DataRow[]): HTMLElement {
  const body = createBasicElement({ type: "div", className: styles.body });

  const header = getHeader(colDefs);
  body.appendChild(header);

  data.forEach((dataRow) => {
    const row = getRow(dataRow, colDefs);
    body.appendChild(row);
  });

  return body;
}

export { getBody };
