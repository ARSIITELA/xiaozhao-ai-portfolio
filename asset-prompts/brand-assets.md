# 厚涂品牌素材生成记录

使用内置图片生成工具。参考确认稿 design-review/yoshito-painted-home-preview-v7-taller-shoulders.png。

## painted-wordmark.png

输出：dist/assets/painted-wordmark.png，2172×724 RGBA，横向 XIAOZHAO 字样，透明背景。sips 确认 alpha 通道；PNG 首行 alpha 均为 0，四周确为透明。

最终提示词：

Use case: precise-object-edit / logo-brand.
Create a production website asset derived from the large foreground wordmark in the supplied approved website preview. Extract and redraw ONLY the word XIAOZHAO, exactly spelled in uppercase Latin letters: X I A O Z H A O. Keep the reference's sweeping expressive coarse handwritten strokes, dynamic diagonal rising movement and chunky sculptural palette-knife paint construction. It should look like a physical hand-painted name made from thick scraped pigment, with rough chipped edges and a few small detached paint flecks.
Text: "XIAOZHAO" only, large, legible, one horizontal line. Wide landscape composition about 3:1, the entire word including first and last strokes visible, modest transparent padding.
Materials and colors: mainly charcoal grey, chalk white and stone-grey piled-up paint with restrained small cobalt blue and muted copper paint marks. Deep tactile impasto ridges and dry scraped edges. Matte pigment rather than shiny silver metal or glossy plastic.
IMPORTANT: isolate the lettering on a genuinely TRANSPARENT BACKGROUND. Remove all people, body parts, clothing, background Portfolio lettering, website UI, cards, borders, all other text, texture ground and shadows of any scene. Do not place letters over a white rectangle. No portrait, no large background, no software interface, no watermark. Only the rough painted name asset and small related pigment fragments.

## paint-study.png

输出：dist/assets/paint-study.png，1254×1254 RGB，正方形抽象厚涂素材。

最终提示词：

Use case: stylized-concept.
Asset type: one square abstract painted study to use as a portfolio website's navigation artwork.
The supplied approved website preview is a COLOR AND MATERIAL reference. Create only an abstract pigment painting, not the website and not the character.
A tactile field of thick irregular palette-knife paint patches, scraped impasto ridges, torn and flaked edges, dry brush, exposed chalk-white plaster / canvas ground. Palette mainly chalk white and warm stone-grey, with asymmetrical charcoal-black areas and restrained cobalt blue, muted copper / rust and a small touch of oxidized teal. Different areas of the square should have different dark/light balances so three visibly different crops can be made from this one asset: a light chalk-and-blue area at upper left, a charcoal / copper area on the right, a deep blue / grey area near the lower edge.
Material and painterly handling must match the three little abstract artworks and the fragmented male illustration in the reference. Coarse real paint marks, sophisticated imperfect handmade surface. Strong variation between thick ridges and bare ground. Calm balanced composition with irregular fragments; never a smooth gradient or an evenly repeating pattern.
Square 1:1 composition, artwork fills the square with some bare white ground between paint fragments. No people, faces, human silhouettes, text, lettering, logo, frame, website UI or software controls. No hearts, pastel pink or lilac. No glossy plastic or metallic 3D object. Output only the abstract painting.

