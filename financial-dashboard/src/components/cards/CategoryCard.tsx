export type categoryCardDataType = {
  icon: string;
  text: string;
  value: number;
};
export interface CategoryCardData {
  categoryCardData: categoryCardDataType;
}

export default function CategoryCard({ categoryCardData }: CategoryCardData) {
  const { icon, text, value } = categoryCardData;
  return (
    <div className="h-28 w-28 shrink-0 flex flex-col justify-between items-center aspect-square bg-slate-700 rounded-lg p-4">
      <div className="h-12 w-12">
        <img src={icon} alt={text} />
      </div>
      <div className="text-sm text-white">
        <p className="font-thin">{text}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
