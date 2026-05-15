from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from pathlib import Path

out = Path(r"F:/backtest/prd-profolio/public/cv/HoangPham-CV.pdf")
out.parent.mkdir(parents=True, exist_ok=True)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Name', fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=colors.HexColor('#111827')))
styles.add(ParagraphStyle(name='Role', fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=colors.HexColor('#2563eb')))
styles.add(ParagraphStyle(name='Section', fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=colors.HexColor('#2563eb'), spaceAfter=4))
styles.add(ParagraphStyle(name='Body', fontName='Helvetica', fontSize=8.7, leading=11.2, textColor=colors.HexColor('#374151')))
styles.add(ParagraphStyle(name='Small', fontName='Helvetica', fontSize=8, leading=10, textColor=colors.HexColor('#4b5563')))
styles.add(ParagraphStyle(name='Job', fontName='Helvetica-Bold', fontSize=9.5, leading=12, textColor=colors.HexColor('#111827')))
styles.add(ParagraphStyle(name='Meta', fontName='Helvetica-Bold', fontSize=7.5, leading=9.5, textColor=colors.HexColor('#6b7280')))

summary = "Graphic designer focused on Web3 and DeFi, creating visuals that simplify complex concepts and strengthen audience engagement across marketing, social content, and brand communication."

left_jobs = [
    ("Multimedia Marketing Designer — Factor", "2024 — Present", [
        "Developed and maintained brand identity across platforms.",
        "Created illustrations, 2D/3D motion, campaign visuals, and demo assets.",
        "Designed reusable templates for decks, reports, and recurring social content.",
    ]),
    ("Multimedia Marketing Designer — Kyber Network", "2022 — 2024", [
        "Created digital assets for DeFi marketing campaigns and social media.",
        "Built multimedia content tailored to crypto-native audiences.",
        "Organized graphic assets for faster reuse and more consistent output.",
    ]),
    ("Multimedia Designer — VNG Corporation", "2020 — 2022", [
        "Created digital marketing posts, animated videos, stylized game art, and 3D elements.",
    ]),
]

right_jobs = [
    ("2D/3D Designer — ADT Group", "2019 — 2020", "Digital marketing posts, infographics, event visuals, simple animation, and 3D presentation support."),
    ("3D Designer — Creasia", "2018 — 2019", "Designed event activations, displays, staging, signage, banners, flyers, and invitations."),
    ("2D/3D Designer — Tri Luc Viet", "2017 — 2018", "Executed artwork layouts, POSM design, and print-production support."),
]

skills = "Graphic Design • Multimedia Design • Illustration • Motion Design • 2D/3D Design • Brand Assets • Social Media Visuals"
interests = "DeFi • Blockchain • Gaming • Technology"
contact = "dneafm@gmail.com  |  Ho Chi Minh  |  linkedin.com/hoangpham74"

doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=14*mm, rightMargin=14*mm, topMargin=12*mm, bottomMargin=12*mm)
story = []

story.append(Paragraph("Hoang Pham", styles['Name']))
story.append(Paragraph("DEFI DESIGNER", styles['Role']))
story.append(Spacer(1, 4))
story.append(Paragraph(contact, styles['Small']))
story.append(Spacer(1, 8))
story.append(Paragraph(summary, styles['Body']))
story.append(Spacer(1, 10))

left = []
left.append(Paragraph("EXPERIENCE", styles['Section']))
for title, years, bullets in left_jobs:
    left.append(Paragraph(title, styles['Job']))
    left.append(Paragraph(years, styles['Meta']))
    for bullet in bullets:
        left.append(Paragraph(f"• {bullet}", styles['Body']))
    left.append(Spacer(1, 4))

right = []
right.append(Paragraph("EARLIER EXPERIENCE", styles['Section']))
for title, years, desc in right_jobs:
    right.append(Paragraph(title, styles['Job']))
    right.append(Paragraph(years, styles['Meta']))
    right.append(Paragraph(desc, styles['Body']))
    right.append(Spacer(1, 4))
right.append(Spacer(1, 4))
right.append(Paragraph("SKILLS", styles['Section']))
right.append(Paragraph(skills, styles['Body']))
right.append(Spacer(1, 6))
right.append(Paragraph("INTERESTS", styles['Section']))
right.append(Paragraph(interests, styles['Body']))

table = Table([[left, right]], colWidths=[118*mm, 58*mm])
table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
]))
story.append(table)

doc.build(story)
print(out)
