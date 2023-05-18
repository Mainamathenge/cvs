const PDFDocument = require("pdfkit");
const fs = require("fs");

function generatePDF(data, filePath) {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(16).text("Employee Report", { align: "center" });
  doc.moveDown();

  doc.fontSize(14).text("Employee Details:");
  doc.moveDown();

  data.forEach((employee, index) => {
    doc.fontSize(12).text(`Employee ${index + 1}`);
    doc.fontSize(10).text(`Full Name: ${employee.fullname}`);
    doc.fontSize(10).text(`Position: ${employee.position}`);
    doc.fontSize(10).text(`Age: ${employee.age}`);
    doc.moveDown();
  });

  doc.end();
  console.log("PDF file generated successfully.");
}


// Example usage
const data = [
  { fullname: "Jeniffer Cox", position: "President", age: 40 },
  { fullname: "Wei Heartred", position: "Vice President", age: 59 },
  { fullname: "caramel", position: "Manager", age: 57 },
  { fullname: "Joel Noor", position: "Accountant", age: 90 },
  { fullname: "Robert White", position: "clerk", age: 98 },
]; // Specify your data array
const filePath = "output.pdf"; // Specify the desired output file path

generatePDF(data, filePath);
