import "./App.css";
import "@radix-ui/themes/styles.css";

import {
  Box,
  Button,
  Flex,
  RadioGroup,
  Section,
  Text,
  TextField,
  Theme,
} from "@radix-ui/themes";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <Theme>
      <Box className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 cursor-default-must">
        <Text>
          <PaperPlaneIcon />
          AI News Summarizer
        </Text>
      </Box>
      <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-900">
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300 cursor-default-must">
          <Box style={{ padding: "1rem" }}>
            <Text
              as="label"
              size="3"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              URL da notícia
            </Text>
            <TextField.Root
              type="url"
              placeholder="Cole a url da notícia aqui..."
              size="3"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300 section-clickable"
            >
              <TextField.Slot />
            </TextField.Root>
          </Box>
          <Box style={{ padding: "1rem" }}>
            <Text
              as="label"
              size="3"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Nível do resumo
            </Text>

            <Flex direction="row" asChild gap="2">
              <RadioGroup.Root defaultValue="2" name="summarize-level">
                <RadioGroup.Item value="1">Curto</RadioGroup.Item>
                <RadioGroup.Item value="2">Médio</RadioGroup.Item>
                <RadioGroup.Item value="3">Detalhado</RadioGroup.Item>
              </RadioGroup.Root>
            </Flex>
          </Box>

          <Button size="3" style={{ width: "100%" }}>
            Resumir notícia
          </Button>
        </Box>
      </Section>
    </Theme>
  );
}

export default App;
