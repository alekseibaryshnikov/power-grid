import styles from "./cell.module.scss";

export function getCell(value: unknown, dataType: Grid.DataType) {
  const column = document.createElement("div");

  column.classList.add(styles.cell);

  // TODO: Here we should handle the datatype.
  column.innerText = `${value}`;

  return column;
}
