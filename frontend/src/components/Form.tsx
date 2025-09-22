export default function Form() {
  return (
    <section
      id="input-section"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300 cursor-default-must mb-8"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            URL da Notícia
          </label>
          <div className="relative">
            <input
              type="url"
              id="news-url"
              placeholder="Cole a URL da notícia aqui..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300 section-clickable"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nível do Resumo
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="summary-level"
                value="short"
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Curto
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="summary-level"
                value="medium"
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Médio
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="summary-level"
                value="detailed"
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Detalhado
              </span>
            </label>
          </div>
        </div>

        <button
          id="summarize-btn"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center section-clickable"
        >
          Resumir Notícia
        </button>
      </div>
    </section>
  );
}
