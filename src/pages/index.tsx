import Head from "next/head";

const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Purr.Dev - Welcome to our site</title>
      </Head>
      <main className={`min-h-screen bg-gray-100 dark:bg-gray-900`}>
        <section className="container mx-auto py-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center md:items-start">
            <h1 className="mb-4 text-4xl font-bold text-purple-600">
                Welcome to Purr.Dev!
              </h1>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                At Purr.Dev, we&apos;re passionate about building top-notch web
                apps that help our clients achieve their business goals. With a
                focus on quality and efficiency, we work closely with our
                clients to create solutions that meet their unique needs and
                exceed their expectations.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                But we&apos;re not just experts in web development. We also
                pride ourselves on providing exceptional customer service. Our
                team is committed to communicating clearly and effectively with
                our clients throughout the development process, so you always
                know what&apos;s going on and what to expect.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                So why choose Purr.Dev? We believe that our commitment to
                quality, efficiency, and customer service sets us apart from the
                competition. We don&apos;t just build websites and apps – we
                build solutions that help your business grow and thrive.
              </p>
              <button className="mt-6 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-600">
                Contact us today
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
