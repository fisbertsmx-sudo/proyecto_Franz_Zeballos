import OnboardingCarousel from '../components/OnboardingCarousel'

export default function Onboarding(){
  return (
    <main className="max-w-2xl mx-auto pt-12 p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Bienvenido</h1>
        <p className="text-gray-600">Únete al marketplace circular</p>
      </div>
      <OnboardingCarousel />
    </main>
  )
}
