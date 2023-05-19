# Dokumentation zur praktischen Abschlussarbeit Web-Entwickler (ILS)

**" Kikas Eiscafé ":** Eine Website in Form eines Onepagers und einer WebApp, entwickelt unter Verwendung des Frameworks HTML5 Boilerplate, bzw. jQuery Mobile.

![Kilas-Logo](./img/kikas_logo.png)

&copy; Sebastian Peschl (2023)

---

## Inhalt

- [Dokumentation zur praktischen Abschlussarbeit Web-Entwickler (ILS)](#dokumentation-zur-praktischen-abschlussarbeit-web-entwickler-ils)
  - [Inhalt](#inhalt)
  - [Projektbeschreibung \[Inhalt\]](#projektbeschreibung-inhalt)
  - [Übersicht über die relevanten Projektdateien \[Inhalt\]](#übersicht-über-die-relevanten-projektdateien-inhalt)
  - [index.html im Detail \[Inhalt\]](#indexhtml-im-detail-inhalt)
    - [`<head>`-Bereich \[Inhalt\]](#head-bereich-inhalt)
    - [`body`-Bereich \[Inhalt\]](#body-bereich-inhalt)
      - [Details zum `<nav>`-Element (`id="pageNav"`) \[Inhalt\]](#details-zum-nav-element-idpagenav-inhalt)
      - [Details zum `<header>`-Element (Seiten-Header) \[Inhalt\]](#details-zum-header-element-seiten-header-inhalt)
      - [Das `<div>`-Element `id="contentWrapper"` \[Inhalt\]](#das-div-element-idcontentwrapper-inhalt)
        - [Details zur Sektion `id="products"` (Responsives Bild mit `srcset` und `sizes`) \[Inhalt\]](#details-zur-sektion-idproducts-responsives-bild-mit-srcset-und-sizes-inhalt)
        - [Details zur Sektion `id="info"` (OSM-Karte mit Leafletjs und Leaflet Routing Machine) \[Inhalt\]](#details-zur-sektion-idinfo-osm-karte-mit-leafletjs-und-leaflet-routing-machine-inhalt)
      - [`<aside>` innerhalb von `<main>` \[Inhalt\]](#aside-innerhalb-von-main-inhalt)
      - [Details zum `<footer>`-Element (Seiten-Footer) \[Inhalt\]](#details-zum-footer-element-seiten-footer-inhalt)
  - [main.css im Detail \[Inhalt\]](#maincss-im-detail-inhalt)
    - [Fonts und CSS-Variablen \[Inhalt\]](#fonts-und-css-variablen-inhalt)
    - [Navigationsleiste \[Inhalt\]](#navigationsleiste-inhalt)
    - [(Quasi) dreispaltiges Layout \[Inhalt\]](#quasi-dreispaltiges-layout-inhalt)
  - [main.js im Detail \[Ihalt\]](#mainjs-im-detail-ihalt)
  - [jqm.html im Detail \[Inhalt\]](#jqmhtml-im-detail-inhalt)
  - [kikasTheme.css \[Inhalt\]](#kikasthemecss-inhalt)

---

## Projektbeschreibung [[Inhalt](#inhalt)]

Das vorliegende Projekt entstand im Rahmen eines Ferstudiengangs zum Web-Entwickler und stellt die praktische Abschlussarbeit dar.

Zu den Anforderungen gehörten unter Anderem eine Website unter Verwedung des des Frameworks [HTML5 Boilerplate](https://html5boilerplate.com/), einhergehend mit sinnvollem Einsatz des semantischen Markups und unter Beachtung des Mobile First- Prinzips zu erstellen. Für Endgeräte mit kleinem Display sollte ein einspaltiges, für Geräte mit größerem Bildschirm ein zweispaltiges Layout etstellt werden.

Weitere Anforderungen an die Website waren insbesondere:

- Einbindung eines responsiven Bildes unter Verwendung der Attribute `srcset` und `sizes`.
- Verwendung der Geolocation API zur Ermittlung der aktuellen geographischen Position und Anzeige der daten als `alert()`.
- Erstellung und Gestaltung einer Schaltfläche zum aufrufen der WebApp nach spezifischen, gestalterischen Vorgaben.

Darüber hinaus wurde gefordert eine einfache WebApp mit Hilfe von [jQuery Mobile](https://jquerymobile.com/) zu entwickeln und diese über eine Schaltfläche aus der Website heraus zugänglich zu machen.

Die WebApp sollte aus zwei "Seiten" (1. Inhaltsseite, 2. Dialog) bestehen und folgende Eigenschaften besitzen:

- Kopf- und Fußzeile
- Eine Schaltfläche zum öffnen des Dialogs
- Eine Liste mit Inhalten

In meiner Lösung habe ich den den Leistungs- und Designumfang erweitert.

Bezogen auf die Website bedeutet dies folgendes:

- Bei sehr kleine Viewports (< 51.25em) kollabiert die Seitennavigation und es wird ein Hamburger-Button angezeigt. Über diesen Button kann die Navigation bei Bedarf eingeblendet werden.
- Bei Viewports >= 51.25em wird die Seitennavigation automatisch eingeblendet und als horizontale Leiste an der Oberkante des VP angezeigt. Diese Navigationsleiste verhält sich `sticky`, scrollt also nicht mit dem restlichen Content.
- Ab einem Viewport von mindestens 80em Breite wechselt das bislang einspaltige Layout zu einem zweispaltigen. Dises zweispaltige Layout wird nicht mehr mit **Flexbox** realisiert, sondern mit **Grid**.
- Ab VP die größer als 100em sind wird der Inhalt von `main` ebenfalls in zwei Spalten angezeigt. Dieses Verhalten wird wider mit **Flexbox** erreicht.
- Neben der Anzeige der ermittelten Geodaten in Form einer Alert-Box habe ich die Anzeige der geografischen Position, auf einer OSM-Karte realisiert. Darüber hinaus wird auch der Zielpunkt (Kikas Eiscafé) und eine Route angezeigt. Um dies zu Realisieren kommen die JavaScript- Bibliotheken [Leafletjs](https://leafletjs.com/) und [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) zum Einsatz.

Für die Gestaltung der WebApp habe ich unter Verwendung von [ThemeRoller](https://themeroller.jquerymobile.com/) ein (farblich) zur Website passendes Theme erstellt und dieses dahingehend modifiziert, dass auch dort die auf der Webseite verwendeten Schriften verwendet werden.

## Übersicht über die relevanten Projektdateien [[Inhalt](#inhalt)]

| Datei | Pfad | Kurzerläuterung |
| --- | --- | --- |
| [index.html](#indexhtml-im-detail-inhalt) | `/` | HTML-Dokument welches die Webseite implementiert. |
| [main.css](#maincss-im-detail-inhalt) | `/css/` | Styling der Webseite |
| [main.js](#mainjs-im-detail-ihalt) | `/js/` | Stellte die Logik f. die Webseite bereit. |
| [jqm.html](#jqmhtml-im-detail-inhalt) | `/` | HTML-Dokument welches die jQuery Mobile-Anwendung implementiert. |
| [kikasTheme.css](#kikasthemecss-inhalt) | `/css/` | Individuelles Theme f. die jQuery Mobile-Anwendung. |

## index.html im Detail [[Inhalt](#inhalt)]

### `<head>`-Bereich [[Inhalt](#inhalt)]

Die HTML-Elemente `<title>`, bzw. die `<meta>`-Elemente mit den Attributen `description`, `author` und `generator` wurden modifiziert bzw. ergänzt.

Neben der primären Styling-Datei ***main.css*** ([main.css](#maincss-im-detail-inhalt)) werden im `<head>`-Bereich des HTML-Dokuments via CDN die Dateien ***leaflet-routing-machine.css*** ([Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/)) und ***leaflet.css*** ([Leafletjs](https://leafletjs.com/)) eingebunden. Diese dienen dem styling der OSM-Karte und der Route.

### `body`-Bereich [[Inhalt](#inhalt)]

Der Aufbau folgt einem sinnvollen, semantischen Markup unter Einsatz der etablierten HTML5-Elemente. Der Content gliedert sich dementsprechend in die primäten Bereiche [`<nav>`](#details-zum-nav-element-idpagenav-inhalt), [`<header>`](#details-zum-header-element-seiten-header-inhalt), `<main>` und `<footer>`. Diese werden von einem `<div>`-Element (`id="pageWrapper"`) umschlossen.  
Innerhalb von `main` findet eine weitere Unterteilung des Contents statt. Hier steht einem weiteren `<div>`-Element (`id="contentWrapper"`) ein `<aside>`-Element gegenüber.

Vor dem schließenden `</body>`-Tag werden die erforderlichen, JavaScriptdateien eingebunden:

| Datei | Variante | Erläuterung |
| --- | --- | --- |
| ***leaflet.js*** | CDN | Bibiliothek zur anzeige von OSM-Karten. [Leafletjs](https://leafletjs.com/) |
| ***leaflet-routing-machine.js*** | CDN | Bilbiothek zur Berechnung und Anzeige von Routen innerhalb von OSM-Karten [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) |
| ***jquery-1.11.1.min.js*** | CDN | jQuery in der Version 1.11.1 |
| ***modernizr-3.11.2.min.js*** | local | Analyse der jweils zur Verfügung stehenden Browserfeatures. (Teil von HTML5 Boilerplate.) |
| ***plugins.js*** | local | Datei zum einbinden von Plugins (Teil von HTML5 Boilerplate.) |
| ***main.js*** | local | Eigener JavaScript-Code (Teil von HTML5 Boilerplate.) |

#### Details zum `<nav>`-Element (`id="pageNav"`) [[Inhalt](#inhalt)]

Die Seitennavigation hat die Gestalt einer ungeordneten Liste (`<ul>`) mit vier Listenelementen (`<li>`). Jedes dieser Listenelemente binhaltet jeweils ein Link-Element (`<a>`) mit der Klasse `pageLink`. Diese Link-Elemente verweisen auf die verschiedenen Sektionen von [`id="contentWrapper"`](#das-div-element-idcontentwrapper-inhalt).

#### Details zum `<header>`-Element (Seiten-Header) [[Inhalt](#inhalt)]

Der Seiten-Header beinhaltet drei Elemente.

| Elemente | ID | Beschreibung |
| --- | --- | --- |
| `<div>` | `hButton` | Eine Schaltfläche zum ein-/ausblenden der Navigation bei sehr kleinen VP. |
| `<div>` | none | Container für den Seitentitel (`<h1>`) und einen Textabsatz (`<p>`) mit der Klasse `subtitle` |
| `<img>` | `headerLogo` | Logo |

#### Das `<div>`-Element `id="contentWrapper"` [[Inhalt](#inhalt)]

Die unterschiedlichen Content-Bereiche werden innerhalb von `id="contentWrapper"` mit `<section>`-Elementen strukturiert. Im Rahmen dieses Projektes sind lediglich die Sektionen [`id="products"`](#details-zur-sektion-idproducts-responsives-bild-mit-srcset-und-sizes-inhalt) und [`id="info"`](#details-zur-sektion-idinfo-osm-karte-mit-leafletjs-und-leaflet-routing-machine-inhalt) relevant.

Die Inhalte der `<section>`-Elemente der Klasse `contentSection` verfügen alle über die selbe Grundstruktur. Sie bestehen aus einem `<header>`-Element mit `class="csh"` (ContentSectionHeader) und einem `<div>`-Container mit `class="sc"` (SectionContent).

##### Details zur Sektion `id="products"` (Responsives Bild mit `srcset` und `sizes`) [[Inhalt](#inhalt)]

Neben einem `<div>`-Element der Klasse `textContent` findet sich in dieser Sektion innerhalb des `<div>`-Containers mit `class="sc"`, ein weiteres `<div>`-Element mit der Klasse `imageContainer` welches das in der Aufgabenstellung geforderte responsive Bild beinhaltet.

Das `<img>`-Element bestitzt die folgenden Attribute und Werte:

| Attribut | Wert(e) | Erläuterungen |
| --- | --- | --- |
| `src` | *"./img/banana-cups-320.jpg 320w"* | Verweis auf die Default-Bilddatei, wenn der Browser das `srcset`-Attribut nicht versteht. |
| `alt` | *"Bananen-Eisbecher"* | Alternativtext |
| `srcset` | *"./img/banana-cups-320.jpg 320w,<br>./img/banana-cups-640.jpg 640w,<br>./img/banana-cups-1280.jpg 1280w"* | Verweise auf die verschiedenen Auflösungsvarianten der Bilddatei. |
| `sizes` | *"(max-width: 40em) 100vw, 33vw"* | Größendefinition: Bis zu einer maximalen VP-Breite von `40em` bekommt das Bild eine Beite von `100vw`, darüber hinaus eine Breite von `33vw`. |

**Hinweis**: Bemerkenswert sind in diesem Zusammenahng die unterschiedlichen Verhaltensweisen Chromium-Basierter Browser einerseits und Firefox andererseits. Während Firefox beim skalieren des VP immer zur am besten zum VP passende Bilddatei wechselt, verhalten sich Browser die auf Chromium basieren so, dass nachdem die am höchsten aufgelöste Bilddatei nachgeladen wurde (Skalierung des VP von klein nach groß.), beim erneuten verkleinern des VP **nicht** auf eine geringer aufgelöste Version des Bildes zurückgewechselt wird.

##### Details zur Sektion `id="info"` (OSM-Karte mit [Leafletjs](https://leafletjs.com/) und [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/)) [[Inhalt](#inhalt)]

Neben der geforderten Ermittlung und Ausgabe der aktuellen Geo-Daten habe ich mich dazu entschlossen, einerseits die aktuelle, geographische Position, sowie ein Zielpunkt und andererseits eine Routenberechnung durchführen und anzeigen zu lassen.

Um diese Ziele zu erreichen findet sich innerhalb der Sektion `id="info"` ein `<article>`-Element mit der `id="mapContainer"`. Darin wiederum ist neben einem `<header>`-Bereich der Klasse `csh` ein `<div>`-Container mit der `id="mapTarget"` enthalten. Innerhalb von `id="mapTarget"` wird unter Verwendung von [Leafletjs](https://leafletjs.com/) und [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) die OSM-Karte und die Route eingefügt.

#### `<aside>` innerhalb von `<main>` [[Inhalt](#inhalt)]

Dem `<div>`-Container `id="contentWrapper"` wird ein `<aside>`-Element gegenüber gestellt. Dieses Bietet Raum für weitere Informationen. Hierin befinden sich zwei Elemente vom Typ `<article>` mit der Klasse `asArt`. In dem zweiten dieser Elemente findet sich der in der Aufgabenstellung geforderte Button, ein Link welcher auf die WebApp verweist. Dieser Link ist mit dem Attribut `target="_blanc"` versehen um die WebApp in einem neuen Fenster/Tab zu öffnen.

#### Details zum `<footer>`-Element (Seiten-Footer) [[Inhalt](#inhalt)]

Das `<footer>`-Element beinhaltet drei `<div>`-Container der Klasse `footerBox`. In diesen finden sich Informationen über dieses Projekt, den Autor und das Erstellungsjahr.

## main.css im Detail [[Inhalt](#inhalt)]

### Fonts und CSS-Variablen [[Inhalt](#inhalt)]

In diesem Projekt werden zwei Fonts von [Google](https://fonts.google.com/) verwendet:

1. [Charm](https://fonts.google.com/specimen/Charm?query=Charm) für Titel, Überschriften und Schaltflächen (Links als Buttons)
2. [Montserrat](https://fonts.google.com/specimen/Montserrat?query=Montser) für Text

Folgende Farben und Farbverläufe wurden in Form von CSS-Variablen definiert:

| Bezeichnung | Wert | Typ |
| --- | --- | --- |
| `--papyrus` | `#DDE7C6` | Farbe |
| `--important` | `#860C0B` | Farbe |
| `--coffee` | `#312015` | Farbe |
| `--cappuccino` | `#ecb357` | Farbe |
| `--mainGradient` | `linear-gradient(45deg, var(--important), var(--coffee), var(--important))` | Linearer Farbverlauf, um 45 Grad gedreht. |

### Navigationsleiste [[Inhalt](#inhalt)]

Der Aufgabenstellung entsprechend wird via CSS eine horizontale Navigationsleiste realisiert. Einem konsequenten Mobile First-Ansatz entsprechened jedoch erst ab dem ersten Breakpoint welcher bei `40em`(640px) liegt. Ist der VP kleiner befinden sich die Elemente der Seitennavigation in einer vertikalen Anordnung und sind standardmäßig ausgeblendet. Ein "Hamburger-Button" (`id="hButton"`) ermöglicht den Zugriff auf die Navigationspunkte.

Die Navigationsleiste ist oberhalb des `<header>`-Elements positioniert. Auf diese Weise wird ein optisch natloser Übergang zum eigentlichen Content (`<main>`) vereinfacht.

Ab einer VP-Breite von `80em` (1280px) wird die Seitennavigation als vertikale Leiste links vom Content (`<main>`) dargestellt. Um dies zu realisieren wechselt das Layout-Konzept von Flex-Box zu Grid. Damit ist ein asymetrisches, zweispalitges Layout realisiert.

Unabhängig vom aktuellen VP und der jeweiligen Erscheinungsform der Navigationsleiste, wurde dieser mit der CSS-Eigenschaft `position: sticky` eine ständige Erreichbarkeit ohne lästiges scollen verliehen.

Alle Links der Navigation, sowie die Schalftfläche zum öffnen der WebApp (ausgenommen `id="hButton"`) wurde mittels der CSS-Eigenschaften `border-radius: .5em` mit abgerundeten Ecken, bzw. `background: var(--mainGradient)` mit einem Farbverlauf versehen.

### (Quasi) dreispaltiges Layout [[Inhalt](#inhalt)]

Ein letzter Breakpoint wurde bei einer VP-Breite von `100em` (1600px) definiert. Ab hier wird das Elemente `<main>` zu einem Flex-Container und die Elemente `id="contentWrapper"` und `<aside>` zu Flex-Items.  
`<aside>` erhält die CSS-Eigenschaft `width: 30%`, `id="contentWrapper"` erhält `flex: 1` und damit den verbleibenden horizontalen Raum.

Dieses (quasi) dreispaltige Layout ermöglicht eine bessere Nutzung des zur Verfügung stehenden Raums bei großen VP.

## main.js im Detail [[Ihalt](#inhalt)]

...

## jqm.html im Detail [[Inhalt](#inhalt)]

...

## kikasTheme.css [[Inhalt](inhalt)]

...