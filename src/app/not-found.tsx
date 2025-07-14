import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Concept 44"
        description="Sorry, the page you are looking for does not exist at Concept 44."
        image="/logo.png"
        url="https://concept44.com/404"
      />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </>
  );
}
