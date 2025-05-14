// components/Spinner.tsx

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] w-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default Spinner;
