declare namespace Grid {
  export type Options = {
    data: DataRow[];
    colDefs: ColDef[];
    container: HTMLElement;
  };

  export type ColDef = {
    field: string;
    title: string;
    type: DataType;
    noFormat?: boolean;
    valueGetter?: CellFunction;
    valueFormatter?: CellFunction;
    isSortable?: boolean;
  };

  export type CellFunction = (value: unknown) => string;

  export type DataRow = Record<string, unknown>;

  export type DataType =
    | "Integer"
    | "Float"
    | "Decimal"
    | "String"
    | "Boolean"
    | "Date"
    | "Object";

  export type StateManager = {
    rawData: Grid.DataRow[];
    data: Grid.DataRow[];
    sorting: "asc" | "desc" | null;
    filter: Record<string, unknown> | null;
    grouping: Record<string, unknown> | null;
  };
}
