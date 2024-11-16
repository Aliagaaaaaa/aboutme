import { Profile } from './components/Profile';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';

const profileDescription = [
  'Estudiante de cuarto año de Ingeniería Civil en Informática y Telecomunicaciones. Cuento con un nivel avanzado de inglés y español nativo.',
  'Tengo experiencia en desarrollo de software utilizando Java, Python, JavaScript y TypeScript, así como en bases de datos SQL y NoSQL, incluyendo MongoDB y Redis.'
];

const socialLinks = [
  { url: 'https://www.linkedin.com/in/martin-aliaga', network: 'linkedin' },
  { url: 'https://github.com/aliagaaaaaa', network: 'github' }
];

function App() {
  return (
    <div className="min-h-screen h-screen bg-white text-gray-800">
      <div className="h-full flex flex-col">
        <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-[280px] xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto">
            <div className="p-4 xs:p-6 sm:p-8 md:p-10">
              <Profile name="Martín Aliaga" description={profileDescription} />
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
