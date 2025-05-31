export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      className="max-w-lg mx-auto p-4"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-white">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-white">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 dark:text-white">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  );
}
