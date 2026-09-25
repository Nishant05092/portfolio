from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path('public'); (root/'images').mkdir(exist_ok=True)
base='<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460"><defs><radialGradient id="g"><stop stop-color="{color}" stop-opacity=".22"/><stop offset="1" stop-color="#101019"/></radialGradient><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#ffffff" stroke-opacity=".035"/></pattern></defs><rect width="800" height="460" fill="#101019"/><rect width="800" height="460" fill="url(#g)"/><rect width="800" height="460" fill="url(#grid)"/>{body}</svg>'
import math
body=''
for i in range(8):
 a=i*math.pi/4; x=400+180*math.cos(a);y=230+150*math.sin(a)
 body+=f'<path d="M400 230L{x} {y}" stroke="#b699fa" stroke-opacity=".35"/><rect x="{x-28}" y="{y-23}" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="{x}" cy="{y}" r="6" fill="#bca1ef"/>'
body+='<circle cx="400" cy="230" r="57" fill="#302148" stroke="#b69be8"/><text x="400" y="226" text-anchor="middle" fill="#e9ddff" font-size="13" font-family="monospace">AGENT</text><text x="400" y="247" text-anchor="middle" fill="#baa1da" font-size="10" font-family="monospace">ORCHESTRATOR</text>'
(root/'images/agents.svg').write_text(base.format(color='#8554d1',body=body))
body='<path d="M0 370L140 180L270 310L430 120L650 330L800 220V460H0Z" fill="#192d38"/><path d="M110 440L310 200L490 380L660 160L800 340V460H0Z" fill="#25434c"/><path d="M340 215L430 120L522 220L454 183L422 208L402 180Z" fill="#80b5bd"/><path d="M135 310Q265 95 440 290T700 200" stroke="#8ddad4" stroke-width="2" stroke-dasharray="6 8" fill="none"/><circle cx="135" cy="310" r="7" fill="#91e0d1"/><circle cx="700" cy="200" r="7" fill="#91e0d1"/><rect x="250" y="320" width="300" height="64" rx="12" fill="#101c27" stroke="#80bfc0" stroke-opacity=".5"/><text x="280" y="348" fill="#c4eeee" font-size="13" font-family="monospace">YOUR NEXT ADVENTURE</text><text x="280" y="370" fill="#8bb4b6" font-size="11" font-family="monospace">Curated by AI. Made for you.</text>'
(root/'images/travel.svg').write_text(base.format(color='#428f95',body=body))
body='<rect x="195" y="77" width="245" height="310" rx="12" fill="#182327" stroke="#6b9b8d" stroke-opacity=".6"/><circle cx="246" cy="125" r="17" fill="#416257"/><path d="M281 115H400M281 132H361M227 170H405M227 186H387M227 221H360M227 238H405M227 255H388M227 290H405M227 307H377M227 324H393" stroke="#688c80" stroke-width="5" stroke-linecap="round"/><rect x="380" y="160" width="238" height="180" rx="13" fill="#142522" stroke="#87baa4"/><text x="410" y="195" fill="#a1cbb8" font-family="monospace" font-size="11">SCHEMA VALIDATED</text><text x="410" y="260" fill="#c0edd6" font-family="sans-serif" font-size="52">99<tspan font-size="28">%</tspan></text><path d="M410 292H581" stroke="#294e40" stroke-width="7" stroke-linecap="round"/><path d="M410 292H576" stroke="#83b99d" stroke-width="7" stroke-linecap="round"/>'
(root/'images/resume.svg').write_text(base.format(color='#4b8c73',body=body))
(root/'favicon.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#111117"/><text x="10" y="43" font-size="34" font-family="sans-serif" font-weight="bold" fill="#b09af2">ns.</text></svg>')
for name,size in [('apple-touch-icon.png',180),('favicon-32.png',32)]:
 im=Image.new('RGB',(size,size),'#111117');d=ImageDraw.Draw(im);f=ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf',int(size*.45));d.text((size*.1,size*.2),'ns.',font=f,fill='#b09af2');im.save(root/name)
im=Image.new('RGB',(1200,630),'#0a0a0f');d=ImageDraw.Draw(im)
f=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',62);small=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',25)
d.text((80,90),'NISHANT SHARMA / AI ENGINEER',font=small,fill='#b09af2');d.text((80,220),'Building intelligence.',font=f,fill='#eeeef4');d.text((80,300),'Engineering impact.',font=f,fill='#b09af2');d.text((80,470),'AI agents  /  RAG pipelines  /  Full-stack engineering',font=small,fill='#9494a8');im.save(root/'images/social-card.png')
