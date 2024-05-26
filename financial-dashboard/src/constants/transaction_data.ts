const transaction_data = [
  {
    icon: "/assets/phone.svg",
    item: "Apple Store",
    value: 15,
    incomming: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    icon: "/assets/tv.svg",
    item: "Netflix",
    value: 10,
    incomming: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    icon: "/assets/chats.svg",
    item: "Tinder",
    value: 18,
    incomming: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    icon: "/assets/music.svg",
    item: "Sportify",
    value: 12,
    incomming: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    icon: "/assets/phone.svg",
    item: "Client",
    value: 20,
    incomming: true,
    date: new Date().toLocaleTimeString(),
  },
  {
    icon: "/assets/tv.svg",
    item: "Deposit",
    value: 100,
    incomming: true,
    date: new Date().toLocaleTimeString(),
  },
  {
    icon: "/assets/chats.svg",
    item: "Transfer",
    value: 250,
    incomming: true,
    date: new Date().toLocaleTimeString(),
  },
  {
    icon: "/assets/music.svg",
    item: "Deposit",
    value: 10,
    incomming: false,
    date: new Date().toLocaleTimeString(),
  },
];

const expArray = transaction_data.filter((item) => {
  return !item.incomming;
});
export const Expenses_data = expArray.map((item) => ({
  name: item.item,
  count: item.value,
}));
const incArray = transaction_data.filter((item) => {
  return item.incomming;
});
export const Income_data = incArray.map((item) => ({
  name: item.item,
  count: item.value,
}));
export default transaction_data;
