import React, { useState } from "react";

function RequestModal({ open, onClose, user, offeredSkills, wantedSkills }) {
  const [selectedOffered, setSelectedOffered] = useState("");
  const [selectedWanted, setSelectedWanted] = useState("");
  const [message, setMessage] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-md p-8 relative border border-white/20">
        <button
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-2xl font-bold transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Send Swap Request
          </h2>
          <p className="text-slate-600 mt-2">Connect and exchange skills</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-slate-700 font-semibold mb-3">
              Your Offered Skill
            </label>
            <select
              className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 shadow-sm transition-all duration-300"
              value={selectedOffered}
              onChange={(e) => setSelectedOffered(e.target.value)}
            >
              <option value="">Select a skill you offer</option>
              {offeredSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-slate-700 font-semibold mb-3">
              Skill You Want to Learn
            </label>
            <select
              className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 shadow-sm transition-all duration-300"
              value={selectedWanted}
              onChange={(e) => setSelectedWanted(e.target.value)}
            >
              <option value="">Select a skill you want</option>
              {wantedSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-slate-700 font-semibold mb-3">Personal Message</label>
            <textarea
              className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 placeholder-slate-400 shadow-sm transition-all duration-300 resize-none"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Introduce yourself and explain why you'd like to connect..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:-translate-y-1"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

function ProfileModal({ open, onClose, user, onRequest }) {
  if (!open || !user) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-4xl p-8 relative border border-white/20 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-2xl font-bold transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="md:col-span-1 text-center">
            <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl overflow-hidden border-4 border-white/50 mb-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => {
                onClose();
                setTimeout(() => onRequest(user), 200);
              }}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Send Request
            </button>
          </div>
          
          {/* Profile Details */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">{user.name}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/60 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full mr-3"></div>
                  Skills Offered
                </h3>
                <div className="space-y-3">
                  {user.skillsOffered.map((skill) => (
                    <div key={skill} className="flex items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/60 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-blue-400 rounded-full mr-3"></div>
                  Skills Wanted
                </h3>
                <div className="space-y-3">
                  {user.skillsWanted.map((skill) => (
                    <div key={skill} className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Reviews Section */}
            <div className="bg-white/60 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-amber-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Reviews & Ratings
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-semibold text-slate-700">4.5 (18 reviews)</span>
                  </div>
                  <p className="text-slate-600 italic">
                    "Marc is an excellent teacher, very patient and explains concepts clearly. Highly recommended!"
                  </p>
                  <div className="text-right text-slate-500 text-sm mt-2">- Jane Doe</div>
                </div>
                
                <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 italic">
                    "A pleasure to work with. The website design he provided was top-notch."
                  </p>
                  <div className="text-right text-slate-500 text-sm mt-2">- John Smith</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SwapRequestsPage() {
          <div>
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
      skillsOffered: ["JavaScript", "Python"],
      skillsWanted: ["Illustrator", "Graphic Design"],
      rating: 3.9,
    },
    {
      id: 2,
      name: "Michelle",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      skillsOffered: ["UI/UX Design", "Figma"],
      skillsWanted: ["React", "Node.js"],
      rating: 2.5,
    },
    {
      id: 3,
      name: "Joe Wills",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      skillsOffered: ["Data Science", "Machine Learning"],
      skillsWanted: ["Web Development", "CSS"],
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Skill Exchange Hub
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover talented individuals ready to share their expertise and learn new skills
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for skills, people, or expertise..."
                className="w-full pl-12 pr-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 placeholder-slate-400 shadow-sm transition-all duration-300"
              />
            </div>
            <select className="px-6 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 text-slate-700 shadow-sm transition-all duration-300">
              <option>All Availability</option>
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Evenings</option>
            </select>
            <button className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* User Cards Grid */}
        <div className="space-y-6 mb-12">
          {mockRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={(e) => {
                if (!e.target.closest(".request-btn")) {
                  handleProfileClick(request);
                }
              }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg overflow-hidden border-4 border-white/50">
                    <img
                      src={request.avatar}
                      alt={request.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2 lg:mb-0">
                      {request.name}
                    </h2>
                    <div className="flex items-center justify-center lg:justify-end space-x-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill={i < Math.floor(request.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-slate-600 font-medium">{request.rating}/5</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Skills Offered */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center justify-center lg:justify-start">
                        <div className="w-4 h-4 bg-emerald-400 rounded-full mr-2"></div>
                        Skills Offered
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {request.skillsOffered.map((skill) => (
                          <span
                            key={skill}
                            className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Skills Wanted */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center justify-center lg:justify-start">
                        <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
                        Skills Wanted
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {request.skillsWanted.map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <button
                      className="request-btn bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRequestClick(request);
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Send Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="text-slate-400 px-4 py-2 rounded-2xl hover:bg-white/50 hover:text-slate-600 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-2xl font-semibold transition-all duration-300 ${
                page === 2
                  ? "bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg"
                  : "bg-white/60 text-slate-700 hover:bg-white/80 hover:shadow-lg"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="text-slate-400 px-4 py-2 rounded-2xl hover:bg-white/50 hover:text-slate-600 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modals */}
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
