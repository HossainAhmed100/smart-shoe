export default function About() {
  return (
    <>
      <section className="max-w-[1024px] m-auto py-12 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[550px_1fr]">
            <div className="flex flex-col items-start justify-center gap-6">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Sustainability
                </div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-3xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Crafting Footwear with Purpose
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                At Sole Stride, we believe that every step you take should be fueled by a deeper purpose. Our mission is
                to create high-quality, sustainable footwear that empowers you to confidently pursue your passions.
              </p>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              height="500"
              src="https://i.ibb.co/wJBNQwK/Rectangle-20.png"
              width="700"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1024px] m-auto py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[550px_1fr]">
            <div className="space-y-4">
            <div className="flex flex-col items-start justify-center gap-6">
                <div className="inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm dark:bg-gray-800">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crafting Footwear Since 1985</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Sole Stride was founded in 1985 by two passionate entrepreneurs, John and Jane Doe, who shared a
                  vision of creating high-quality, sustainable footwear that would empower people to live their best
                  lives.
                </p>
              </div>
              <ul className="grid gap-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Established in 1985 in a small workshop in Portland, Oregon
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Expanded to a global brand with a focus on sustainable manufacturing
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Recognized for our commitment to ethical and eco-friendly practices
                </li>
              </ul>
            </div>
            <img
              alt="Our Story"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://i.ibb.co/d2WpxNL/a.png" 
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1024px] m-auto py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[550px_1fr]">
            <img
              alt="Sustainability"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              src="https://i.ibb.co/yqDNvmr/w.png" 
              width="350"
            />
            <div className="space-y-4">
            <div className="flex flex-col items-start justify-center gap-6">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Sustainability
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Committed to a Greener Future</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  At Sole Stride, we are committed to sustainable and ethical manufacturing practices. We use
                  eco-friendly materials, such as recycled plastics and organic cotton, and our production processes are
                  designed to minimize waste.
                </p>
              </div>
              <ul className="grid gap-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Eco-friendly materials, including recycled plastics and organic cotton
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Sustainable manufacturing processes that minimize waste and reduce carbon emissions
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Partnerships with local communities to support fair labor practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}