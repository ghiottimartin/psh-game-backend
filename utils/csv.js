const { Parser } = require('json2csv');

const downloadResource = async (res, fileName, fields, data) => {
  const json2csv = new Parser({ fields });
  const csv = json2csv.parse(data);
  res.header('Content-Type', 'text/csv');
  res.attachment(fileName);
  return res.send(csv);
};

exports.downloadResource = downloadResource;