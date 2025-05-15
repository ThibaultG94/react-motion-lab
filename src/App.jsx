import { useState } from "react";
import CardFlip from "./components/animations/CardFlip";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "card-flip":
        return <CardFlip />;
      case "parallax-scroll":
        return <p>Parallax Scroll Component (À venir)</p>;
      case "menu-transition":
        return <p>Menu Transition Component (À venir)</p>;
      default:
        return (
          <div className="text-center text-slate-400">
            <h2 className="text-2xl font-medium">Select a component</h2>
            <p className="mt-2">Choose from the sidebar to view animations</p>
          </div>
        );
    }
  };

  const components = [
    { id: "card-flip", name: "Card Flip Animation" },
    { id: "parallax-scroll", name: "Parallax Scroll Effect" },
    { id: "menu-transition", name: "Animated Menu Transition" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="py-8 px-6 border-b border-slate-700">
        <h1 className="text-4xl font-bold text-cyan-400">React Motion Lab</h1>
        <p className="mt-2 text-slate-400">
          Advanced animation components showcase
        </p>
      </header>

      <main className="p-6 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <nav className="space-y-2">
            {components.map((component) => (
              <button
                key={component.id}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeComponent === component.id
                    ? "bg-cyan-900/50 border-l-4 border-cyan-400"
                    : "hover:bg-slate-800"
                }`}
                onClick={() => setActiveComponent(component.id)}
              >
                {component.name}
              </button>
            ))}
          </nav>
        </aside>

        <section className="flex-1 min-h-[70vh] bg-slate-800/50 rounded-xl p-6 flex items-center justify-center">
          {renderActiveComponent()}
        </section>
      </main>
    </div>
  );
}

export default App;
