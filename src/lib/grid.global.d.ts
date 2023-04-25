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
}
