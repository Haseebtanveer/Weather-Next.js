export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-teal-200">
      <div className="flex items-center justify-center space-x-2 animate-bounce">
        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        <div className="w-6 h-6 bg-red-600 rounded-full"></div>
      </div>
      <h2 className="mt-6 text-2xl font-bold text-teal-900">Loading...</h2>
      <p className="text-lg text-gray-600">Fetching the latest weather data</p>
      <div className="mt-8 w-16 h-16 border-t-4 border-blue-800 rounded-full animate-spin"></div>
    </main>
  );
}
