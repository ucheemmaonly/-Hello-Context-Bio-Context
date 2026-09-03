import { useEffect } from "react";

function Usermodal({ selectedUser, onClose }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm`}>
      <div
        onClick={function (event) {
          event.stopPropagation();
        }}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>

            <p className="mt-1 text-sm text-gray-500">
              Full profile information
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-gray-200 hover:text-gray-900">
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
            <img
              src={selectedUser.image}
              alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-gray-100"/>

            <div className="mt-4 sm:ml-6 sm:mt-0">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedUser.firstName} {selectedUser.lastName}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                @{selectedUser.selectedUsername}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">
              Personal Information
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Age
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedUser.age}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Gender
                </p>

                <p className="mt-1 font-semibold capitalize text-gray-900">
                  {selectedUser.gender}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Email
                </p>

                <p className="mt-1 break-all font-semibold text-gray-900">
                  {selectedUser.email}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Phone
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedUser.phone}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Birth Date
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedUser.birthDate}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  selectedUsername
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedUser.selectedUsername}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">Address</h4>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                {selectedUser.address.address}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {selectedUser.address.city}, {selectedUser.address.state}
              </p>

              <p className="text-sm text-gray-500">
                {selectedUser.address.country}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">Education</h4>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                {selectedUser.university}
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">Company</h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Company
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedUser.company.name}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Title
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedUser.company.title}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Department
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedUser.company.department}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usermodal;
