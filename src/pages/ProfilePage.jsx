function ProfilePage() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Skills Offered</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Skills Wanted</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}

export default ProfilePage;
