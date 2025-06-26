import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Projects, Blog, Resume, Contact, Clients, CTA, Footer, Navbar, Testimonials, Hero, MovingLine } from "./components";
import BottomNav from "./components/BottomNav";

const App = () => (
  <Router>
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
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Testimonials />
          <Clients />
          <CTA />
          <Contact />
          <Footer />
          <BottomNav />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
