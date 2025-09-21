
export default function PdfViewer() {

  // Replace with your PDF file (public folder or URL)
  const pdfFile = "src/assets/resume.pdf";

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <a href={pdfFile} download className="mt-4">
        <button>Download Resume</button>
      </a>
    </div>
  );
}
