import './App.css';
import AddPetForm from './AddPetForm';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
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