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
    - [`head`-Bereich \[Inhalt\]](#head-bereich-inhalt)
    - [`body`-Bereich \[Inhalt\]](#body-bereich-inhalt)
      - [Details zum `nav`-Element (`id="pageNav"`) \[Inhalt\]](#details-zum-nav-element-idpagenav-inhalt)
      - [Details zum `header`-Element (Seiten-Header) \[Inhalt\]](#details-zum-header-element-seiten-header-inhalt)
      - [Das `div`-Element `id="contentWrapper"` \[Inhalt\]](#das-div-element-idcontentwrapper-inhalt)
        - [Details zur Sektion `id="products"` (Responsives Bild mit `srcset` und `sizes`) \[Inhalt\]](#details-zur-sektion-idproducts-responsives-bild-mit-srcset-und-sizes-inhalt)
        - [Details zur Sektion `id="info"` (OSM-Karte mit Leafletjs und Leaflet Routing Machine) \[Inhalt\]](#details-zur-sektion-idinfo-osm-karte-mit-leafletjs-und-leaflet-routing-machine-inhalt)
  - [main.css im Detail \[Inhalt\]](#maincss-im-detail-inhalt)
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

### `head`-Bereich [[Inhalt](#inhalt)]

Die HTML-Elemente `title`, bzw. die `meta`-Elemente mit den Attributen `description`, `author` und `generator` wurden modifiziert bzw. ergänzt.

Neben der primären Styling-Datei ***main.css*** ([main.css](#maincss-im-detail-inhalt)) werden im `head`-Bereich des HTML-Dokuments via CDN die Dateien ***leaflet-routing-machine.css*** ([Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/)) und ***leaflet.css*** ([Leafletjs](https://leafletjs.com/)) eingebunden. Diese dienen dem styling der OSM-Karte und der Route.

### `body`-Bereich [[Inhalt](#inhalt)]

Der Aufbau folgt einem sinnvollen, semantischen Markup unter Einsatz der etablierten HTML5-Elemente. Der Content gliedert sich dementsprechend in die primäten Bereiche [`nav`](#details-zum-nav-element-idpagenav-inhalt), [`header`](#details-zum-header-element-seiten-header-inhalt), `main` und `footer`. Diese werden von einem `div`-Element (`id="pageWrapper"`) umschlossen.  
Innerhalb von `main` findet eine weitere Unterteilung des Contents statt. Hier steht einem weiteren `div`-Element (`id="contentWrapper"`) ein `aside`-Element gegenüber.

#### Details zum `nav`-Element (`id="pageNav"`) [[Inhalt](#inhalt)]

Die Seitennavigation hat die Gestalt einer ungeordneten Liste (`ul`) mit vier Listenelementen (`li`). Jedes dieser Listenelemente binhaltet jeweils ein Link-Element (`a`) mit der Klasse `pageLink`. Diese Link-Elemente verweisen auf die verschiedenen Sektionen von [`id="contentWrapper"`](#das-div-element-idcontentwrapper-inhalt).

#### Details zum `header`-Element (Seiten-Header) [[Inhalt](#inhalt)]

Der Seiten-Header beinhaltet drei Komponenten.

| Komponente | ID | Beschreibung |
| --- | --- | --- |
| `div` | `hButton` | Eine Schaltfläche zum ein-/ausblenden der Navigation bei sehr kleinen VP. |
| `div` | none | Container für den Seitentitel (`h1`) und einen Textabsatz (`p`) mit der Klasse `subtitle` |
| `img` | `headerLogo` | Logo |

#### Das `div`-Element `id="contentWrapper"` [[Inhalt](#inhalt)]

Die unterschiedlichen Content-Bereiche werden innerhalb von `id="contentWrapper"` mit `section`-Elementen strukturiert. Im Rahmen dieses Projektes sind lediglich die Sektionen [`id="products"`](#details-zur-sektion-idproducts-responsives-bild-mit-srcset-und-sizes-inhalt) und [`id="info"`](#details-zur-sektion-idinfo-osm-karte-mit-leafletjs-und-leaflet-routing-machine-inhalt) relevant.

##### Details zur Sektion `id="products"` (Responsives Bild mit `srcset` und `sizes`) [[Inhalt](#inhalt)]

...

##### Details zur Sektion `id="info"` (OSM-Karte mit [Leafletjs](https://leafletjs.com/) und [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/)) [[Inhalt](#inhalt)]

...

## main.css im Detail [[Inhalt](#inhalt)]

...

## main.js im Detail [[Ihalt](#inhalt)]

...

## jqm.html im Detail [[Inhalt](#inhalt)]

...

## kikasTheme.css [[Inhalt](inhalt)]

...