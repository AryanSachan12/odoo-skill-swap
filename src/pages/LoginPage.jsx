import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Welcome Back!</h2>
        <p className="text-gray-500 text-center mb-8">Please sign in to continue.</p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1m8 0V7a4 4 0 00-8 0v5" /></svg>
              </span>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0-6v2m6 2a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
              </span>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Forgot username/password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition-colors">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
