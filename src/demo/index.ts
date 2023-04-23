/// <reference types="../lib/grid.global.d.ts" />

import getGrid from "../lib";

const container = document.getElementById("root");

// Here is some generated data
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
    address: "456 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  },
  {
    id: 3,
    name: "John Smith",
    age: 35,
    address: "789 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  }
];

// Make column definitions regarding the data and Grid.ColDef type
const colDefs = [
  {
    field: "id",
    title: "ID"
  },
  {
    field: "name",
    title: "Name"
  },
  {
    field: "age",
    title: "Age"
  },
  {
    field: "address",
    title: "Address"
  },
  {
    field: "city",
    title: "City"
  },
  {
    field: "state",
    title: "State"
  },
  {
    field: "zip",
    title: "Zip"
  }
];

getGrid({
  container,
  data,
  colDefs
});
