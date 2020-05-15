import "./styles.css";
import _ from "lodash";
import positionRecords from "./position_records.json";

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

let categoricalData = [
  {
    name: "Personal",
    color: "hsla(300, 70%, 26%, 0.5)",
    data: [
      {
        fullName: "Frederick Brown",
        company: "Teletech Corp",
        position: "Manager",
        ic: true,
        netWorthScore: 7,
        netWorthRange: "$10MM-$25MM",
        ws: 732,
        p2g: [1, 0, "Excellent"],
        totalConnections: 14,
        relationships: "Personal",
        strength: 5,
        id: 2,
        name: "Frederick Brown",
        x: 7,
        y: 5,
        z: 14
      },
      {
        fullName: "Schultz Sanchez",
        company: "Fuelworks",
        position: "Partner",
        ic: false,
        netWorthScore: 5,
        netWorthRange: "$1MM-$5MM",
        p2g: [1, 2, "Excellent"],
        totalConnections: 25,
        relationships: "Personal",
        strength: 5,
        id: 32,
        name: "Schultz Sanchez",
        x: 5,
        y: 5,
        z: 25
      }
    ]
  },
  {
    name: "Nonprofit",
    color: "hsla(220, 54%, 25%, 0.5)",
    data: [
      {
        fullName: "Patrick Miller",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 5,
        netWorthRange: "$1MM-$5MM",
        ws: 782,
        p2g: [1, 0, "Excellent"],
        totalConnections: 10,
        relationships: "Nonprofit",
        strength: 5,
        badges: [
          {
            id: "IC",
            value: 1
          }
        ],
        id: 16,
        name: "Patrick Miller",
        x: 5,
        y: 5,
        z: 10
      },
      {
        fullName: "Alfred Cardin",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 5,
        name: "Alfred Cardin",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Alfred Cardin",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 6,
        name: "Alfred Cardin",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Sharlene Stout",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 7,
        name: "Sharlene Stout",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Charity Bender",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 8,
        name: "Charity Bender",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Georgina Valencia",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 9,
        name: "Georgina Valencia",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Fry Anderson",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 10,
        name: "Fry Anderson",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Elvira Schwartz",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 11,
        name: "Elvira Schwartz",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Dolly Logan",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 12,
        name: "Dolly Logan",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Holcomb Holt",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 13,
        name: "Holcomb Holt",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Gilliam Harding",
        company: "Zenith Foundation",
        position: "Board of Directors",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        ws: 773,
        p2g: [1, 0, "Excellent"],
        totalConnections: 29,
        relationships: "Nonprofit",
        strength: 4,
        id: 14,
        name: "Gilliam Harding",
        x: 8,
        y: 4,
        z: 29
      },
      {
        fullName: "Yesenia Stark",
        company: "Quilm",
        position: "Managing Director",
        ic: true,
        netWorthScore: 8,
        netWorthRange: "$25MM-$50MM",
        p2g: [3, 2, "Average"],
        totalConnections: 28,
        relationships: "Nonprofit",
        strength: 4,
        id: 33,
        name: "Yesenia Stark",
        x: 8,
        y: 4,
        z: 28
      }
    ]
  },
  {
    name: "Business",
    color: "hsla(103, 48%, 51%, 0.5)",
    data: [
      {
        fullName: "Amelia Lee",
        company: "Purple Orchid Resorts",
        position: "Manager",
        ic: false,
        netWorthScore: 4,
        netWorthRange: "$500K-$1MM",
        ws: 590,
        p2g: [2, 3, "Above Average"],
        totalConnections: 20,
        relationships: "Business",
        strength: 4,
        id: 15,
        name: "Amelia Lee",
        x: 4,
        y: 4,
        z: 20
      },
      {
        fullName: "Fred Thompson",
        company: "All World Adventures",
        position: "CEO",
        ic: false,
        netWorthScore: 6,
        netWorthRange: "$5MM-$10MM",
        ws: 759,
        p2g: [1, 1, "Excellent"],
        totalConnections: 18,
        relationships: "Business",
        strength: 4,
        id: 25,
        name: "Fred Thompson",
        x: 6,
        y: 4,
        z: 18
      },
      {
        fullName: "Gill Kaine",
        company: "All World Adventures",
        position: "Board",
        ic: true,
        netWorthScore: 3,
        netWorthRange: "$100K-$500K",
        ws: 691,
        p2g: [2, 1, "Above Average"],
        totalConnections: 23,
        relationships: "Business",
        strength: 4,
        id: 26,
        name: "Gill Kaine",
        x: 3,
        y: 4,
        z: 23
      },
      {
        fullName: "John W Russel",
        company: "BAILOUTSLEUTH COM FOUNDATION, INC",
        position: "Director",
        ic: true,
        netWorthScore: 3,
        netWorthRange: "$100K-$500K",
        p2g: [2, 4, "Above Average"],
        totalConnections: 5,
        relationships: "Business",
        strength: 4,
        id: 27,
        name: "John W Russel",
        x: 3,
        y: 4,
        z: 5
      },
      {
        fullName: "Tiffany Stewart",
        company: "DALLAS MAVERICKS FOUNDATION",
        position: "Board",
        ic: true,
        netWorthScore: 3,
        netWorthRange: "$100K-$500K",
        p2g: [3, 3, "Average"],
        totalConnections: 10,
        relationships: "Business",
        strength: 4,
        id: 28,
        name: "Tiffany Stewart",
        x: 3,
        y: 4,
        z: 10
      },
      {
        fullName: "Myra Newman",
        company: "Magnafone",
        position: "Sr Manager",
        ic: false,
        netWorthScore: 0,
        netWorthRange: "<$25K",
        p2g: [3, 3, "Average"],
        totalConnections: 25,
        relationships: "Business",
        strength: 4,
        id: 34,
        name: "Myra Newman",
        x: 0,
        y: 4,
        z: 25
      }
    ]
  }
];
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
console.log("draftSeriesData");
console.log(draftSeriesData);

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
