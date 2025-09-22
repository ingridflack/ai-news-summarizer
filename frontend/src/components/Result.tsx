import { CopyIcon, FaceIcon } from "@radix-ui/react-icons";

export default function Result() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300 cursor-default-must">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Resumo da Notícia
          </h2>

          <div className="flex items-center space-x-2 section-clickable">
            <FaceIcon color="#00a63e" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Positivo
            </span>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors duration-300">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">
            Título da Notícia
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Este é um exemplo de resumo de notícia gerado pela IA. O texto aqui
            seria o resultado do processamento da URL fornecida, apresentando as
            informações mais relevantes de forma concisa e clara.
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <i className="mr-1" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-clock"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="clock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
                width={13}
                height={13}
              >
                <path
                  fill="currentColor"
                  d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                ></path>
              </svg>
            </i>
            Resumido há 2 minutos
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 cursor-pointer">
            <CopyIcon />
            Copiar
          </button>
        </div>
      </div>
    </section>
  );
}
