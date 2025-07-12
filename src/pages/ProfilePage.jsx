import React from 'react';

function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        {/* Profile Photo */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden flex items-center justify-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="text-blue-600 text-sm font-medium hover:underline">Add/Change Photo</button>
        </div>
        {/* Profile Form */}
        <form className="flex-1 space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" defaultValue="Marc Demo" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" defaultValue="New York, USA" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Skills Offered</label>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Java Script</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
              <button className="text-blue-600 text-sm font-medium hover:underline ml-2">+ Add</button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Skills Wanted</label>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Illustrator</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Graphic Designer</span>
              <button className="text-blue-600 text-sm font-medium hover:underline ml-2">+ Add</button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Availability</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" defaultValue="Weekends" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Profile</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700">
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition-colors">Save</button>
            <button type="button" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-300 transition-colors">Discard</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
