import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">Get in Touch</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl mb-6">
              I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want
              to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" size={24} />
                <span>sowmyaa2406@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" size={24} />
                <span>00000000</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" size={24} />
                <span>India</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md bg-muted text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md bg-muted text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 rounded-md bg-muted text-foreground"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

