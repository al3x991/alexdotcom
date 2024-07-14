import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              Template by UIdeck and{" "}
              <a href="https://nextjstemplates.com" rel="nofollow noopener">
                Next.js Templates
              </a>
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]"></div>
        <div className="absolute left-0 bottom-24 z-[-1]"></div>
      </footer>
    </>
  );
};

export default Footer;
