// components/BottomNav.jsx
import { FaGithub, FaLinkedin, FaCoffee } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <div className="fixed max-w-screen-lg mx-auto bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg border rounded-full px-6 py-2 flex items-center gap-6 z-50 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <a
        href="https://www.buymeacoffee.com/kimanimuhammad"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-600"
      >
        <FaCoffee size={30} />
      </a>
      <a
        href="https://github.com/m-kimani/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-800"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/kimani-muhammad-engineer/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700"
      >
        <FaLinkedin size={30} />
      </a>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
            <div flex justify-center mt-10>
              <a
                href="/resume.pdf"
                download
                className="text-darkgray-700 bg-gray-700 px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Download Resume
              </a>
            </div>
          </div>
    </div>
  );
};

export default BottomNav;
