const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="py-2 w-full">
      <div className="h-1 w-full bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
          }`}
        ></div>
        <p>{progressPercentage} % complete</p>
      </div>
    </div>
  );
};

export default ProgressBar;
