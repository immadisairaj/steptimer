import Container from "@/components/Container";
import PrivacyPolicy from '@/data/legal/privacy-policy.mdx'

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <section
                className="relative flex items-center justify-center pb-0 pt-20 md:pt-16 px-5"
            >
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl">
                        Privacy Policy
                    </h2>
                </div>
            </section>

            <Container>
                <div className="mx-auto border border-stroke p-6 md:p-10" style={{ margin: '1.5rem 0', borderRadius: '10px' }}>
                    <div className="block w-full">
                        {/* Left-align the content */}
                        {/* <div className="prose prose-lg max-w-none text-left">
                            <PrivacyPolicy />
                        </div> */}
                        <div className="prose prose-lg max-w-none text-left">
                            <PrivacyPolicy />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PrivacyPolicyPage;
