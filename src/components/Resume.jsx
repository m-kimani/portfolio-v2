import styles from '../style';
import { academicAchievements, certificates, experience, skills } from "../constants";

const TreeItem = ({ title, institution, date, description }) => (
  <div className="ml-4 border-l-2 border-blue-400 pl-4 relative mb-8">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
    <h4 className="text-xl font-semibold text-white">{title}</h4>
    <p className="text-gray-400 mt-2">{institution}</p>
    <p className="text-gray-400 mt-2">{date}</p>
    <p className="text-gray-300 mt-4">{description}</p>
  </div>
);

const ExItem = ({ title, institution, date, description1, description2, description3, description4, description5}) => (
  <div className="ml-4 border-l-2 border-blue-400 pl-4 relative mb-8">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
    <h4 className="text-xl font-semibold text-white">{title}</h4>
    <p className="text-gray-400 mt-2">{institution}</p>
    <p className="text-gray-400 mt-2">{date}</p>
    <ul>
      <li className="text-gray-300 mt-4">{description1}</li>
      <li className="text-gray-300 mt-4">{description2}</li>
      <li className="text-gray-300 mt-4">{description3}</li>
      <li className="text-gray-300 mt-4">{description4}</li>
      <li className="text-gray-300 mt-4">{description5}</li>
    </ul>
    
  </div>
);

const SkillTreeItem = ({ skill }) => (
  <div className="ml-4 border-l-2 border-blue-400 pl-4 relative mb-8">
      <div className="items-center rounded-md border px-2.5 py-0.5 text-xs text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
        {skill}
      </div>
</div>
);

const Resume = () => (
    <section id="resume" className={styles.section}>
      <div className="container mx-auto px-5 py-24">
        <h2 className={`${styles.heading2} text-center mb-16`}>Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16">

          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">Skills</h3>
            <div className="flex flex-wrap gap-1">
              {skills.map((skilll, index) => (
                <SkillTreeItem key={index} {...skilll} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">Experience</h3>
            <div className="ml-4 border-l-2 border-gray-700 pl-4">
              {experience.map((experience, index) => (
                <ExItem key={index} {...experience} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">Certificates</h3>
            <div className="ml-4 border-l-2 border-gray-700 pl-4">
              {certificates.map((certificate, index) => (
                <TreeItem key={index} {...certificate} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">Academic Achievements</h3>
            <div className="ml-4 border-l-2 border-gray-700 pl-4">
              {academicAchievements.map((achievement, index) => (
                <TreeItem key={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default Resume;
