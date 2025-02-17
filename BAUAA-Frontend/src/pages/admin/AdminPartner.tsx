import React, { useState } from "react";
import admin from "../../../public/picpar.png";
import backgr from "../../../public/Bg.png";
interface Partner {
  name: string;
  image: string;
}

const AdminPartner: React.FC = () => {
  // Initialize partners with 4 const partners
  const [partners, setPartners] = useState<Partner[]>([
    {
      name: "Partner One",
      image: admin,
    },
    {
      name: "Partner Two",
      image: admin,
    },
    {
      name: "Partner Three",
      image: admin,
    },
    {
      name: "Partner Four",
      image: admin,
    },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [newPartner, setNewPartner] = useState<Partner>({
    name: "",
    image: "",
  });

  const handleAddPartner = () => {
    if (newPartner.name.trim() && newPartner.image.trim()) {
      setPartners([...partners, newPartner]);
      setNewPartner({ name: "", image: "" });
      setShowModal(false);
    } else {
      alert("Please provide both name and image URL.");
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPartner((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 p-6 w-full ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[32px] font-bold text-gray-800 font-nunito">
          Partners
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-[#4379EE] text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add New Partner
        </button>
      </div>

      <div className=" flex flex-wrap gap-4 w-full font-nunito">
        {/* Set gap to 4 for margin between boxes */}
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col items-center gap-3 justify-center p-4 transition-transform transform hover:scale-105"
            style={{ width: "262px", height: "225px", opacity: "1", backgroundImage: `url(${backgr})`,}} // Set width and height
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-28 h-28 rounded-full object-cover"
            />
            <p className="text-gray-800 mt-3 text-center font-bold">
              {partner.name}
            </p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Partner</h2>
            <input
              type="text"
              placeholder="Partner Name"
              value={newPartner.name}
              onChange={(e) =>
                setNewPartner({ ...newPartner, name: e.target.value })
              }
              className="border p-2 mb-4 w-full rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-2 mb-4 w-full rounded-md"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddPartner}
                className="bg-[#4379EE] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="ml-2 bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPartner;
