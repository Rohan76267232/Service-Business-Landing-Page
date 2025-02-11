import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Features2 from './components/Features2';
import HowItWorks from './components/HowItWorks';
import ProductFeatures from './components/ProductFeatures';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App(): JSX.Element {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } as EventListener);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <Stats />
      <Features2 />
      <Features />
      <HowItWorks />
      <ProductFeatures />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;