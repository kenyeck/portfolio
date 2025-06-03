import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({
  src,
  alt,
  isOpen,
  onClose
}: ImageModalProps) {

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Full-size image */}
            <Image
              src={src}
              alt={alt}
              width={1200} // Adjust based on image size or use dynamic sizing
              height={630}
              className="object-contain max-w-full max-h-[90vh] rounded-lg"
              priority={true}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </div>
        </div>
      )}
    </>
  );
}
