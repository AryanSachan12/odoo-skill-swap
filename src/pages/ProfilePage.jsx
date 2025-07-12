import React from 'react';

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Customize your profile to showcase your skills and connect with the right learning partners
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Photo Section */}
            <div className="md:col-span-1">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl overflow-hidden border-4 border-white/50">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Change Photo
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="md:col-span-2">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Marc Demo"
                      className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 shadow-sm transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Location</label>
                    <input 
                      type="text" 
                      defaultValue="New York, USA"
                      className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 shadow-sm transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Skills Offered</label>
                  <div className="bg-white/60 rounded-2xl p-4 border border-slate-200">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                        JavaScript
                        <button className="ml-2 text-emerald-500 hover:text-emerald-700">×</button>
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                        Python
                        <button className="ml-2 text-blue-500 hover:text-blue-700">×</button>
                      </span>
                    </div>
                    <button className="text-slate-600 hover:text-slate-800 font-medium flex items-center gap-2 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add Skill
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Skills Wanted</label>
                  <div className="bg-white/60 rounded-2xl p-4 border border-slate-200">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                        Illustrator
                        <button className="ml-2 text-purple-500 hover:text-purple-700">×</button>
                      </span>
                      <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                        Graphic Design
                        <button className="ml-2 text-amber-500 hover:text-amber-700">×</button>
                      </span>
                    </div>
                    <button className="text-slate-600 hover:text-slate-800 font-medium flex items-center gap-2 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add Skill
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Availability</label>
                    <select className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 shadow-sm transition-all duration-300">
                      <option>Weekends</option>
                      <option>Weekdays</option>
                      <option>Evenings</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Profile Visibility</label>
                    <select className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 shadow-sm transition-all duration-300">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Bio</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell others about yourself, your learning goals, and what you're passionate about..."
                    className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 placeholder-slate-400 shadow-sm transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Save Changes
                  </button>
                  <button 
                    type="button" 
                    className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-semibold border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Discard
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">12</p>
                <p className="text-slate-600">Successful Swaps</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">4.8</p>
                <p className="text-slate-600">Average Rating</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">28</p>
                <p className="text-slate-600">Connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
