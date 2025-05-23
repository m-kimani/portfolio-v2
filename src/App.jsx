import styles from "./style";
import { Projects, Business, Blog, Resume, Contact, Clients, CTA, Footer, Navbar, Testimonials, Hero, MovingLine } from "./components";
import BottomNav from "./components/BottomNav";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <MovingLine />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Resume />
        <Projects />
        <Testimonials />
        <Clients />
        <Business />
        <Blog />
        <CTA />
        <Contact />
        <Footer />
        <BottomNav />
      </div>
    </div>
  </div>
);

export default App;
