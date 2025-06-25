import './globals.css';
import AddPetForm from './Components/AddPetForm';

function App() {
  return (
    <div className="min-h-full flex">
      <div className="bg-gray-100 flex flex-row m-10">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Pet Health Tracker
            </h1>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-6">
          <AddPetForm />
        </main>
      </div>
    </div>
  );
}

export default App;