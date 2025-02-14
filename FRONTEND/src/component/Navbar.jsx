import { useState } from "react";

const Navbar = ({ setSelectedLanguagefinal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Handle language selection
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // Handle submit button
  const handleSubmit = () => {
    setSelectedLanguagefinal(selectedLanguage);
    closeModal(); // Close modal after selection
  };

  return (
    <div className="w-full bg-gray-800 h-10 flex justify-around items-center">
      <h2 className="text-white text-center text-xl">Code Reviewer</h2>
      <button
        className="text-sm"
        style={{ fontSize: "12px" }}
        onClick={openModal}
      >
        {selectedLanguage
          ? `Language: ${selectedLanguage.toUpperCase()}`
          : "Choose Your Language"}
      </button>

      {/* Language Selection Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center z-40">
          <div className="p-6 bg-gray-800 rounded-lg w-auto min-w-[30%] min-h-[10%] h-auto">
            <h2 className="text-center mb-4 text-white text-xl mt-2">
              Select Your Language
            </h2>
            <div className="flex justify-center mb-6">
              <select
                className="bg-gray-500 text-white px-2 py-1 rounded w-[70%]"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="c">C</option>
                <option value="c">java</option>
                <option value="c">C</option>
                <option value="rust">Rust</option>
              </select>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
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

export default Navbar;
