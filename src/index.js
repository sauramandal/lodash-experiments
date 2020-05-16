//@ts-nocheck
import "./styles.css";
import _ from "lodash";
import positionRecords from "./position_records.json";
import categoricalData from "./categorical-data.json";

const arr = [1, 2, 3, 4, 5, 6];
const refinedArr = _.map(arr, f => f * 2);
// console.log("refinedArr", refinedArr);

const users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

const user = _.find(users, { lastName: "Doe", gender: "male" });
// console.log(user);

const bar = { foo: { key: "foo" } };
_.set(bar, "foo.items[0]", "An item");
// console.log("bar", bar);

const testObject = { a: [{ b: { c: 3 } }] };
let res = _.get(testObject, "a[0].b.c");
// console.log("result", res);

const draftSeriesData = [];
categoricalData.forEach(categoryItem => {
  let categoricalSeriesData = [];
  const groupedCategoricalData = _.groupBy(
    categoryItem.data,
    item => item.x + "," + item.y
  );
  const groupedSeriesData = {
    name: categoryItem.name,
    color: categoryItem.color
  };
  for (let [coordinate, groupedConnection] of Object.entries(
    groupedCategoricalData
  )) {
    const draftGroupedData = {
      name: categoryItem.name,
      netWorthScore: parseInt(coordinate.split(",")[0]),
      strength: parseInt(coordinate.split(",")[1]),
      netWorthRange: groupedConnection[0].netWorthRange,
      x: parseInt(coordinate.split(",")[0]) + Math.random() * 0.25 + 0.25,
      y: parseInt(coordinate.split(",")[1]) + Math.random() * 0.25 + 0.25,
      clusterSize: groupedConnection.length
    };
    const groupedMetaData = [];
    groupedConnection.forEach(connection => groupedMetaData.push(connection));
    draftGroupedData.data = groupedMetaData;
    categoricalSeriesData.push(draftGroupedData);
  }
  groupedSeriesData.data = categoricalSeriesData;
  // console.log('categoricalSeriesData'); console.log(categoricalSeriesData)
  draftSeriesData.push(groupedSeriesData);
});
// console.log("draftSeriesData");
// console.log(draftSeriesData);

const groupedData = _.groupBy(
  Array.from(categoricalData, item => item.data).flat(),
  connection => connection.x + "," + connection.y
);
console.log(groupedData);

const result = [],
  mixedData = [];
let mixedConnections = [];
let isMixedConnectionDone = false;
const seriesData = [
  { name: "Personal", data: [] },
  { name: "Nonprofit", data: [] },
  { name: "Business", data: [] },
  { name: "Mixed", data: [] }
];
let connData = [];
for (let [coordinate, connections] of Object.entries(groupedData)) {
  const gp = _.groupBy(connections, c => c.relationships);
  const isMixed = Object.entries(gp).length > 1 ? true : false;
  // console.log(gp)
  const obj = {
    name: isMixed ? "Mixed" : Object.keys(gp)[0],
    x: parseInt(coordinate.split(",")[0]),
    y: parseInt(coordinate.split(",")[1])
  };
  // console.log(obj)
  connData.push(obj);
  for (let [key, values] of Object.entries(gp)) {
    if (isMixed) {
      values.forEach(v => seriesData[3].data.push(v));
    } else {
      const ind = _.findIndex(seriesData, { name: key });
      values.forEach(v => seriesData[ind].data.push(v));
    }

    // console.log(ind)
  }
  // const ind = _.findIndex(seriesData, {name: catData.name});
  // console.log(mixedConnections)
}
// console.log(_.groupBy(connData, data => data.name))
// console.log(seriesData);
const resultSeriesData = [];
seriesData.forEach(d => {
  const resdata = [];
  const resdataObj = { name: d.name, color: "", data: [] };
  // const groupedData = []
  const g = _.groupBy(d.data, item => item.x + "," + item.y);
  for (let [coordinate, connections] of Object.entries(g)) {
    resdataObj.data.push({
      name: d.name,
      x: parseInt(coordinate.split(",")[0]),
      y: parseInt(coordinate.split(",")[1]),
      z: connections.length,
      data: connections
    });
  }
  resultSeriesData.push(resdataObj);
  // console.log(resdata)

  console.log(g);
});
console.log(resultSeriesData);

const getChunks = _.chunk(positionRecords, 20);
// console.log("Chunks", getChunks)

let results = _.groupBy(
  positionRecords,
  ob => ob.detailedObjectMap.source_info.src_type
);
// console.log(JSON.stringify(results));

let countedRecords = _.countBy(
  positionRecords,
  c => c.detailedObjectMap.contact.src_full_name === "MARK CUBAN"
);
// console.log(countedRecords);
// console.log(results["GS-PF"]);
let futureSumRevenue = _.chain(results["GS-PF"])
  .filter(f => f.detailedObjectMap.org_stats.assets)
  .sum()
  .value();
// console.log(futureSumRevenue);
