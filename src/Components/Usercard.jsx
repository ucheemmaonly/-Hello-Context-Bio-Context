function Usercard({ user, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex justify-center">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="h-24 w-24 rounded-full object-cover ring-4 ring-gray-100 transition duration-300 group-hover:ring-blue-100"
        />
      </div>

      <div className="mt-5 text-center">
        <h2 className="text-lg font-bold text-blue-900">
          {user.firstName} {user.lastName}
        </h2>

        <p className="mt-1 text-sm font-medium text-blue-600">
          {user.company.title}
        </p>

        <p className="mt-3 truncate text-sm text-gray-500">{user.email}</p>
      </div>

      <div className="mt-5 border-t border-gray-100 pt-4 text-center">
        <span className="text-sm font-semibold text-gray-700 transition group-hover:text-blue-600">
          View Profile →
        </span>
      </div>
    </div>
  );
}

export default Usercard;
