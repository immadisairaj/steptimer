import Hero from "@/components/Hero";
// import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing/Pricing";
// import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
// import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
// import Section from "@/components/Section";
// import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";

import Head from 'next/head';
import { siteDetails } from '@/data/siteDetails';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{siteDetails.metadata.title}</title>
        <meta name="description" content={siteDetails.metadata.description} />
        <meta property="og:title" content={siteDetails.metadata.title} />
        <meta property="og:description" content={siteDetails.metadata.description} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Hero />
      {/* <Logos /> */}
      <Container>
        {/* <Benefits /> */}

        {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section> */}

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}

        {/* <FAQ /> */}

        {/* <Stats /> */}
        
        {/* <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
