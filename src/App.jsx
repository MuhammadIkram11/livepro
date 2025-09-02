import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PasswordPage from './components/PasswordPage'
import WelcomePage from './components/WelcomePage'
import HowWeMetPage from './components/HowWeMetPage'
import OurJourneyPage from './components/OurJourneyPage'
import HowWeAreNowPage from './components/HowWeAreNowPage'
import WhyILikeYouPage from './components/WhyILikeYouPage'
import UrduPoetryPage from './components/UrduPoetryPage'
import ProposalPage from './components/ProposalPage'
import FinalPage from './components/FinalPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('password')
  const [proposalAccepted, setProposalAccepted] = useState(false)

  const goToPage = (page) => {
    setCurrentPage(page)
  }

  const handlePasswordCorrect = () => {
    setCurrentPage('welcome')
  }

  const handleProposalAccepted = () => {
    setProposalAccepted(true)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'password':
        return <PasswordPage onPasswordCorrect={handlePasswordCorrect} />
      case 'welcome':
        return <WelcomePage onNext={() => goToPage('how-we-met')} />
      case 'how-we-met':
        return (
          <HowWeMetPage 
            onNext={() => goToPage('our-journey')} 
            onPrevious={() => goToPage('welcome')} 
          />
        )
      case 'our-journey':
        return (
          <OurJourneyPage 
            onNext={() => goToPage('how-we-are-now')} 
            onPrevious={() => goToPage('how-we-met')} 
          />
        )
      case 'how-we-are-now':
        return (
          <HowWeAreNowPage 
            onNext={() => goToPage('why-i-like-you')} 
            onPrevious={() => goToPage('our-journey')} 
          />
        )
      case 'why-i-like-you':
        return (
          <WhyILikeYouPage 
            onNext={() => goToPage('urdu-poetry')} 
            onPrevious={() => goToPage('how-we-are-now')} 
          />
        )
      case 'urdu-poetry':
        return (
          <UrduPoetryPage 
            onNext={() => goToPage('proposal')} 
            onPrevious={() => goToPage('why-i-like-you')} 
          />
        )
      case 'proposal':
        return (
          <ProposalPage 
            onPrevious={() => goToPage('urdu-poetry')}
            onProposalAccepted={handleProposalAccepted}
          />
        )
      case 'final':
        return <FinalPage />
      default:
        return <PasswordPage onPasswordCorrect={handlePasswordCorrect} />
    }
  }

  // Show final page if proposal was accepted
  if (proposalAccepted && currentPage === 'proposal') {
    setCurrentPage('final')
  }

  return (
    <>
      <div className="hearts-bg" aria-hidden>
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 8) * 0.6}s`,
            }}
          >
            {i % 3 === 0 ? '💖' : i % 3 === 1 ? '💕' : '💗'}
          </span>
        ))}
      </div>

      <main className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
    </>
  )
}
