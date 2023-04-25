import { getHeader } from "./header";

describe("test header scope", function () {
  it("test getHeader", function (done) {
    const colDef: Grid.ColDef[] = [
      {
        field: "Name",
        title: "name",
        type: "String"
      }
    ];

    const header = getHeader(colDef);

    expect(header.outerHTML).toBe(
      '<div class="headerRow"><div class="headerCell">name</div></div>'
    );

    done();
  });
});
