const createCsvWriter = require("csv-writer").createObjectCsvWriter;

function generateCSV(data, filePath) {
  // Define the CSV writer
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: "fullname", title: "FullName" },
      { id: "position", title: "POSITION" },
      { id: "age", title: "AGE" },
      // Add more columns as needed
    ],
  });

  // Write the data to the CSV file
  csvWriter
    .writeRecords(data)
    .then(() => console.log("CSV file generated successfully."))
    .catch((error) => console.error("Error generating CSV file:", error));
}

// Example usage
const data = [
  { fullname: "Jeniffer Cox", position: "President", age: 40 },
  { fullname: "Wei Heartred", position: "Vice President", age: 59 },
  { fullname: "caramel", position: "Manager", age: 57 },
  { fullname: "Joel Noor", position: "Accountant", age: 90 },
  { fullname: "Robert White", position: "clerk", age: 98 },
  // Add more data objects as needed
];

const filePath = "output.csv"; // Specify the desired output file path

generateCSV(data, filePath);
