export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20 gap-16 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
      {/* Main Content */}
      <main className="flex flex-col gap-12 row-start-2 items-center text-center sm:text-left sm:items-start animate-fadeIn">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight animate-pulse">
          Welcome to Form-SaaS
        </h1>
        <p className="text-lg sm:text-2xl max-w-2xl">
          Build, customize, and manage your forms effortlessly. A comprehensive platform that lets you create forms, handle submissions, and track your data with ease and precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center sm:justify-start">
          {/* Buttons */}
          <button className="rounded-lg bg-blue-600 text-white px-8 py-4 text-lg sm:text-xl transition-transform transform hover:scale-105 hover:bg-blue-700 animate-bounce">
            Build Forms Now
          </button>
          <button className="rounded-lg bg-green-600 text-white px-8 py-4 text-lg sm:text-xl transition-transform transform hover:scale-105 hover:bg-green-700">
            Manage Submissions
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center sm:justify-start">
          {/* Additional Buttons */}
          <button className="rounded-lg bg-purple-600 text-white px-8 py-4 text-lg sm:text-xl transition-transform transform hover:scale-105 hover:bg-purple-700">
            Export Data
          </button>
          <button className="rounded-lg bg-red-600 text-white px-8 py-4 text-lg sm:text-xl transition-transform transform hover:scale-105 hover:bg-red-700">
            Learn About Features
          </button>
        </div>

        {/* Contribute Button */}
        <a
          href="#"
          className="mt-8 text-lg sm:text-xl underline text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contribute to Form-SaaS
        </a>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex flex-col sm:flex-row gap-8 items-center justify-center text-base sm:text-lg font-light">
        <div>
          Explore our advanced form-building features, perfect for any industry.
        </div>
        <div>
          Track real-time submissions and manage data from a user-friendly dashboard.
        </div>
      </footer>
    </div>
  );
}
