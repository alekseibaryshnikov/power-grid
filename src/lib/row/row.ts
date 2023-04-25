import { getCell } from "../cell/cell";
import { createBasicElement } from "../utils/element";
import styles from "./row.module.scss";

/**
 * Get a row element.
 * @param {Grid.DataRow} dataRow The data row.
 * @param {Grid.ColDef[]} colDefs The column definitions.
 * @returns {HTMLElement} The row element.
 * @example
 * const dataRow: Grid.DataRow = {
 *  Name: "name"
 * };
 * const colDef: Grid.ColDef[] = [
 *  {
 *   field: "Name",
 *   title: "name",
 *   type: "String"
 *  }
 * ];
 * const row = getRow(dataRow, colDef);
 * expect(row.outerHTML).toBe(
 *  '<div class="row"><div class="cell">name</div></div>'
 * );
 */

function getRow(dataRow: Grid.DataRow, colDefs: Grid.ColDef[]): HTMLElement {
  const row = createBasicElement({ type: "div", className: styles.row });

  Object.entries(dataRow).forEach(([field, value]) => {
    const colDef = colDefs.find((cd) => cd.field === field);

    const cell = getCell(value, colDef);

    row.appendChild(cell);
  });

  return row;
}

export { getRow };
