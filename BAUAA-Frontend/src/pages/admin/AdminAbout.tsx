import React, { useState } from "react";
import axios from "axios";

interface FormData {
  title: string;
  description: string;
  photo: File | null;
}

const AdminAbout: React.FC = () => {
  const initialData = {
    aboutHeader: { title: "", description: "", photo: null },
    whyBAUAA: { title: "", description: "", photo: null },
    whoWeAre: { title: "", description: "", photo: null },
    aboutBanner: { title: "", description: "", photo: null },
    whatyouget: { title: "", description: "", photo: null },
  };

  const [formData, setFormData] = useState<{
    aboutHeader: FormData;
    whyBAUAA: FormData;
    whoWeAre: FormData;
    aboutBanner: FormData;
    whatyouget: FormData;
  }>(initialData);

  const [checkboxes, setCheckboxes] = useState({
    aboutHeader: false,
    whyBAUAA: false,
    whoWeAre: false,
    aboutBanner: false,
    whatyouget: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof typeof formData,
    field: keyof FormData
  ) => {
    if (checkboxes[key]) {
      setFormData((prev) => ({
        ...prev,
        [key]: { ...prev[key], [field]: e.target.value },
      }));
    }
  };

  const handleCheckboxChange = (key: keyof typeof formData) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    if (Object.values(checkboxes).some((isChecked) => isChecked)) {
      const formDataToSend = new FormData();
      let index = 0;
      Object.entries(formData).forEach(([key, value]) => {
        if (checkboxes[key as keyof typeof formData]) {
          formDataToSend.append(`data[${index}][section_name]`, key);
          formDataToSend.append(`data[${index}][title]`, value.title);
          formDataToSend.append(
            `data[${index}][description]`,
            value.description
          );

          if (value.photo) {
            // formDataToSend.append(
            //   `data[${index}][list_of_content][title]`,
            //   "lOL"
            // );
            // formDataToSend.append(
            //   `data[${index}][list_of_content][image]`,
            //   value.photo
            // );
            // formDataToSend.append(`data[${index}][image]`, value.photo);
            formDataToSend.append(
              `data[${index}][list_of_content][image_header][image]`,
              value.photo
            );
          }
          index++;
        }
      });
      formDataToSend.append("regNum", "2");

      try {
        const response = await axios.post(
          "http://localhost:8080/update-section/about",
          formDataToSend,
          {
            // headers: {
            //   "Content-Type": "multipart/form-data",
            // },
          }
        );
        console.log("Response:", response.data);
        alert("Data saved successfully!");
      } catch (error) {
        console.error("Error saving data:", error);
        alert("Failed to save data.");
      }
    }
  };

  const handleDiscard = () => {
    if (Object.values(checkboxes).some((isChecked) => isChecked)) {
      setFormData(initialData);
      setCheckboxes({
        aboutHeader: false,
        whyBAUAA: false,
        whoWeAre: false,
        aboutBanner: false,
        whatyouget: false,
      });
    }
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof formData
  ) => {
    const fileList = event.target.files;
    if (fileList && fileList[0] && checkboxes[key]) {
      setFormData((prev) => ({
        ...prev,
        [key]: { ...prev[key], photo: fileList[0] },
      }));
    }
  };

  return (
    <div className="p-8 flex flex-col space-y-6 w-full bg-white rounded-lg shadow-md">
      {(
        [
          "aboutHeader",
          "whyBAUAA",
          "whoWeAre",
          "aboutBanner",
          "whatyouget",
        ] as const
      ).map((key) => (
        <div key={key} className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={checkboxes[key]}
            onChange={() => handleCheckboxChange(key)}
            className="w-6 h-6 rounded border border-[#4880FF]"
          />
          <div className="flex flex-col w-full space-y-4">
            <p className="font-nunito text-[18px] font-bold text-[#4880FF]">
              KEY: {key}
            </p>

            <div className="flex items-center space-x-4 font-nunito">
              <div
                className="rounded-full w-[80px] h-[80px] shadow-lg bg-center bg-cover font-nunito"
                style={{
                  backgroundImage: formData[key].photo
                    ? `url(${URL.createObjectURL(formData[key].photo)})`
                    : "url('../../../public/defualt.png')",
                }}
              ></div>
            </div>

            <label
              htmlFor={`${key}-photo-upload`}
              className="font-nunito text-[14px] font-semibold flex left-0 text-[#4379EE] cursor-pointer text-center mt-2"
            >
              Update Photo
            </label>
            <input
              type="file"
              id={`${key}-photo-upload`}
              accept="image/*"
              onChange={(e) => handleImageUpload(e, key)}
              className="hidden"
            />

            <div>
              <label
                htmlFor={`${key}-title`}
                className="font-nunito text-[14px] font-semibold text-[#606060]"
              >
                Title
              </label>
              <input
                type="text"
                id={`${key}-title`}
                placeholder={formData[key].title || "Enter title here"}
                value={checkboxes[key] ? formData[key].title : ""}
                onChange={(e) => handleInputChange(e, key, "title")}
                disabled={!checkboxes[key]}
                className="w-full h-[52px] p-2 mt-1 bg-[#F5F6FA] border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
              />
            </div>

            <div>
              <label
                htmlFor={`${key}-description`}
                className="font-nunito text-[14px] font-semibold text-[#606060]"
              >
                Description
              </label>
              <textarea
                id={`${key}-description`}
                placeholder={
                  formData[key].description || "Enter description here"
                }
                value={checkboxes[key] ? formData[key].description : ""}
                onChange={(e) => handleInputChange(e, key, "description")}
                disabled={!checkboxes[key]}
                className="w-full h-[80px] p-2 mt-1 bg-[#F5F6FA] border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
              ></textarea>
            </div>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 p-4 border rounded-md"
          >
            <label className="font-nunito text-[14px] font-semibold text-[#606060]">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter title here"
              className="h-[40px] p-2 mt-1 bg-white border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
              disabled={!checkboxes.whatyouget}
            />
            <label className="font-nunito text-[14px] font-semibold text-[#606060]">
              Description
            </label>
            <textarea
              placeholder="Enter description here"
              className="h-[80px] p-2 mt-1 bg-white border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
              disabled={!checkboxes.whatyouget}
            ></textarea>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          onClick={handleSave}
          disabled={!Object.values(checkboxes).some(Boolean)}
          className={`w-[115px] h-[42px] px-6 py-2 rounded-lg font-nunito text-[18px] font-medium text-white bg-[#4880FF] border border-[#4880FF] ${
            Object.values(checkboxes).some(Boolean)
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
        >
          Save
        </button>
        <button
          onClick={handleDiscard}
          disabled={!Object.values(checkboxes).some(Boolean)}
          className={`w-[115px] h-[42px] px-6 py-2 rounded-lg font-nunito text-[18px] font-medium text-[#4880FF] border border-[#4880FF] ${
            Object.values(checkboxes).some(Boolean)
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
        >
          Discard
        </button>
      </div>
    </div>
  );
};

export default AdminAbout;
