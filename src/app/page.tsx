import ClientOnly from '@/components/ClientOnly'
import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PricingSection from '@/components/sections/PricingSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <ClientOnly>
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <PricingSection />
        <ContactSection />
      </ClientOnly>
    </main>
  )
}