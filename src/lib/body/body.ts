import { getHeader } from "../header/header";
import { getRow } from "../row/row";
import styles from "./body.module.scss";

export function getBody(colDefs: Grid.ColDef[], data: Grid.DataRow[]) {
  const body = document.createElement("div");

  body.classList.add(styles.body);

  const header = getHeader(colDefs);

  body.appendChild(header);

  data.forEach((dataRow) => {
    const row = getRow(dataRow, colDefs);

    body.appendChild(row);
  });

  return body;
}
