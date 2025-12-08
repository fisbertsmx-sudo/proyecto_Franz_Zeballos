import OnboardingCarousel from '../components/OnboardingCarousel'

export default function Onboarding(){
  return (
    <main className="w-full max-w-2xl mx-auto pt-6 md:pt-12 p-3 md:p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Bienvenido</h1>
        <p className="text-sm md:text-base text-gray-600">Únete al marketplace circular</p>
      </div>
      <OnboardingCarousel />
    </main>
  )
}
