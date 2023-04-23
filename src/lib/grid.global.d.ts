declare namespace Grid {
  export type Options = {
    data: DataRow[];
    colDefs: ColDef[];
    container: HTMLElement;
  };

  export type ColDef = {
    field: string;
    title: string;
    type?: DataType;
  };

  export type DataRow = Record<string, unknown>;

  export enum DataType {
    Integer = "Integer",
    Float = "Float",
    Decimal = "Decimal",
    String = "String",
    Boolean = "Boolean",
    Date = "Date"
  }
}
