type props = {
  key: string;
  data: string | boolean | unknown | number;
};

function SetData({ key, data }: props) {
  const res = localStorage.setItem(key, JSON.stringify(data));

  return res;
}
export default SetData;
