
function GetData(key: string)  {
  const data = JSON.parse(localStorage.getItem(key) as string);

  return data;
}
export default GetData;
