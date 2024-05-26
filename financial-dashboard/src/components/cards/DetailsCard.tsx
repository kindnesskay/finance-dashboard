export default function DetailsCard() {
  return (
    <div className="p-3 mr-auto ml-auto flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-md mt-4 max-w-[180px]">
      <div className="text-center ">
        <p className="text-xl font-semibold text-gray-300">Smart investment</p>
        <p className="text-xs text-gray-500">
          We have developed a service for novice investors
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 p-2 text-sm font-semibold h-8 flex items-center rounded-md text-gray-300">
        More details
      </button>
    </div>
  );
}
