import { getCell } from "../cell/cell";
import styles from "./row.module.scss";

export function getRow(
  dataRow: Grid.DataRow,
  colDefs: Grid.ColDef[]
): HTMLDivElement {
  const row = document.createElement("div");

  row.classList.add(styles.row);

  Object.entries(dataRow).forEach(([field, value]) => {
    const colDef = colDefs.find((cd) => cd.field === field);

    const cell = getCell(value, colDef.type);

    row.appendChild(cell);
  });

  return row;
}
