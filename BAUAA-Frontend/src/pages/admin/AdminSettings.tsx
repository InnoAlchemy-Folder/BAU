import React, { useState } from "react";

interface FormData {
  phoneNumber: string;
  emailAddress: string;
  location: string;
  socialMedia: { platform: string; photo: File | null }[];
}

const AdminSettings: React.FC = () => {
  const initialData: FormData = {
    phoneNumber: "",
    emailAddress: "",
    location: "",
    socialMedia: [
      { platform: "", photo: null },
      { platform: "", photo: null },
    ],
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [checkboxes, setCheckboxes] = useState({
    phoneNumber: false,
    emailAddress: false,
    location: false,
    socialMedia: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData
  ) => {
    if (checkboxes[field]) {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }
  };

  const handleCheckboxChange = (field: keyof typeof formData) => {
    setCheckboxes((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSocialMediaChange = (
    index: number,
    value: string | File,
    type: "platform" | "photo"
  ) => {
    const updatedSocialMedia = formData.socialMedia.map((item, i) =>
      i === index
        ? {
            ...item,
            [type]: type === "platform" ? (value as string) : (value as File),
          }
        : item
    );
    setFormData((prev) => ({ ...prev, socialMedia: updatedSocialMedia }));
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fileList = event.target.files;
    if (fileList && fileList[0]) {
      handleSocialMediaChange(index, fileList[0], "photo");
    }
  };

  const handleAddSocialMedia = () => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, { platform: "", photo: null }],
    }));
  };

  const handleSave = () => {
    if (Object.values(checkboxes).some((isChecked) => isChecked)) {
      console.log("Saved Data:", formData);
      alert("Data saved!");
    }
  };

  const handleDiscard = () => {
    if (Object.values(checkboxes).some((isChecked) => isChecked)) {
      setFormData(initialData);
    }
  };

  return (
    <div className="p-8 flex flex-col space-y-8 w-full bg-white rounded-lg shadow-md">
      {/* Phone Number */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={checkboxes.phoneNumber}
          onChange={() => handleCheckboxChange("phoneNumber")}
          className="w-6 h-6 rounded border border-[#4880FF]"
        />
        <div className="flex flex-col w-full space-y-2">
          <label className="font-nunito text-[18px] font-bold text-[#4880FF]">
            KEY: Phone_Number
          </label>
          <label className="font-nunito text-[14px] font-normal text-[#606060]">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+961 71 123 456"
            value={checkboxes.phoneNumber ? formData.phoneNumber : ""}
            onChange={(e) => handleInputChange(e, "phoneNumber")}
            disabled={!checkboxes.phoneNumber}
            className="w-full h-[52px] p-2 bg-[#F5F6FA] border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={checkboxes.emailAddress}
          onChange={() => handleCheckboxChange("emailAddress")}
          className="w-6 h-6 rounded border border-[#4880FF]"
        />
        <div className="flex flex-col w-full space-y-2">
          <label className="font-nunito text-[18px] font-bold text-[#4880FF]">
            KEY: Email_Address
          </label>
          <label className="font-nunito text-[14px] font-normal text-[#606060]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            value={checkboxes.emailAddress ? formData.emailAddress : ""}
            onChange={(e) => handleInputChange(e, "emailAddress")}
            disabled={!checkboxes.emailAddress}
            className="w-full h-[52px] p-2 bg-[#F5F6FA] border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
          />
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={checkboxes.location}
          onChange={() => handleCheckboxChange("location")}
          className="w-6 h-6 rounded border border-[#4880FF]"
        />
        <div className="flex flex-col w-full space-y-2">
          <label className="font-nunito text-[18px] font-bold text-[#4880FF]">
            KEY: Location
          </label>
          <label className="font-nunito text-[14px] font-normal text-[#606060]">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location here"
            value={checkboxes.location ? formData.location : ""}
            onChange={(e) => handleInputChange(e, "location")}
            disabled={!checkboxes.location}
            className="w-full h-[52px] p-2 bg-[#F5F6FA] border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={checkboxes.socialMedia}
          onChange={() => handleCheckboxChange("socialMedia")}
          className="w-6 h-6 rounded border border-[#4880FF]"
        />
        <label className="font-nunito text-[18px] font-bold text-[#4880FF]">
          KEY: Social-Media-Links
        </label>
      </div>

      <div className="space-y-6">
        {formData.socialMedia.map((media, index) => (
          <div key={index} className="flex  items-start space-x-6">
            <div className="flex flex-col items-center">
              <div
                className="rounded-full w-[80px] h-[80px] shadow-lg bg-center flex bg-cover font-nunito"
                style={{
                  backgroundImage: media.photo
                    ? `url(${URL.createObjectURL(media.photo)})`
                    : "url('../../../public/defualt.png')",
                }}
              ></div>
              <div className="flex flex-col">
                <label
                  htmlFor={`socialMedia-photo-upload-${index}`}
                  className="font-nunito text-[14px] font-semibold text-[#4379EE] pt-3 flex cursor-pointer text-center"
                >
                  Change Icon
                </label>
              </div>
              <input
                type="file"
                id={`socialMedia-photo-upload-${index}`}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, index)}
                className="hidden"
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label className="font-nunito text-[14px] font-bold text-[#606060]">
                Social Media
              </label>
              <input
                type="text"
                placeholder="Social Media Link"
                value={media.platform}
                onChange={(e) =>
                  handleSocialMediaChange(index, e.target.value, "platform")
                }
                className="w-full h-[52px] p-2 bg-[#F5F6FA] border border-[#D5D5D5] rounded-md font-nunito text-[14px] text-[#A6A6A6]"
              />
            </div>
          </div>
        ))}

        {/* Add More Button */}
        <div className="flex justify-end">
          <button
            onClick={handleAddSocialMedia}
            className="px-6 py-2 rounded-lg flex-none font-nunito right-0 text-[18px] font-medium text-white bg-[#4880FF] border border-[#4880FF] cursor-pointer"
          >
            Add More
          </button>
        </div>
      </div>

      {/* Save and Discard Buttons */}
      <div className="flex justify-end space-x-3 mt-8">
        <button
          onClick={handleSave}
          disabled={!Object.values(checkboxes).some(Boolean)}
          className={`w-[115px] h-[42px] px-6 py-2 rounded-lg font-nunito text-[18px] font-medium text-white bg-[#4379EE] ${
            !Object.values(checkboxes).some(Boolean) ? "opacity-50" : ""
          }`}
        >
          Save
        </button>
        <button
          onClick={handleDiscard}
          disabled={!Object.values(checkboxes).some(Boolean)}
          className="w-[115px] h-[42px] px-6 py-2 rounded-lg font-nunito text-[18px] font-medium text-[#4379EE] border border-[#4379EE] bg-white"
        >
          Discard
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
