export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Tailwind Test Page</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-lg">If you can see this styled correctly, Tailwind is working!</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4">
          Test Button
        </button>
      </div>
    </div>
  )
}