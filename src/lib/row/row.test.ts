import { getRow } from "./row";

describe("test row scope", function () {
  it("test getRow", function (done) {
    const dataRow: Grid.DataRow = {
      Name: "name"
    };

    const colDef: Grid.ColDef[] = [
      {
        field: "Name",
        title: "name",
        type: "String"
      }
    ];

    const row = getRow(dataRow, colDef);

    expect(row.outerHTML).toBe(
      '<div class="row"><div class="cell">name</div></div>'
    );

    done();
  });
});
