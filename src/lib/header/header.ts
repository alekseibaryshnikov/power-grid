import { createBasicElement } from "../utils/element";
import styles from "./header.module.scss";

/**
 * Get a cell element.
 * @param {Grid.ColDef} cd The column definition.
 * @returns {HTMLElement} The cell element.
 * @example const colDef: Grid.ColDef = {
 *  field: "Name",
 *  title: "name",
 *  type: "String"
 * };
 * const cell = getCell(colDef);
 * expect(cell.outerHTML).toBe('<div class="headerCell">name</div>');
 */
function getCell(cd: Grid.ColDef): HTMLElement {
  const cell = createBasicElement({
    type: "div",
    className: styles.headerCell
  });

  cell.innerHTML = cd.title;

  return cell;
}

/**
 * Get a header element.
 * @param {Grid.ColDef[]} colDef The column definitions.
 * @returns {HTMLElement} The header element.
 * @example const colDef: Grid.ColDef[] = [
 *  {
 *   field: "Name",
 *   title: "name",
 *   type: "String"
 *  }
 * ];
 * const header = getHeader(colDef);
 * expect(header.outerHTML).toBe(
 *  '<div class="headerRow"><div class="headerCell">name</div></div>'
 * );
 */
function getHeader(colDef: Grid.ColDef[]): HTMLElement {
  const row = createBasicElement({
    type: "div",
    className: styles.headerRow
  });

  colDef.forEach((cd) => {
    const cell = getCell(cd);

    row.appendChild(cell);
  });

  return row;
}

export { getHeader };
