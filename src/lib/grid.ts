import { getBody } from "./body/body";

export default function getGrid(options: Grid.Options) {
  const { colDefs: colDef, data, container } = options;

  const body = getBody(colDef, data);

  container.appendChild(body);
}
