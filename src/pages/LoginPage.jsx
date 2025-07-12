import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Welcome Back!
          </h2>
          <p className="text-slate-600 text-lg">Please sign in to continue your learning journey</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-slate-700 font-semibold mb-3" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 placeholder-slate-400 shadow-sm transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-3" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent text-slate-700 placeholder-slate-400 shadow-sm transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-slate-600 bg-white border-slate-300 rounded focus:ring-slate-300 focus:ring-2"
                />
                <span className="ml-2 text-sm text-slate-600">Remember me</span>
              </label>
              <a 
                href="#" 
                className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-center text-slate-600">
              Don't have an account? 
              <a href="#" className="font-semibold text-slate-700 hover:text-slate-900 ml-1 transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl py-3 px-4 flex justify-center items-center hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="ml-2 text-slate-700 font-medium">Google</span>
            </button>
            <button className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl py-3 px-4 flex justify-center items-center hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="ml-2 text-slate-700 font-medium">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
