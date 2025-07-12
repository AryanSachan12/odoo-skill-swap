function SwapRequestsPage() {
  const mockRequests = [
    {
      id: 1,
      name: "Marc Demo",
      skillsOffered: ["JavaScript", "Python"],
      skillsWanted: ["Musician", "Graphic Designer"],
      rating: 3.9,
    },
    {
      id: 2,
      name: "Michell",
      skillsOffered: ["JavaScript", "Python"],
      skillsWanted: ["Musician", "Graphic Designer"],
      rating: 2.5,
    },
    {
      id: 3,
      name: "Joe Wills",
      skillsOffered: ["JavaScript", "Python"],
      skillsWanted: ["Musician", "Graphic Designer"],
      rating: 4.0,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Swap Requests</h2>
      <div className="space-y-4">
        {mockRequests.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <h3 className="text-xl font-semibold">{request.name}</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Skills Offered:</span> {request.skillsOffered.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Skills Wanted:</span> {request.skillsWanted.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Rating:</span> {request.rating}/5
              </p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
              Request
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <nav className="flex space-x-2">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SwapRequestsPage;
