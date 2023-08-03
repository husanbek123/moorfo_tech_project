import "./App.css";
import Main from "./pages/main";
import Layout from "./components/sections/layout";
import "./utils/i18next";
import ThemeProvider from "./components/ui/themeProvider";
import useStore from "./Store";

import TranslationSetup from "./utils/i18next";
function App() {
  const { theme, lang } = useStore();

  TranslationSetup(lang);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
