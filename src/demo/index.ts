/// <reference types="../lib/grid.global.d.ts" />

import getGrid from "../lib";

const container = document.getElementById("root");

const data = new Array(1000).fill(0).map((_, index) => ({
  id: index,
  name: window.crypto.randomUUID().slice(0, 8),
  age: window.crypto.getRandomValues(new Uint8Array(1)).slice(0, 2),
  address: window.crypto.randomUUID().slice(0, 8),
  city: window.crypto.randomUUID().slice(0, 8),
  state: window.crypto.randomUUID().slice(0, 2),
  zip: window.crypto.randomUUID().slice(0, 8)
}));

// Make column definitions regarding the data and Grid.ColDef type
const colDefs: Grid.ColDef[] = [
  {
    field: "id",
    title: "ID",
    type: "Integer"
  },
  {
    field: "name",
    title: "Name",
    type: "String"
  },
  {
    field: "age",
    title: "Age",
    type: "Integer"
  },
  {
    field: "address",
    title: "Address",
    type: "String"
  },
  {
    field: "city",
    title: "City",
    type: "String"
  },
  {
    field: "state",
    title: "State",
    type: "String"
  },
  {
    field: "zip",
    title: "Zip",
    type: "String"
  }
];

getGrid({
  container,
  data,
  colDefs
});
