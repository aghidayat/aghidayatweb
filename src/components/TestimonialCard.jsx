const TestimonialCard = ({ description, name, from }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex mt-3 text-sm">⭐️⭐️⭐️⭐️⭐️</div>
      <h3 className="mt-4 font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{from}</p>
    </div>
  );
};

export default TestimonialCard;
