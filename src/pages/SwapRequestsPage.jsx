import React, { useState } from "react";

function RequestModal({ open, onClose, user, offeredSkills, wantedSkills }) {
  const [selectedOffered, setSelectedOffered] = useState("");
  const [selectedWanted, setSelectedWanted] = useState("");
  const [message, setMessage] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Send Swap Request
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Choose one of your offered skills
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              value={selectedOffered}
              onChange={(e) => setSelectedOffered(e.target.value)}
            >
              <option value="">Select a skill</option>
              {offeredSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Choose one of their wanted skills
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              value={selectedWanted}
              onChange={(e) => setSelectedWanted(e.target.value)}
            >
              <option value="">Select a skill</option>
              {wantedSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 resize-none"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function ProfileModal({ open, onClose, user, onRequest }) {
  if (!open || !user) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden flex items-center justify-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">
                {user.name}
              </h2>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors flex items-center gap-2"
                onClick={() => {
                  onClose();
                  setTimeout(() => onRequest(user), 200);
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01"
                  />
                </svg>
                Request
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Skills Offered
                </h3>
                <ul className="space-y-2">
                  {user.skillsOffered.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✔️</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Skills Wanted
                </h3>
                <ul className="space-y-2">
                  {user.skillsWanted.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-500">🎓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Rating and Feedback
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                  <span className="font-bold text-gray-700">4.5 (18 reviews)</span>
                </div>
                <p className="italic text-gray-700">
                  "Marc is an excellent teacher, very patient and explains concepts
                  clearly. Highly recommended!"
                </p>
                <div className="text-right text-gray-500 mt-2">- Jane Doe</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="italic text-gray-700">
                  "A pleasure to work with. The website design he provided was
                  top-notch."
                </p>
                <div className="text-right text-gray-500 mt-2">- John Smith</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SwapRequestsPage() {
  const mockRequests = [
    {
      id: 1,
      name: "Marc Demo",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      skillsOffered: ["Java Script", "Python"],
      skillsWanted: ["Illustrator", "Graphic Designer"],
      rating: 3.9,
    },
    {
      id: 2,
      name: "Michell",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      skillsOffered: ["Java Script", "Python"],
      skillsWanted: ["Illustrator", "Graphic Designer"],
      rating: 2.5,
    },
    {
      id: 3,
      name: "Joe Wills",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      skillsOffered: ["Java Script", "Python"],
      skillsWanted: ["Illustrator", "Graphic Designer"],
      rating: 4.0,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalUser, setModalUser] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileUser, setProfileUser] = useState(null);

  const handleRequestClick = (user) => {
    setModalUser(user);
    setModalOpen(true);
  };

  const handleProfileClick = (user) => {
    setProfileUser(user);
    setProfileModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col px-2 md:px-0">
      <div className="max-w-6xl mx-auto w-full">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4 items-center mb-8 mt-8">
          <select className="border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <option>Availability</option>
          </select>
          <input
            type="text"
            placeholder="Search for skills..."
            className="flex-1 border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition-colors w-full md:w-auto">
            Search
          </button>
        </div>
        {/* Requests List */}
        <div className="space-y-6">
          {mockRequests.map((request) => (
            <div
              key={request.id}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6 gap-6 cursor-pointer group"
              onClick={(e) => {
                // Only open profile modal if not clicking the request button
                if (!e.target.closest(".request-btn")) {
                  handleProfileClick(request);
                }
              }}
            >
              <img
                src={request.avatar}
                alt={request.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 shadow"
              />
              <div className="flex-1 w-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {request.name}
                </h2>
                <div className="mb-1">
                  <span className="font-semibold text-gray-800">
                    Skills Offered:
                  </span>
                  {request.skillsOffered.map((skill) => (
                    <span
                      key={skill}
                      className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    Skills Wanted:
                  </span>
                  {request.skillsWanted.map((skill) => (
                    <span
                      key={skill}
                      className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                <button
                  className="request-btn bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-300 transition-colors w-full md:w-auto flex items-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRequestClick(request);
                  }}
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01"
                    />
                  </svg>
                  Request
                </button>
                <span className="text-gray-500 font-medium text-sm">
                  Rating: {request.rating}/5
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10 mb-8">
          <button className="text-gray-400 px-2 py-1 rounded hover:bg-gray-200 transition-colors">
            &#60;
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg font-semibold shadow ${
                page === 2
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="text-gray-400 px-2 py-1 rounded hover:bg-gray-200 transition-colors">
            &#62;
          </button>
        </div>
      </div>
      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        user={modalUser}
        offeredSkills={modalUser ? modalUser.skillsOffered : []}
        wantedSkills={modalUser ? modalUser.skillsWanted : []}
      />
      <ProfileModal
        open={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        user={profileUser}
        onRequest={handleRequestClick}
      />
    </div>
  );
}

export default SwapRequestsPage;
