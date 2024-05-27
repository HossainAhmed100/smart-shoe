/* eslint-disable react/no-unescaped-entities */


export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a question or want to work with us? Fill out the form and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-6 sm:p-8 dark:bg-gray-950">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                id="name"
                placeholder="Your name"
                required
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                id="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                id="message"
                placeholder="Your message..."
                required
                rows={4}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

