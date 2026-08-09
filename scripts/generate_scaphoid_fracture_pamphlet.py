from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
OUT_PATH = ROOT / "public" / "patient-guides" / "pdfs" / "scaphoid-fracture-guide.pdf"
IMAGE_PATH = ROOT / "public" / "patient-guides" / "illustrations" / "scaphoid-fracture" / "overview.png"
FONT_DIR = Path("C:/Windows/Fonts")

INK = HexColor("#173A4D")
TEAL = HexColor("#1FA89B")
MINT = HexColor("#EAF7F5")
SKY = HexColor("#EEF5F8")
WARM = HexColor("#FFF7E4")
RED = HexColor("#B42318")
RED_BG = HexColor("#FFF0EE")
MUTED = HexColor("#52616B")
LINE = HexColor("#D8E3E8")


def register_fonts():
    regular = FONT_DIR / "malgun.ttf"
    bold = FONT_DIR / "malgunbd.ttf"
    if not regular.exists() or not bold.exists():
        raise FileNotFoundError("Malgun Gothic fonts were not found in C:/Windows/Fonts")
    pdfmetrics.registerFont(TTFont("MalgunGothic", str(regular)))
    pdfmetrics.registerFont(TTFont("MalgunGothic-Bold", str(bold)))
    registerFontFamily(
        "MalgunGothic",
        normal="MalgunGothic",
        bold="MalgunGothic-Bold",
        italic="MalgunGothic",
        boldItalic="MalgunGothic-Bold",
    )


def paragraph(canvas_obj, text, x, top, width, style):
    block = Paragraph(text, style)
    _, height = block.wrap(width, 1000)
    block.drawOn(canvas_obj, x, top - height)
    return height


def rounded_card(canvas_obj, x, y, width, height, fill, stroke=LINE, radius=12):
    canvas_obj.setFillColor(fill)
    canvas_obj.setStrokeColor(stroke)
    canvas_obj.roundRect(x, y, width, height, radius, stroke=1, fill=1)


def bullet_block(canvas_obj, items, x, top, width, style):
    cursor = top
    for item in items:
        canvas_obj.setFillColor(TEAL)
        canvas_obj.circle(x + 5, cursor - 7, 3, stroke=0, fill=1)
        used = paragraph(canvas_obj, item, x + 16, cursor, width - 16, style)
        cursor -= used + 10
    return top - cursor


def draw_footer(canvas_obj, page_number):
    canvas_obj.setStrokeColor(LINE)
    canvas_obj.line(18 * mm, 16 * mm, A4[0] - 18 * mm, 16 * mm)
    canvas_obj.setFont("MalgunGothic", 7.8)
    canvas_obj.setFillColor(MUTED)
    canvas_obj.drawString(18 * mm, 10.5 * mm, "새기준병원 관절센터 · 주상골 골절 일반 환자안내")
    canvas_obj.drawRightString(A4[0] - 18 * mm, 10.5 * mm, f"{page_number} / 2")


def build_pdf():
    register_fonts()
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    page_width, page_height = A4
    c = canvas.Canvas(str(OUT_PATH), pagesize=A4, pageCompression=1)
    c.setTitle("주상골 골절 환자안내 | 새기준병원 관절센터")
    c.setAuthor("새기준병원 관절센터")
    c.setSubject("주상골 골절의 증상, 검사, 고정과 치료 선택을 설명하는 일반 환자안내")

    styles = getSampleStyleSheet()
    eyebrow = ParagraphStyle(
        "eyebrow", parent=styles["Normal"], fontName="MalgunGothic-Bold", fontSize=9,
        leading=12, textColor=TEAL, spaceAfter=0, alignment=TA_LEFT
    )
    h1 = ParagraphStyle(
        "h1", parent=styles["Normal"], fontName="MalgunGothic-Bold", fontSize=24,
        leading=31, textColor=INK, wordWrap="CJK"
    )
    h2 = ParagraphStyle(
        "h2", parent=styles["Normal"], fontName="MalgunGothic-Bold", fontSize=15,
        leading=21, textColor=INK, wordWrap="CJK"
    )
    card_title = ParagraphStyle(
        "card-title", parent=styles["Normal"], fontName="MalgunGothic-Bold", fontSize=11.5,
        leading=16, textColor=INK, wordWrap="CJK"
    )
    body = ParagraphStyle(
        "body", parent=styles["Normal"], fontName="MalgunGothic", fontSize=9.4,
        leading=14.2, textColor=MUTED, wordWrap="CJK"
    )
    body_small = ParagraphStyle(
        "body-small", parent=body, fontSize=8.1, leading=11.8
    )
    white_body = ParagraphStyle(
        "white-body", parent=body, textColor=white
    )
    red_body = ParagraphStyle(
        "red-body", parent=body, textColor=RED
    )

    margin = 18 * mm

    # Page 1
    c.setFillColor(INK)
    c.rect(0, page_height - 30 * mm, page_width, 30 * mm, stroke=0, fill=1)
    c.setFont("MalgunGothic-Bold", 16)
    c.setFillColor(white)
    c.drawString(margin, page_height - 18 * mm, "새기준병원")
    c.setFont("MalgunGothic", 8.5)
    c.drawString(margin, page_height - 23 * mm, "관절센터 · 질환별 환자안내")

    top = page_height - 45 * mm
    paragraph(c, "WRIST FRACTURE GUIDE", margin, top, 230, eyebrow)
    top -= 18
    used = paragraph(c, "넘어진 뒤 엄지 쪽\n손목이 아프다면", margin, top, 280, h1)
    top -= used + 9
    paragraph(c, "주상골 골절은 초기 X-ray에서 골절선이 뚜렷하지 않을 수 있습니다. 통증 위치와 진찰, 필요한 영상검사를 함께 확인하고 골절이 배제될 때까지 손목을 보호하는 것이 중요합니다.", margin, top, 276, body)

    image_x = 336
    image_y = 264
    image_w = 206
    image_h = 309
    rounded_card(c, image_x - 6, image_y - 6, image_w + 12, image_h + 12, HexColor("#F6F9FA"))
    c.drawImage(ImageReader(str(IMAGE_PATH)), image_x, image_y, width=image_w, height=image_h, preserveAspectRatio=True, anchor="c", mask="auto")
    c.setFont("MalgunGothic", 7.1)
    c.setFillColor(MUTED)
    c.drawCentredString(image_x + image_w / 2, image_y - 16, "AI 기반 3D 의료 일러스트 · 실제 환자 영상이 아닙니다")

    left_x = margin
    card_y = 322
    card_w = 262
    card_h = 118
    rounded_card(c, left_x, card_y, card_w, card_h, MINT)
    paragraph(c, "<b>왜 놓치기 쉬울까요?</b>", left_x + 15, card_y + card_h - 17, card_w - 30, card_title)
    paragraph(c, "주상골은 엄지 쪽 손목의 작은 뼈입니다. 손을 짚고 넘어진 뒤 이 부위가 아픈데 초기 X-ray가 뚜렷하지 않으면, 추가 촬영 또는 MRI·CT가 필요할 수 있습니다.", left_x + 15, card_y + card_h - 40, card_w - 30, body)

    rounded_card(c, left_x, 183, page_width - 2 * margin, 112, SKY)
    paragraph(c, "진료 전 이렇게 확인해 보세요", left_x + 16, 278, page_width - 2 * margin - 32, h2)
    bullet_block(c, [
        "엄지손가락 아래 오목한 부위를 누를 때 아픈지",
        "물건을 쥐거나 손목을 비틀 때 통증이 심해지는지",
        "처음 촬영한 X-ray, 응급실 기록, 이전 부목·약 처방이 있는지"
    ], left_x + 16, 249, page_width - 2 * margin - 32, body)

    c.setFillColor(INK)
    c.roundRect(left_x, 82, page_width - 2 * margin, 70, 14, stroke=0, fill=1)
    paragraph(c, "<b>지금 가장 중요한 원칙</b>", left_x + 16, 135, page_width - 2 * margin - 32, ParagraphStyle("white-title", parent=card_title, textColor=white))
    paragraph(c, "골절이 의심되는 동안에는 손목을 고정 장치로 보호하고, 정해진 진료·영상검사 일정을 지키세요. 무거운 물건 들기와 손목을 세게 비트는 동작은 피합니다.", left_x + 16, 111, page_width - 2 * margin - 32, white_body)
    draw_footer(c, 1)
    c.showPage()

    # Page 2
    c.setFillColor(INK)
    c.setFont("MalgunGothic-Bold", 20)
    c.drawString(margin, page_height - 28 * mm, "검사부터 회복까지, 치료를 정하는 순서")
    paragraph(c, "주상골 골절은 골절선의 위치와 어긋남, 뼈가 붙는 과정에 따라 치료가 달라집니다. 아래 순서는 일반적인 환자 교육용 안내입니다.", margin, page_height - 37 * mm, page_width - 2 * margin, body)

    columns = [
        (margin, "01", "진찰과 영상검사", [
            "통증 위치, 손목 움직임, 손가락 감각과 혈류를 확인합니다.",
            "X-ray에서 확인이 어려우면 상태에 따라 MRI 또는 추가 X-ray를 고려합니다.",
            "골절이 보이면 CT로 골절선과 어긋남을 더 자세히 살필 수 있습니다."
        ], SKY),
        (margin + 171, "02", "고정 치료 또는 수술 상담", [
            "어긋남이 적고 안정적인 골절은 석고 또는 보조기로 고정할 수 있습니다.",
            "어긋남·불안정성이 크거나 골절이 잘 붙지 않으면 수술적 고정을 상담할 수 있습니다.",
            "수술 여부는 영상검사만이 아니라 손목 기능과 생활 목표를 함께 고려합니다."
        ], MINT),
        (margin + 342, "03", "추적 확인과 회복", [
            "추적 X-ray 또는 CT로 정렬과 뼈 붙음을 확인합니다.",
            "의료진 지시에 따라 손목 운동과 가벼운 사용을 단계적으로 시작합니다.",
            "쥐는 힘, 통증, 영상검사 결과를 함께 보며 업무·운동 복귀 시점을 정합니다."
        ], WARM)
    ]
    card_top = page_height - 61 * mm
    for x, number, heading, items, tone in columns:
        width = 157
        height = 276
        y = card_top - height
        rounded_card(c, x, y, width, height, tone)
        c.setFillColor(TEAL)
        c.setFont("MalgunGothic-Bold", 10)
        c.drawString(x + 14, card_top - 20, number)
        paragraph(c, heading, x + 14, card_top - 37, width - 28, h2)
        bullet_block(c, items, x + 14, card_top - 78, width - 28, body_small)

    urgent_y = 226
    rounded_card(c, margin, urgent_y, page_width - 2 * margin, 103, RED_BG, HexColor("#F0B7AE"))
    paragraph(c, "<b>빠른 진료가 필요한 신호</b>", margin + 16, urgent_y + 84, page_width - 2 * margin - 32, ParagraphStyle("red-title", parent=card_title, textColor=RED))
    bullet_block(c, [
        "손목 모양이 달라졌거나 피부가 찢어진 상처가 있는 경우",
        "손가락이 창백하거나 차갑고, 저림·감각 저하·힘 빠짐이 진행하는 경우",
        "고정 중 통증이 갑자기 심해지거나 손가락 색·감각이 변하는 경우"
    ], margin + 16, urgent_y + 60, page_width - 2 * margin - 32, red_body)

    c.setFont("MalgunGothic", 7.2)
    c.setFillColor(MUTED)
    c.drawString(margin, 144, "근거 참고: BSSH Scaphoid fracture standards (2025) · Dias et al., SWIFFT trial, Lancet 2020")
    c.drawString(margin, 132, "이 자료는 일반 교육 정보이며 개인별 진단·치료 지시를 대신하지 않습니다. 실제 치료는 진찰과 영상검사 결과에 따라 달라집니다.")
    draw_footer(c, 2)
    c.save()


if __name__ == "__main__":
    build_pdf()
