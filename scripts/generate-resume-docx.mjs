import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const outFile = path.resolve("Curriculo_Jefferson_Teles_2026.docx");
const workDir = fs.mkdtempSync(path.join(os.tmpdir(), "jefferson-docx-"));

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const p = (text, style = "Normal") =>
  `<w:p><w:pPr><w:pStyle w:val="${style}"/></w:pPr><w:r><w:t>${escapeXml(text)}</w:t></w:r></w:p>`;

const bullet = (text) =>
  `<w:p><w:pPr><w:pStyle w:val="Bullet"/></w:pPr><w:r><w:t>${escapeXml(text)}</w:t></w:r></w:p>`;

const heading = (text) => p(text, "Heading");
const job = (title, period) =>
  `<w:p><w:pPr><w:pStyle w:val="Job"/></w:pPr><w:r><w:t>${escapeXml(title)}</w:t></w:r><w:r><w:tab/></w:r><w:r><w:t>${escapeXml(period)}</w:t></w:r></w:p>`;

const body = [
  p("Jefferson Teles de Oliveira", "Title"),
  p("Estágio em Desenvolvimento | Desenvolvedor Júnior | Analista de Sistemas | Infraestrutura de TI", "Subtitle"),
  p("Cascavel/PR | (44) 99927-7915 | jeffersontelesdeoliveira@gmail.com | linkedin.com/in/jeffersonteless | github.com/JeffersonTeles | portifolio-jefferson-phi.vercel.app", "Contact"),
  heading("RESUMO"),
  p("Profissional de tecnologia com 6 anos de base prática em suporte, redes, Linux, hardware e automação. Cursa Engenharia de Software no Centro Universitário FAG, com conclusão prevista para novembro de 2026. Atua em suporte N2 para sistema fiscal SaaS, com média de 8 tickets/dia, e desenvolve projetos com React, Node.js, Supabase, JavaScript, Flutter/Dart e automações. Busca oportunidade como estagiário ou desenvolvedor júnior, com abertura também para análise de sistemas e infraestrutura."),
  heading("COMPETÊNCIAS TÉCNICAS"),
  p("Frontend: React, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Vite, Zustand"),
  p("Backend e dados: Node.js, Express, Python, PostgreSQL, Supabase, SQL, APIs REST"),
  p("Mobile: Flutter, Dart, Android, SQLite, integrações REST"),
  p("Automação: n8n, Gemini AI, Webhooks, JSON, fluxos de integração"),
  p("Infraestrutura: Linux, Windows, TCP/IP, DNS, VPN, Mikrotik, Ubiquiti, fibra ótica"),
  p("Ferramentas: Git/GitHub, Docker, VS Code, Trello, AnyDesk, TeamViewer"),
  heading("EXPERIÊNCIA PROFISSIONAL"),
  job("Analista de Suporte Júnior | FaturAgil", "Mar 2026 - atual"),
  bullet("Atendimento N2 em sistema fiscal SaaS, auxiliando clientes em emissão de notas fiscais, NBS/CBS, alíquotas e rotinas de faturamento."),
  bullet("Média de 8 tickets/dia, com investigação de causa, orientação ao cliente e registro de recorrências."),
  bullet("Geração, atualização e instalação de certificados digitais A1/A3 (.cer, .pem, .p12, .key) em ambiente Linux."),
  bullet("Homologação de APIs de Prefeituras para emissão de NFS-e e repasse de bugs/melhorias ao time de desenvolvimento."),
  job("Técnico em Eletrônica e Automação Industrial | Maguinho Sensores", "Mar 2025 - Fev 2026"),
  p("Tupãssi/PR", "Meta"),
  bullet("Montagem e manutenção de módulos eletrônicos, chicotes elétricos e sensores para automação de máquinas agrícolas."),
  bullet("Diagnóstico de falhas em sistemas embarcados e equipamentos em campo, contribuindo para reduzir paradas operacionais."),
  bullet("Integração de sensores com Arduino/ESP32, fiação, solda e testes de funcionamento."),
  bullet("Atendimento técnico direto ao cliente, identificando problemas e propondo soluções para o ambiente agrícola."),
  job("Técnico de TI - Suporte, Redes e Hardware | Digital Informática", "Jan 2020 - Fev 2025"),
  p("Tupãssi/PR | atuação formal e autônoma ao longo do período", "Meta"),
  bullet("Suporte presencial em residências e empresas, com diagnóstico, manutenção e conserto de computadores e notebooks."),
  bullet("Configuração de redes LAN/WAN, roteadores, IP fixo/dinâmico, DNS, cabeamento estruturado, VPN e CFTV."),
  bullet("Administração de redes wireless com Mikrotik e Ubiquiti para clientes residenciais e corporativos."),
  bullet("Instalação de certificados digitais A1/A3, tokens e drivers em ambientes Windows e Linux."),
  bullet("Infraestrutura de fibra ótica: passagem de cabos drop, conectorização e emendas por fusão."),
  heading("PROJETOS"),
  job("Interface Gráfica para Mouse X11 no Linux", "Open source"),
  p("JavaScript, Python, HTML, CSS, Linux | github.com/JeffersonTeles", "Meta"),
  bullet("Interface gráfica para configurar mouse X11 no Linux sem depender de comandos manuais no terminal."),
  bullet("Projeto documentado no GitHub para ajudar usuários com periféricos sem suporte nativo adequado."),
  job("Maestria Docente - Sistema Web Fullstack", "TCC | privado"),
  p("React, Vite, Tailwind CSS, Zustand, Node.js, Express, PostgreSQL, Supabase", "Meta"),
  bullet("Projeto acadêmico de TCC voltado ao acompanhamento de trilhas, cursos e certificados docentes."),
  bullet("Atuação em frontend, organização de fluxo, modelagem inicial e integração com backend/banco de dados."),
  bullet("Repositório e detalhes funcionais mantidos privados por envolver contexto acadêmico/institucional."),
  job("Site de Casamento com RSVP", "Projeto pessoal"),
  p("Next.js, React, Tailwind CSS | casamento-ten-rho.vercel.app", "Meta"),
  bullet("Site responsivo para convite de casamento, confirmação de presença e informações aos convidados."),
  bullet("Foco em experiência simples no celular, navegação direta e publicação em ambiente Vercel."),
  heading("FORMAÇÃO"),
  p("Bacharelado em Engenharia de Software | Centro Universitário FAG, Cascavel/PR | Conclusão prevista: Novembro de 2026"),
  heading("INFORMAÇÕES ADICIONAIS"),
  p("Idiomas: Português nativo; Inglês intermediário para leitura técnica | Disponibilidade: imediata | Preferência: remoto ou Cascavel/PR"),
].join("");

const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`;

const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

const documentRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`;

const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="70" w:line="250" w:lineRule="auto"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="20"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:pPr><w:spacing w:after="40"/></w:pPr><w:rPr><w:b/><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="34"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Subtitle"><w:name w:val="Subtitle"/><w:pPr><w:spacing w:after="30"/></w:pPr><w:rPr><w:b/><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="21"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Contact"><w:name w:val="Contact"/><w:pPr><w:spacing w:after="110"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="18"/><w:color w:val="374151"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading"><w:name w:val="Heading"/><w:pPr><w:spacing w:before="120" w:after="50"/><w:pBdr><w:bottom w:val="single" w:sz="4" w:space="2" w:color="D1D5DB"/></w:pBdr></w:pPr><w:rPr><w:b/><w:caps/><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="21"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Job"><w:name w:val="Job"/><w:pPr><w:spacing w:before="70" w:after="20"/><w:tabs><w:tab w:val="right" w:pos="9360"/></w:tabs></w:pPr><w:rPr><w:b/><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="20"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Meta"><w:name w:val="Meta"/><w:pPr><w:spacing w:after="20"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="18"/><w:color w:val="4B5563"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Bullet"><w:name w:val="Bullet"/><w:pPr><w:spacing w:after="25"/><w:ind w:left="360" w:hanging="180"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="19"/></w:rPr></w:style>
</w:styles>`;

const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${body}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="680" w:right="680" w:bottom="680" w:left="680" w:header="0" w:footer="0" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`;

const write = (file, contents) => {
  const target = path.join(workDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
};

write("[Content_Types].xml", contentTypes);
write("_rels/.rels", rels);
write("word/_rels/document.xml.rels", documentRels);
write("word/styles.xml", styles);
write("word/document.xml", document);

try {
  fs.rmSync(outFile, { force: true });
  execFileSync("zip", ["-qr", outFile, "."], { cwd: workDir });
  console.log(outFile);
} finally {
  fs.rmSync(workDir, { recursive: true, force: true });
}
