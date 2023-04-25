import { createBasicElement } from "../utils/element";
import styles from "./cell.module.scss";
import { defaultFormatter } from "./formatters";

/**
 * This function takes in a value and a column type and returns a formatted string
 * representation of the value.
 *
 * @param {unknown} value The value to format.
 * @param {Grid.DataType} type The column type.
 * @param {Grid.CellFunction} valueFormatter The value formatter function.
 * @param {boolean} noFormat Whether to skip formatting.
 * @returns {string} A formatted string representation of the value.
 *
 * @example
 * const value = 123456789;
 * const type = "number";
 * const valueFormatter = (value) => value.toFixed(2);
 * const formattedValue = formatValue(value, type, valueFormatter);
 * console.log(formattedValue); // 123,456,789.00
 */
function formatValue(
  value: unknown,
  type: Grid.DataType,
  valueFormatter: Grid.CellFunction,
  noFormat?: boolean
): string {
  if (noFormat) {
    return `${value}`;
  }

  if (valueFormatter) {
    return valueFormatter(value);
  }

  return defaultFormatter(value, type);
}

/**
 * This function takes in a value and a column definition and returns a HTML div
 * element containing the value.
 *
 * @param {unknown} value The value to display.
 * @param {Grid.ColDef} colDef The column definition.
 * @returns {HTMLDivElement} A HTML div element containing the value.
 *
 * @example
 * const colDef = {
 *  headerName: "Name",
 *  field: "name",
 *  type: "string",
 * };
 * const value = "John Doe";
 * const cell = getCell(value, colDef);
 * console.log(cell.innerHTML); // John Doe
 */
function getCell(value: unknown, colDef: Grid.ColDef): HTMLDivElement {
  const column = createBasicElement({ type: "div", className: styles.cell });

  const { valueFormatter, valueGetter, type } = colDef;

  const finalValue =
    type === "Object" && valueGetter ? valueGetter(value) : value;

  column.innerHTML = formatValue(
    finalValue,
    type,
    valueFormatter,
    colDef.noFormat
  );

  return column as HTMLDivElement;
}

export { getCell };
