import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import { Link } from '@/components/link'

export default function NotFound() {
  return (
    <div className="overflow-hidden">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="mx-auto max-w-2xl text-center">
            <Heading as="h1" className="mt-2">
              Page not found
            </Heading>
            <p className="mt-6 text-lg/8 text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="mt-10">
              <Link href="/" className="text-base font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
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
