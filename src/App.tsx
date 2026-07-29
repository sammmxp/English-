/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MapPin, Phone, MessageCircle, Mail, Menu, X, CheckCircle2, ChevronDown, Instagram, Facebook } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function FAQItem({ q, a }: { q: string, a: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="liquid-glass rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left p-6 flex justify-between items-center cursor-pointer"
      >
        <h4 className="text-lg text-foreground font-medium pr-4">{q}</h4>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-white/60" size={20} />
        </div>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Form states
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCourse, setFormCourse] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

  const courseData = [
    { 
      title: "Beginner Spoken English", 
      value: "beginner",
      desc: "Start your English-speaking journey with basic grammar, vocabulary, sentence formation, everyday conversations, and confidence-building practice.",
      duration: "3 Months",
      idealFor: "People who struggle to form basic sentences or have zero English speaking background.",
      syllabus: ["Basic Grammar (Tenses, Prepositions)", "Everyday Vocabulary", "Self Introduction", "Simple sentence formation", "Basic role-plays"]
    },
    { 
      title: "Intermediate Spoken English", 
      value: "intermediate",
      desc: "Improve your fluency, pronunciation, grammar, vocabulary, and conversational skills through practical speaking practice.",
      duration: "3 Months",
      idealFor: "People who can understand English but hesitate or make grammatical mistakes while speaking.",
      syllabus: ["Advanced Grammar", "Idioms and Phrases", "Group Discussions", "Fluency building exercises", "Extempore and Debate"]
    },
    { 
      title: "Advanced Spoken English", 
      value: "advanced",
      desc: "Develop advanced communication skills for professional conversations, presentations, interviews, public speaking, and career growth.",
      duration: "2 Months",
      idealFor: "Professionals, job seekers, and students preparing for interviews or presentations.",
      syllabus: ["Public Speaking", "Presentation Skills", "Interview Preparation", "Business English", "Advanced Vocabulary"]
    },
    { 
      title: "Voice & Accent", 
      value: "voice",
      desc: "Improve pronunciation, voice clarity, speaking rhythm, intonation, and natural English communication.",
      duration: "1 Month",
      idealFor: "Individuals working in BPOs, international client facing roles, or those wanting to sound more natural.",
      syllabus: ["Neutralization of Mother Tongue Influence (MTI)", "Vowel and Consonant Sounds", "Intonation and Pitch", "Word Stress and Rhythm", "Voice Modulation"]
    }
  ];

  const scrollToContact = (e?: React.MouseEvent<HTMLAnchorElement>, courseValue?: string) => {
    if (e) e.preventDefault();
    if (courseValue) {
      setFormCourse(courseValue);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      // Form submission mock
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormCourse('');
      setFormMessage('');
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden font-body flex flex-col">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{selectedCourse ? `${selectedCourse.title} | Star English` : 'Star English Spoken English | Bargarh, Odisha'}</title>
        <meta property="og:title" content={selectedCourse ? `${selectedCourse.title} | Star English` : 'Star English Spoken English | Speak English. Build Confidence.'} />
        <meta property="og:description" content={selectedCourse ? selectedCourse.desc : "Learn practical Spoken English and improve your communication skills. Join 5,500+ successful students at Bargarh's top Spoken English training institute."} />
      </Helmet>
      {/* Background Video - Fixed to cover the whole scrolling page */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navigation Bar */}
      <header className="relative z-50 flex flex-row items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <div
          className="text-3xl tracking-tight text-foreground flex flex-col leading-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <span>Star English</span>
          <span className="text-sm font-body tracking-normal text-muted-foreground mt-1">Let’s Speak | Confidently</span>
        </div>
        
        <nav className="hidden lg:flex flex-row items-center gap-8">
          <a href="#home" className="text-sm text-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Courses</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" onClick={(e) => scrollToContact(e)} className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300 inline-block">
            Join Now
          </a>
        </div>

        <button 
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 lg:hidden animate-fade-rise">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>About</a>
          <a href="#courses" onClick={() => setIsMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>Courses</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>Services</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>Reviews</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>Gallery</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>FAQ</a>
          <a href="#contact" onClick={(e) => scrollToContact(e)} className="liquid-glass rounded-full px-8 py-3 text-base text-foreground mt-2 inline-block text-center">
            Join Now
          </a>
        </div>
      )}

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-rise" onClick={() => setSelectedCourse(null)}>
          <div className="liquid-glass w-full max-w-2xl p-8 md:p-12 rounded-[40px] relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-3xl md:text-4xl mb-4 text-foreground pr-8" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {selectedCourse.title}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">{selectedCourse.desc}</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg text-foreground font-medium mb-2 border-b border-white/10 pb-2">Duration</h4>
                <p className="text-muted-foreground text-sm">{selectedCourse.duration}</p>
              </div>
              
              <div>
                <h4 className="text-lg text-foreground font-medium mb-2 border-b border-white/10 pb-2">Ideal For</h4>
                <p className="text-muted-foreground text-sm">{selectedCourse.idealFor}</p>
              </div>
              
              <div>
                <h4 className="text-lg text-foreground font-medium mb-3 border-b border-white/10 pb-2">Syllabus Overview</h4>
                <ul className="space-y-2">
                  {selectedCourse.syllabus.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-white/50 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-10 flex gap-4">
               <a href="#contact" onClick={(e) => { setSelectedCourse(null); scrollToContact(e, selectedCourse.value); }} className="bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:scale-[1.03] transition-transform inline-block">
                 Enroll Now
               </a>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center w-full min-h-[80vh] text-center px-6 pt-20 pb-32">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl font-normal text-foreground animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Speak English.{' '}
            <em className="not-italic text-muted-foreground">Build Confidence.</em>
          </h1>
          
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
            Learn practical Spoken English, improve your communication skills, and speak English confidently in everyday and professional situations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-rise-delay-2">
            <a href="#contact" onClick={(e) => scrollToContact(e)} className="liquid-glass rounded-full px-10 py-4 text-base text-foreground hover:scale-[1.03] cursor-pointer transition-transform duration-300 inline-block">
              Join Now
            </a>
            <a href="#contact" onClick={(e) => scrollToContact(e, 'counseling')} className="rounded-full px-10 py-4 text-base text-foreground border border-white/20 hover:bg-white/5 cursor-pointer transition-all duration-300 inline-block">
              Book Free Counselling
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="liquid-glass p-8 md:p-12 rounded-3xl">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Learn English With Confidence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Star English Spoken English is a trusted Spoken English training institute in Bargarh, Odisha, with 18+ years of experience and 5,500+ successful students. We focus on practical English speaking, pronunciation, grammar, vocabulary, and confidence building through interactive teaching methods, personalized attention, small batch sizes, and regular speaking practice.
              </p>
              <p className="text-foreground leading-relaxed font-medium">
                We believe English is not just a subject to learn — it is a skill to practice, speak, and use confidently in real life.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="liquid-glass p-6 rounded-2xl text-center">
                  <div className="text-4xl text-foreground mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>18+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="liquid-glass p-6 rounded-2xl text-center">
                  <div className="text-4xl text-foreground mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>5.5k+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
                <div className="liquid-glass p-6 rounded-2xl text-center col-span-2">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                    <span className="text-4xl text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>4.6</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Google Rating (67+ Reviews)</div>
                </div>
              </div>

              <div className="liquid-glass p-8 rounded-3xl mt-4">
                <h3 className="text-2xl mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>Who We Teach</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Kids – Class 1 to 10', 'School & College Students', 'Senior Students (10th+)', 'Competitive Exam Aspirants', 'Teachers', 'Executives & Job Holders', 'Housewives'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-white/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl md:text-6xl mb-16" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Our English Learning Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseData.map((course, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedCourse(course)}
                className="liquid-glass p-8 rounded-3xl flex flex-col items-start text-left h-full cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all group"
              >
                <h3 className="text-2xl mb-4 text-foreground group-hover:text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>{course.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{course.desc}</p>
                <div className="mt-6 text-sm text-white/70 border-b border-transparent group-hover:border-white/30 pb-0.5 inline-block transition-colors">
                  View Details &rarr;
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Why Choose Us */}
        <section id="services" className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-10" style={{ fontFamily: "'Instrument Serif', serif" }}>
                What We Offer
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Spoken English Classes", "Beginner to Advanced Courses",
                  "Daily Speaking Practice", "One-to-One Speaking Practice",
                  "Grammar & Vocabulary Training", "Pronunciation & Voice Training",
                  "Voice & Accent Improvement", "Interview Preparation",
                  "Confidence Building", "Small Batch Learning",
                  "Personalized Attention", "Live Online Spoken English Classes"
                ].map((service, i) => (
                  <div key={i} className="liquid-glass px-5 py-4 rounded-xl text-sm text-foreground flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl mb-10" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Why Choose Star English?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "18+ Years of Experience", desc: "Learn with an experienced Spoken English training institute." },
                  { title: "5,500+ Students", desc: "Join thousands of learners who have improved their English communication skills." },
                  { title: "Practical Teaching", desc: "Focus on speaking and real-life communication instead of only textbook learning." },
                  { title: "Personalized Attention", desc: "Get guidance and support according to your learning needs." },
                  { title: "Small Batch Sizes", desc: "More interaction, participation, and opportunities to practice speaking." },
                  { title: "Online Classes", desc: "Learn Spoken English from anywhere in India through live online classes." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <h4 className="text-lg text-foreground mb-1 font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
            What Our Students Say
          </h2>
          <p className="text-muted-foreground mb-16 flex items-center justify-center gap-2">
            4.6 <Star className="text-yellow-400 fill-yellow-400" size={16} /> Google Rating (Based on 67 Reviews)
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "STAR ENGLISH (Spoken English) is an excellent institute for learning Spoken English. The teaching method is very clear and practical.",
              "Professional and excellent training provided by the team. Significant improvement in English skills and confidence.",
              "Best Spoken English institute in town. Flexible scheduling and personalized attention."
            ].map((quote, i) => (
              <div key={i} className="liquid-glass p-8 rounded-3xl flex flex-col items-center text-center">
                <Star className="text-white/20 mb-6" size={32} />
                <p className="text-base text-foreground leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Learning. Practicing. Growing.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            Explore moments from our classrooms, student activities, English-speaking practice sessions, events, and learning journey.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden liquid-glass group">
                <img src={src} alt="Classroom Session" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 mix-blend-luminosity hover:mix-blend-normal" />
              </div>
            ))}
          </div>
        </section>

        {/* Online Classes & Admission */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="liquid-glass p-10 md:p-14 rounded-[40px] flex flex-col items-start justify-center">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Learn English From Anywhere
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Join live online Spoken English classes from the comfort of your home. Improve your communication skills through interactive sessions, practical speaking activities, and guided learning.
              </p>
              <a href="#contact" onClick={(e) => scrollToContact(e)} className="rounded-full px-8 py-3 text-sm text-foreground border border-white/20 hover:bg-white/5 transition-all inline-block">
                Join Online Classes
              </a>
            </div>
            <div className="liquid-glass p-10 md:p-14 rounded-[40px] flex flex-col items-start justify-center">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Ready to Speak English With Confidence?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Take the first step toward better communication, greater confidence, and new opportunities.
              </p>
              <a href="#contact" onClick={(e) => scrollToContact(e, 'counseling')} className="bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:scale-[1.03] transition-transform inline-block">
                Book Free Counselling
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-5xl md:text-6xl mb-12 text-center" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "Do you offer beginner Spoken English classes?", a: "Yes. Our beginner classes are designed for learners who want to build a strong foundation in English speaking, grammar, vocabulary, and everyday communication." },
              { q: "Can I join if my English is very weak?", a: "Absolutely. Our courses are designed for different learning levels, including beginners. You can start from your current level and gradually build confidence." },
              { q: "Do you offer advanced English classes?", a: "Yes. We offer advanced training focused on fluency, professional communication, presentations, interviews, and public speaking." },
              { q: "Do you provide online classes?", a: "Yes. Live online Spoken English classes are available for learners from anywhere in India." },
              { q: "Do you provide interview preparation?", a: "Yes. Our training can help improve communication, confidence, pronunciation, and speaking skills for interviews and professional situations." },
              { q: "How can I enroll?", a: "Contact us by phone or WhatsApp, or submit the enquiry form to learn more about available courses and admission." }
            ].map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="liquid-glass p-8 md:p-16 rounded-[40px] grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Get In Touch With Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Have questions about our courses? Contact Star English Spoken English and take the first step toward improving your English communication skills.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-white/60 mt-1" size={20} />
                  <div>
                    <h5 className="font-medium text-foreground">Address</h5>
                    <p className="text-sm text-muted-foreground mt-1">Panchayat College Road, Char Chowk,<br/>Bargarh, Odisha – 768028</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-white/60 mt-1" size={20} />
                  <div>
                    <h5 className="font-medium text-foreground">Phone & WhatsApp</h5>
                    <p className="text-sm text-muted-foreground mt-1">097787 23165</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-white/60 mt-1" size={20} />
                  <div>
                    <h5 className="font-medium text-foreground">Email</h5>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="mailto:starenglishspokenenglish@gmail.com" className="hover:text-white transition-colors">starenglishspokenenglish@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mt-8 mb-8 border border-white/10 relative">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.943141153723!2d83.61254315!3d21.3283592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213ccb98292e1f%3A0xc6e43fdbbf048b64!2sPanchayat%20College%20Rd%2C%20Bargarh%2C%20Odisha%20768028!5e0!3m2!1sen!2sin!4v1707572342001!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="absolute inset-0 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                 ></iframe>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <a href="tel:09778723165" className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-foreground border border-white/20 hover:bg-white/5 transition-all inline-flex">
                  <Phone size={16} /> Call Now
                </a>
                <a href="https://wa.me/919778723165?text=Hi%20Star%20English%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20courses." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-foreground border border-white/20 hover:bg-white/5 transition-all inline-flex">
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <a href="https://maps.google.com/?q=Panchayat+College+Road,+Char+Chowk,+Bargarh,+Odisha" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-foreground border border-white/20 hover:bg-white/5 transition-all inline-flex">
                  <MapPin size={16} /> Get Directions
                </a>
                <a href="https://www.instagram.com/starenglishprime" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-foreground border border-white/20 hover:bg-white/5 transition-all inline-flex">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="https://www.facebook.com/376154452577622/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-foreground border border-white/20 hover:bg-white/5 transition-all inline-flex">
                  <Facebook size={16} /> Facebook
                </a>
              </div>
            </div>

            <div className="bg-black/20 rounded-3xl p-8 border border-white/10">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 text-sm mb-2">
                    Thank you! Your enquiry has been received. We will contact you shortly.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm mb-2">
                    Failed to submit. Please try again or contact us via phone.
                  </div>
                )}
                <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} required placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors" />
                <input type="tel" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required placeholder="Phone Number" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors" />
                <input type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} placeholder="Email Address (Optional)" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors" />
                <select value={formCourse} onChange={(e) => setFormCourse(e.target.value)} required className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-foreground focus:outline-none focus:border-white/30 transition-colors appearance-none">
                  <option value="" className="bg-black text-muted-foreground" disabled>Select Course</option>
                  <option value="beginner" className="bg-black">Beginner Spoken English</option>
                  <option value="intermediate" className="bg-black">Intermediate Spoken English</option>
                  <option value="advanced" className="bg-black">Advanced Spoken English</option>
                  <option value="voice" className="bg-black">Voice & Accent</option>
                  <option value="counseling" className="bg-black">Free Counselling</option>
                </select>
                <textarea value={formMessage} onChange={(e) => setFormMessage(e.target.value)} placeholder="Message (Optional)" rows={4} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors resize-none"></textarea>
                <button type="submit" disabled={formStatus === 'submitting'} className="bg-white text-black rounded-xl px-5 py-4 text-sm font-medium mt-2 hover:bg-white/90 transition-colors disabled:opacity-50">
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full flex flex-col items-center text-center px-6 py-32 border-t border-white/10 mt-12">
          <h2 className="text-6xl md:text-8xl mb-6 leading-[0.9]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Don’t Just Learn English.<br/>
            <em className="not-italic text-muted-foreground">Start Speaking It.</em>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Your journey toward better communication and greater confidence starts with one conversation.
          </p>
          <a href="#contact" onClick={(e) => scrollToContact(e)} className="liquid-glass rounded-full px-12 py-5 text-base text-foreground hover:scale-[1.03] transition-transform inline-block">
            Start Your English Journey
          </a>
        </section>

        {/* Footer */}
        <footer className="w-full px-6 py-12 border-t border-white/10 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>Star English</span>
              <span className="text-xs text-muted-foreground mt-1">Spoken English</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#courses" className="hover:text-foreground transition-colors">Courses</a>
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
              <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </div>

            <div className="flex flex-col items-center md:items-end text-sm text-muted-foreground">
              <div className="flex gap-4 mb-2 text-foreground">
                <a href="https://www.instagram.com/starenglishprime" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/376154452577622/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
              <span>097787 23165</span>
              <a href="mailto:starenglishspokenenglish@gmail.com" className="hover:text-white transition-colors">starenglishspokenenglish@gmail.com</a>
              <span>Bargarh, Odisha</span>
            </div>
          </div>
          <div className="text-center text-xs text-white/30 mt-12">
            &copy; {new Date().getFullYear()} Star English Spoken English. All rights reserved.
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919778723165?text=Hi%20Star%20English%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse-glow"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}

