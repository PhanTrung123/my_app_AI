export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} AI-Powered PDF Summarization. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
