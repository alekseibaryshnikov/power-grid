import { getCell } from "./cell";

describe("test cell scope", function () {
  it("test getCell", function (done) {
    const value = "value";

    const colDef: Grid.ColDef = {
      field: "Name",
      title: "name",
      type: "String"
    };

    const cell = getCell(value, colDef);

    expect(cell.outerHTML).toBe('<div class="cell">value</div>');

    done();
  });
});
