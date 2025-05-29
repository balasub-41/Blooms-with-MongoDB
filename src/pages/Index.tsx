
import React, { useState } from 'react'; // Import useState
import BloomsNavbar from '../components/BloomsNavbar';
import BloomsHero from '../components/BloomsHero';
import BloomsFeatures from '../components/BloomsFeatures';
import BloomsCourses from '../components/BloomsCourses';
import BloomsCareerPersonalitySection from '../components/BloomsCareerPersonalitySection';
import BloomsBlog from '../components/BloomsBlog';
import BloomsFooter from '../components/BloomsFooter';
import BloomsAboutUSP from '../components/BloomsAboutUSP';
import BloomsProgrammesMentorsSection from '../components/BloomsProgrammesMentorsSection';
import VoiceBot from '../pages/VoiceBot'; // Import VoiceBot component
import { Mic } from 'lucide-react'; // Import an icon for the button

const Index = () => {
  const [isVoiceBotOpen, setIsVoiceBotOpen] = useState(false); // State to manage VoiceBot visibility

  const toggleVoiceBot = () => {
    setIsVoiceBotOpen(!isVoiceBotOpen);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <BloomsNavbar />
      <BloomsHero />
      {/* <BloomsFeatures /> */}
      {/* <BloomsCourses /> */}
      <BloomsCareerPersonalitySection />
     
     
      <BloomsFooter />

      {/* Floating Voice Bot Button */}
      <button
        onClick={toggleVoiceBot}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        aria-label="Open voice bot"
      >
        <Mic size={24} /> {/* Use the Mic icon */}
      </button>

      {/* Voice Bot Component (conditionally rendered) */}
      {isVoiceBotOpen && <VoiceBot onClose={toggleVoiceBot} />}
    </main>
  );
};

export default Index;
