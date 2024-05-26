export type buttonDataType = {
  icon: string;
  name: string;
};
export default function ButtonLink({
  buttonData,
}: {
  buttonData: buttonDataType;
}) {
  const { name, icon } = buttonData;
  return (
    <button className="text-sm w-full  h-12 p-2 flex items-center gap-4 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors text-gray-300">
      <img src={icon} alt={name} />
      {name}
    </button>
  );
}
