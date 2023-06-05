import Link from "next/link";
import Image from "next/image";

export default function DownloadPresentation() {
  return (
    <Link href="/files/kalina_soft_presentation.pdf" target="_blank" download>
      <button className="hero-button download-pdf-button mr-4">
        <Image
          src="/images/downloadPdfSpinning_icon.svg"
          alt=""
          width={200}
          height={50}
          className="pdf-button-icon"
        />
        <Image
          src="/images/downloadPdfSpinning_letters.svg"
          alt=""
          width={200}
          height={50}
          className="pdf-button-icon spinning"
        />
      </button>
    </Link>
  );
}
