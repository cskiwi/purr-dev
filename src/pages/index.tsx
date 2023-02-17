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
              <p className={`mb-6 text-lg text-gray-700 dark:text-gray-300`}>
                We are a company dedicated to creating high-quality (web)apps.
              </p>
              {/* <a
                href="/blog"
                className={`rounded-full bg-purple-600 py-2 px-6 text-white hover:bg-purple-700 dark:hover:bg-purple-500`}
              >
                Check out our latest blog posts
              </a> */}
            </div>
            {/* <div className="flex justify-center items-center">
              <Image src="/purr-dev-logo.png" alt="Purr.Dev logo" width={400} height={400} />
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
