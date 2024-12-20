import React from 'react'
import ServicesHead from '../components/services/ServicesHead'
import ServicesHero from '../components/services/ServicesHero'
import Eric from '../components/services/Eric'
import LearnMoreSection from '../components/LearnMoreSection'
import FrequentlyAskedSection from '../components/Industry/FrequentlyAskedSection'
import TextList from '../components/TextList'
import Testimonials from '../components/Testimonials'
import GrowingSection from '../components/common/GrowingSection'
import InterestedSection from '../components/services/InterestedSection'

const Service = () => {
  return (
    <div>
      <ServicesHead/>
      <ServicesHero/>
      <Eric/>
      <LearnMoreSection/>
      <FrequentlyAskedSection/>
      <TextList/>
      <div className="my-24 ">
        <h1 className="text-5xl font-bold px-5">— Our clients love us</h1>
        <Testimonials />
      </div>
      <GrowingSection/>
      <InterestedSection/>
    </div>
  )
}

export default Service