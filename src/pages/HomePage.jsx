import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8 md:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl mb-8 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Skill Swap
            <span className="block text-4xl md:text-6xl font-light text-slate-600 mt-2">Platform</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Connect with talented individuals, exchange skills, and grow together in a
            <span className="font-medium text-slate-700"> collaborative learning community</span>
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Discover Your Next
                <span className="text-slate-600"> Learning Adventure</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Browse public profiles, send swap requests, and build meaningful connections 
                with people who share your passion for continuous learning and skill development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/swap-requests"
                  className="group relative overflow-hidden bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
                >
                  <span className="relative z-10">Explore Skill Swaps</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                <a
                  href="/profile"
                  className="group bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg border border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
                >
                  Edit Your Profile
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-inner">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <span className="text-slate-600 font-medium">Web Development</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-600 font-medium">Graphic Design</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-600 font-medium">Data Science</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      <span className="text-slate-600 font-medium">Digital Marketing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Connect & Learn</h3>
            <p className="text-slate-600 leading-relaxed">Find like-minded learners and build meaningful connections through skill exchanges.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Verified Skills</h3>
            <p className="text-slate-600 leading-relaxed">Browse verified profiles and find exactly the skills you need to advance your goals.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Track Progress</h3>
            <p className="text-slate-600 leading-relaxed">Monitor your learning journey and celebrate achievements with our progress tracking tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
