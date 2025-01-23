export const Header = ({
  color,
  labelUser,
}: {
  color: string;
  labelUser: string;
}) => {
  return (
    <div
      className="bg-blue-900 text-white p-4 fixed top-0 left-0 w-full flex justify-end"
      style={{ backgroundColor: color }}
    >
      <h1 className=" font-bold text-right text-2xl">{labelUser}</h1>
    </div>
  );
};
