import styles from "./header.module.scss";

export function getHeader(colDef: Grid.ColDef[]): HTMLDivElement {
  const row = document.createElement("div");

  row.classList.add(styles.tableHeaderRow);

  colDef.forEach((cd) => {
    const cell = getCell(cd);

    row.appendChild(cell);
  });

  return row;
}

function getCell(cd: Grid.ColDef) {
  const column = document.createElement("div");

  column.innerHTML = cd.title;

  column.classList.add(styles.tableHeaderCell);

  return column;
}
