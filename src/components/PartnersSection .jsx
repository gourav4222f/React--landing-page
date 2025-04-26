import Marquee from "react-fast-marquee";

// Replace these with your actual partner logos
const partners = [
    'partner/img01.png',
    'partner/img02.png',
    'partner/img03.png',
    'partner/img04.png',
    'partner/img05.png',
    'partner/img06.png',
    'partner/img07.png',
    'partner/img08.png',
    'partner/img09.png',
    'partner/img10.png',
    'partner/img11.png',
    'partner/img12.png',
    'partner/img13.png',
    'partner/img14.png',
    'partner/img15.png',
    'partner/img16.png',
    'partner/img17.png',
    'partner/img18.png',
    'partner/img19.png',
    'partner/img20.png',
    'partner/img21.png',
    'partner/img22.png',
    'partner/img23.png',
    'partner/img24.png',
    'partner/img25.png',
    'partner/img26.png',
    'partner/img27.png',
    'partner/img28.png',
    'partner/img29.png',
];

const PartnersSection = () => {
    // Split the array into three parts
    const partners1 = partners.slice(0, 10);
    const partners2 = partners.slice(10, 20);
    const partners3 = partners.slice(20, 29);

    // Double the arrays for seamless infinite scroll
    const duplicatedPartners1 = [...partners1, ...partners1];
    const duplicatedPartners2 = [...partners2, ...partners2];
    const duplicatedPartners3 = [...partners3, ...partners3];

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4"></div>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Trusted By
            </h2>

            <div className=" flex flex-col justify-center items-center gap-y-14">
                <Marquee gradient={false} speed={20}>
                    {duplicatedPartners1.map((partner, index) => (
                        <img
                            key={index}
                            src={partner}
                            alt={`Partner ${index + 1}`}
                            className=" h-20 mx-4"
                        />
                    ))}
                </Marquee>
                <Marquee direction gradient={false} speed={70}>
                    {duplicatedPartners2.map((partner, index) => (
                        <img
                            key={index}
                            src={partner}
                            alt={`Partner ${index + 1}`}
                            className=" h-20 mx-4"
                        />
                    ))}
                </Marquee>
                <Marquee gradient={false} speed={100}>
                    {duplicatedPartners3.map((partner, index) => (
                        <img
                            key={index}
                            src={partner}
                            alt={`Partner ${index + 1}`}
                            className=" h-20 mx-4"
                        />
                    ))}
                </Marquee>
            </div>


        </section>
    );
};

export default PartnersSection;