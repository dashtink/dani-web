import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Link } from '@/components/link'

export default function NotFound() {
  return (
    <div className="overflow-hidden bg-bg-base">
      <Container className="relative">
        <Navbar />
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg/8 text-text-secondary">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <Link href="/" className="text-base font-semibold text-accent-green hover:text-[#7fe89a]">
                Go back home <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
