export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Ken Yeck. All rights reserved.</p>
      <div className="mt-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kyeckeq"
          className="mx-2 hover:text-gray-300"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/kenyeck/"
          className="mx-2 hover:text-gray-300"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
