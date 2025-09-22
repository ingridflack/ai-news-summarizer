export default function History() {
  return (
    <section
      id="history-section"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300 cursor-default-must"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Histórico
      </h2>

      <div className="space-y-3">
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
            Tecnologia revoluciona mercado
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            há 5 minutos
          </p>
        </div>

        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
            Economia mundial em alta
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            há 1 hora
          </p>
        </div>

        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
            Descoberta científica importante
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            há 2 horas
          </p>
        </div>

        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
            Mudanças climáticas
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ontem</p>
        </div>

        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
            Política internacional
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ontem</p>
        </div>
      </div>
    </section>
  );
}
