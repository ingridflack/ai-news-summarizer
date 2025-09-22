import { MoonIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header
      id="header"
      className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 cursor-default-must"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI News Summarizer
            </h1>
          </div>
          <button
            id="theme-toggle"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 section-clickable"
          >
            <MoonIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
