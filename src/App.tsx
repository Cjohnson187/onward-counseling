import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage'; // The main content page

// --- Main Application Shell ---

const App = () => {
    return (
        <div className="min-h-screen bg-[#F3F3F3] font-sans">
            <Header />
            <main className="pt-20"> {/* Padding for fixed header */}
                <HomePage />
            </main>
            <Footer />
        </div>
    );
};

export default App;