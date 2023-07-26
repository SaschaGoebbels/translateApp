export function exportDataToJSON(data, fileName) {
  //naming
  const exportName = 'translateApp - export';
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const time = date
    .getHours()
    .toString()
    .concat(':', date.getMinutes().toString());
  const dateBackWards = year.concat(' ', month, ' ', day, ' ', time);
  const exportFullName = dateBackWards.concat(' ', exportName, '.json');
  console.log(exportFullName);
  //export
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(data)
  )}`;
  const link = document.createElement('a');
  link.href = jsonString;
  link.download = exportFullName;
  // link.download = 'data.json';

  link.click();
}
