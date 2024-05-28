import { Button, Input, Textarea } from "@nextui-org/react";

export default function Contact() {
  return (
      <section className="max-w-[1024px] m-auto py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Have a question or want to work together? Fill out the form below or give us a call.
            </p>
            <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Location</h2>
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">123 Main Street, Anytown USA 12345</p>
              <p className="text-gray-500 dark:text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-500 dark:text-gray-400">Email: info@example.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">Business Hours:</p>
              <p className="text-gray-500 dark:text-gray-400">Monday - Friday: 9am - 5pm</p>
              <p className="text-gray-500 dark:text-gray-400">Saturday - Sunday: Closed</p>
            </div>
          </div>
          </div>
          <div className="grid gap-6">
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              placeholder="Enter your name"
              variant="bordered"
            />
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Textarea 
            label="Messages"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your message" />
            <Button className="w-full bg-black text-white" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </section>
  )
}