import React, { useState } from "react";
import iconfil from "../../../public/filter.png";
import res from "../../../public/reset.png";
interface Donation {
  id: number;
  name: string;
  address: string;
  date: string;
  type: string;
  status: string;
}

const Donations: React.FC = () => {
  const donations: Donation[] = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St",
      date: "2024-10-01",
      type: "Machine",
      status: "Complete",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Maple Ave",
      date: "2024-10-15",
      type: "Book",
      status: "Processing",
    },
    {
      id: 3,
      name: "Alice Johnson",
      address: "789 Oak St",
      date: "2024-09-30",
      type: "Machine",
      status: "Complete",
    },
    {
      id: 4,
      name: "Bob Brown",
      address: "321 Pine Rd",
      date: "2024-10-20",
      type: "Book",
      status: "Processing",
    },
    {
      id: 5,
      name: "Charlie Green",
      address: "654 Cedar Ln",
      date: "2024-10-22",
      type: "Machine",
      status: "Complete",
    },
    {
      id: 6,
      name: "Charlie Green",
      address: "654 Cedar Ln",
      date: "2024-10-22",
      type: "Hand",
      status: "Complete",
    },
    // Add more donations here for demo purposes
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [filter, setFilter] = useState<{
    date: string;
    type: string;
    status: string;
  }>({
    date: "",
    type: "",
    status: "",
  });

  const itemsPerPage = 3; // Adjust this value as needed

  // Extract unique filter options from donations data
  const uniqueDates = Array.from(
    new Set(donations.map((donation) => donation.date))
  );
  const uniqueTypes = Array.from(
    new Set(donations.map((donation) => donation.type))
  );
  const uniqueStatuses = Array.from(
    new Set(donations.map((donation) => donation.status))
  );

  // Filter donations based on the current filter values
  const filteredDonations = donations.filter((donation) => {
    const matchesDate = filter.date ? donation.date === filter.date : true;
    const matchesType = filter.type ? donation.type === filter.type : true;
    const matchesStatus = filter.status
      ? donation.status === filter.status
      : true;

    return matchesDate && matchesType && matchesStatus;
  });

  const endIndex = Math.min(
    currentIndex + itemsPerPage,
    filteredDonations.length
  );

  const handleNext = () => {
    if (endIndex < filteredDonations.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCurrentIndex(0); // Reset to the first page when filter changes
  };

  const handleResetFilters = () => {
    setFilter({ date: "", type: "", status: "" });
    setCurrentIndex(0);
  };

  return (
    <div className="flex-1 p-6">
      <h1 className="text-4xl font-bold text-[#202224] font-nunito mb-6">
        Donations
      </h1>

      {/* Filter Bar */}
      <div className="xl:flex grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 bg-white w-fit rounded-lg mb-3">
        <div className="border-r-[1px] px-5 py-5 flex justify-center ">
          <img src={iconfil} alt="Filter" className="h-6" />
        </div>
        <div className="border-r-[1px]  px-5 py-5 ">
          <span className="font-nunito font-bold text-[14px]">Filter By</span>
        </div>
        <div className="border-r-[1px] px-5 py-5 lg:border-t-0 border-t-[1px]">
          <select
            name="date"
            value={filter.date}
            onChange={handleFilterChange}
            className="bg-transparent border-none text-[#202224] font-nunito font-bold text-[14px] leading-[19.1px] text-left px-2"
          >
            <option value="">Date</option>
            {uniqueDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div className="border-r-[1px] px-5 py-5 xl:border-t-0 border-t-[1px]">
          <select
            name="type"
            value={filter.type}
            onChange={handleFilterChange}
            className="bg-transparent border-none text-[#202224] font-nunito font-bold text-[14px] leading-[19.1px] text-left px-2"
          >
            <option value="">Donation Type</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="border-r-[1px] px-5 py-5 xl:border-t-0 border-t-[1px]">
          <select
            name="status"
            value={filter.status}
            onChange={handleFilterChange}
            className="bg-transparent border-none text-[#202224] font-nunito font-bold text-[14px] leading-[19.1px] text-left px-2"
          >
            <option value="">Donation Status</option>
            {uniqueStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="px-5 py-5 xl:border-t-0 border-t-[1px]">
          {" "}
          <button
            onClick={handleResetFilters}
            className="text-red-500 flex items-center px-2 font-bold text-[14px]"
          >
            <img src={res} alt="Reset" className="inline h-5 mr-1  " />
            Reset Filter
          </button>
        </div>
      </div>

      {/* Donations Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-[#FCFDFD] border-collapse border-gray-300 rounded-lg border-spacing-2 font-nunito">
          <thead>
            <tr>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300">
                ID
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300">
                NAME
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300">
                ADDRESS
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300">
                DATE
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300">
                TYPE
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.slice(currentIndex, endIndex).map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-100">
                <td className="px-10 py-5 border-b border-gray-300">
                  {donation.id}
                </td>
                <td className="px-10 py-5 border-b border-gray-300">
                  {donation.name}
                </td>
                <td className="px-10 py-5 border-b border-gray-300">
                  {donation.address}
                </td>
                <td className="px-10 py-5 border-b border-gray-300">
                  {donation.date}
                </td>
                <td className="px-10 py-5 border-b border-gray-300">
                  {donation.type}
                </td>
                <td className="px-10 py-5 border-b border-gray-300">
                  <span
                    className={`inline-block w-24 px-4 py-1 text-sm font-bold rounded text-center font-nunito ${
                      donation.status === "Complete"
                        ? "bg-[#00B69B]/50 text-[#00B69B]"
                        : "bg-[#6226EF]/50 text-[#6226EF]"
                    }`}
                  >
                    {donation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mb-6 mt-4">
          <div className="font-nunito text-[14px] leading-[19.1px]">
            Showing {Math.min(currentIndex + 1, filteredDonations.length)}-
            {Math.min(endIndex, filteredDonations.length)} of{" "}
            {filteredDonations.length}
          </div>
          <div className="flex">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-[70px] h-[30px] border rounded-l-lg ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{ background: "#FAFBFD", border: "0.6px solid #D5D5D5" }}
            >
              &#10094; {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              disabled={endIndex >= filteredDonations.length}
              className={`flex items-center justify-center w-[70px] h-[30px] border rounded-r-lg ${
                endIndex >= filteredDonations.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              style={{ background: "#FAFBFD", border: "0.6px solid #D5D5D5" }}
            >
              &#10095; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
