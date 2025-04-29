const PDFDocument = require("pdfkit");

const HeroiModel = require("../models/heroiModel");

const exportHeroiPDF = async (req, res)=> {
    try {
        const herois = await HeroiModel.getHerois();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=users.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //titulo
        doc.fontSize(30).text("Relatorio de Herois", {align: "center"});
        doc.moveDown();

        //cabeçalho
        doc.fontSize(18).text("Id | Nome | Editora", {underline: true});
        doc.moveDown(0.5);

        // add dados herois
        herois.forEach((herois) => {
            doc.text(
                `${herois.id} | ${herois.name} | ${herois.editora_id}`,
            )
        });
        doc.end();
    } catch (error) {
        res.status(500).json({message: "erro ao gerar o PDF"})
    }
}

module.exports = {exportHeroiPDF}