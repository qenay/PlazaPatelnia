# Plaża Patelnia — strona internetowa

Statyczna strona (HTML/CSS/JS, bez frameworków). 7 podstron + wspólny styl.

## Uruchomienie lokalne
```bash
node serve.mjs        # http://localhost:3001
```

## Struktura
| Plik | Zakładka |
|------|----------|
| `index.html` | Home |
| `atrakcje.html` | Atrakcje |
| `domki.html` | Domki |
| `koncerty.html` | Koncerty i Imprezy |
| `bilety.html` | Bilety |
| `kontakt.html` | Kontakt |
| `dofinansowanie.html` | Dofinansowanie |
| `styles.css` | wspólne style (kolory marki, komponenty) |
| `script.js` | nawigacja, menu mobilne, animacje reveal, lightbox galerii |

## Kolory marki (w `styles.css`, sekcja `:root`)
- Granatowy `--navy: #0D2240`
- Złoty `--gold: #F5C842`
- Jasnoniebieski `--blue-lt: #E8F4FD`

## Zdjęcia — DO PODMIANY
Wszystkie zdjęcia leżą w folderze `img/`. To **materiały pobrane z obecnej strony jako wzór** — podmień je na własne (te same nazwy plików = zero zmian w kodzie):

- `hero-drone-1.jpg`, `hero-drone-2.jpg` — ujęcia z drona (hero podstron)
- `koncerty.jpg`, `impreza-noc.jpg` — imprezy/koncerty
- `domek.jpg` — wnętrze domku premium
- `jezioro-dzien.jpg`, `altana.jpg`, `rowery-wodne.jpg`, `dino.jpg` — atrakcje
- `galeria-1.jpg` … `galeria-9.jpg` — galerie
- `logo.svg` — logo (oryginalne, granatowe; w navbarze/stopce wybielane filtrem CSS)
- `partner-*.svg/png`, `kpo.png` — loga partnerów i dofinansowania (oryginalne)

### Plakaty wydarzeń
Prawdziwe plakaty (`img/poster-*.jpg`) wycięte z banera `img/plakat.png`:
`poster-brokies.jpg`, `poster-klaudia.jpg`, `poster-them.jpg`, `poster-cypis.jpg`, `poster-sentino.jpg`.
- **Bilety** = 5 plakatów, **Home/Koncerty** = 3 najbliższe. Aby podmienić pojedynczy plakat — wrzuć nowy plik pod tą samą nazwą do `img/`.

### Do uzupełnienia przez Ciebie
- Linki „Kup bilet" → obecnie prowadzą do `https://superboss.pl` (podmień na konkretne linki wydarzeń).
- Embed wideo na `koncerty.html` → kafelek linkuje do wyszukiwania YouTube; wstaw `<iframe>` z konkretnym filmem.
- PDF-y oświadczeń (16–17 lat / poniżej 16) → linki `href="#"` do podmiany.
