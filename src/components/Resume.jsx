export default function Resume() {

    const onButtonClick = () => {
        const pdfUrl = "https://docs.google.com/document/d/1jtWdCDDMOe7cwxrb-BXLSD0Y6tiw6A-AcAplADdhq30/export?format=pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MadisonEckstromresume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="resumeSection">
            <div className="resumeDiv">
                <h2 className="resumeH">download my resume here:</h2>
                <button className="Button" onClick={onButtonClick}>Download PDF</button>
            </div>
        </section>
    )
}