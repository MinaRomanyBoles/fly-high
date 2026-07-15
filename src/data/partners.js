const encodePath = (folder, file) =>
  `/images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

export const commercialPartners = [
  { name: 'Zain', src: encodePath('partner logos 0', 'Copy of FINAL of FlyHigh Brothers Portfolio v4.jpg') },
  { name: 'Pepsi', src: encodePath('partner logos 0', 'Copy of FINAL of FlyHigh Brothers Portfolio v4 (1).jpg') },
  { name: 'alBaraka Bank', src: encodePath('partner logos 0', 'Copy of FINAL of FlyHigh Brothers Portfolio v4 (2).jpg') },
  { name: 'Chevrolet', src: encodePath('partner logos 0', 'Copy of FINAL of FlyHigh Brothers Portfolio v4 (3).jpg') },
  { name: 'Obour Land', src: encodePath('partner logos 0', 'Asset-1obourland-1.png') },
  { name: 'Banque Misr', src: encodePath('partner logos 0', 'بنك_مصر.png') },
  { name: 'EgyptAir', src: encodePath('partner logos 0', 'Logo-egypt-air-download-free-PNG.png') },
  { name: 'Cleopatra Group', src: encodePath('partner logos 0', 'مجموعة_كليوبترا.png') },
  { name: 'Madam Fashion', textOnly: true },
  { name: 'Al Tahhan', textOnly: true },
];

export const flyPartners = [
  { name: 'TP', src: encodePath('partner logos 1', 'tp.jpg') },
  { name: 'Innox Designs', src: encodePath('partner logos 1', '262025637_1704865276535137_6385091744149836263_n.jpg') },
  { name: 'CA', src: encodePath('partner logos 1', 'unnamed.png') },
  { name: 'Goldy', src: encodePath('partner logos 1', '455865377_2306981849683421_9222395338765210187_n.jpg') },
  { name: 'Hook & Needle Crochet', src: encodePath('partner logos 1', 'Copy of FINAL of FlyHigh Brothers Portfolio v4.jpg') },
  { name: 'Al Qoula Developments', src: encodePath('partner logos 1', '561180384_1260304022796127_5144862478840788595_n.jpg') },
  { name: 'NextGen Developments', src: encodePath('partner logos 1', 'web-logo-02.svg') },
  { name: 'Dubai Developments', src: encodePath('partner logos 1', 'Copy of FINAL of FlyHigh Brothers Portfolio v4 (1).jpg') },
  { name: 'Lumière Fragrances', src: encodePath('partner logos 1', 'Copy of FINAL of FlyHigh Brothers Portfolio v4 (2).jpg') },
  { name: 'Assaf', src: encodePath('partner logos 1', 'Copy of FINAL of FlyHigh Brothers Portfolio v4 (3).jpg') },
  { name: 'World Trip Deal', src: encodePath('partner logos 1', '2023-10-31.jpg') },
  { name: 'V', src: encodePath('partner logos 1', 'Copy of FINAL of FlyHigh Brothers Portfolio v4 (4).jpg') },
  { name: 'Vicekeeper', src: encodePath('partner logos 1', 'unnamed (1).png') },
  { name: 'Elite Developments', src: encodePath('partner logos 1', 'images.png') },
  { name: 'El Reefy Trading Co.', src: encodePath('partner logos 1', 'images.jpg') },
];
