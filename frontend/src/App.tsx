import "./App.css";
import "@radix-ui/themes/styles.css";

import Form from "./components/Form";
import Result from "./components/Result";
import History from "./components/History";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <section className="lg:col-span-3 space-y-8">
          <Form />
          <Result />
        </section>
        <aside className="lg:col-span-1">
          <History />
        </aside>
      </main>
    </>
  );
}

export default App;
