import { getBody } from "./body";

describe("test body scope", function () {
  it("test getBody function", function (done) {
    const colDefs: Grid.ColDef[] = [
      {
        field: "name",
        title: "Name",
        type: "String"
      },
      {
        field: "address",
        title: "Address",
        type: "String"
      },
      {
        field: "phone",
        title: "Phone",
        type: "String"
      }
    ];

    const data = [
      {
        name: "John Doe",
        address: "123 Main Street",
        phone: "555-555-5555"
      },
      {
        name: "Jane Doe",
        address: "456 Main Street",
        phone: "555-555-5555"
      },
      {
        name: "John Smith",
        address: "789 Main Street",
        phone: "555-555-5555"
      },
      {
        name: "Jane Smith",
        address: "012 Main Street",
        phone: "555-555-5555"
      }
    ];

    const body = getBody(colDefs, data);

    expect(body.outerHTML).toBe(
      '<div class="body"><div class="headerRow"><div class="headerCell">Name</div><div class="headerCell">Address</div><div class="headerCell">Phone</div></div><div class="row"><div class="cell">John Doe</div><div class="cell">123 Main Street</div><div class="cell">555-555-5555</div></div><div class="row"><div class="cell">Jane Doe</div><div class="cell">456 Main Street</div><div class="cell">555-555-5555</div></div><div class="row"><div class="cell">John Smith</div><div class="cell">789 Main Street</div><div class="cell">555-555-5555</div></div><div class="row"><div class="cell">Jane Smith</div><div class="cell">012 Main Street</div><div class="cell">555-555-5555</div></div></div>'
    );

    done();
  });
});
