import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import MetricsSection from './components/MetricsSection';
import ChatInterface from './components/ChatInterface';
import ContactForm from './components/ContactForm';
import SuccessModal from './components/SuccessModal';
import Footer from './components/Footer';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleDownloadClick = () => {
    setShowContactForm(true);
  };

  const handleFormSubmit = (email: string) => {
    setSubmittedEmail(email);
    setShowContactForm(false);
    setShowSuccessModal(true);
  };

  const handleCloseModals = () => {
    setShowContactForm(false);
    setShowSuccessModal(false);
  };

  return (
    <ChatProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <StatsSection />
          <MetricsSection />
          <ChatInterface onDownloadClick={handleDownloadClick} />
        </main>
        <Footer />

        {showContactForm && (
          <ContactForm
            onSubmit={handleFormSubmit}
            onClose={handleCloseModals}
          />
        )}

        {showSuccessModal && (
          <SuccessModal
            email={submittedEmail}
            onClose={handleCloseModals}
          />
        )}
      </div>
    </ChatProvider>
  );
}

export default App;
