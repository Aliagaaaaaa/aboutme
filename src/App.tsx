import { Profile } from './components/Profile';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';

const profileDescription = [
  'Estudiante de cuarto año de Ingeniería Civil en Informática y Telecomunicaciones. Cuento con un nivel avanzado de inglés y español nativo.',
  'Tengo experiencia en desarrollo de software utilizando Java, Python, JavaScript y TypeScript, así como en bases de datos SQL y NoSQL, incluyendo MongoDB y Redis.'
];

const socialLinks = [
  { url: 'https://x.com', network: 'x' },
  { url: 'https://instagram.com', network: 'instagram' },
  { url: 'https://linkedin.com', network: 'linkedin' },
  { url: 'https://github.com', network: 'github' }
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[280px] xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 xs:p-6 sm:p-8 md:p-10">
          <Profile name="Martín Aliaga" description={profileDescription} />
          <SocialLinks links={socialLinks} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;