import { useRef } from "react"
import { Button } from "../ui/button"
import Swal from 'sweetalert2'

export default function EmailForm({ access }: { access: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)

      formData.append("access_key", access)


      const object = Object.fromEntries(formData)
      const json = JSON.stringify(object)

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())

      if (res.success) {

        if (formRef.current) {
          formRef.current.reset()
        }
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent',
          icon: 'success',
          confirmButtonText: 'Ok',
          theme: 'dark'
        })
      }
  }

  return (
    <form ref={formRef} onSubmit={e => onSubmit(e)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-white/80 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-white/80 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-white/80 block">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Subject"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-white/80 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">Send Message</Button>
    </form>
  )
}
