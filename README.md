# Dokumentation zur praktischen Abschlussarbeit Web-Entwickler (ILS)

**" Kikas Eiscafé ":** Eine Website in Form eines Onepagers und einer WebApp, entwickelt unter Verwendung des Frameworks HTML5 Boilerplate, bzw. jQuery Mobile.

![Kilas-Logo](./img/kikas_logo.png)

&copy; Sebastian Peschl (2023)

---

## Inhalt

- [Dokumentation zur praktischen Abschlussarbeit Web-Entwickler (ILS)](#dokumentation-zur-praktischen-abschlussarbeit-web-entwickler-ils)
  - [Inhalt](#inhalt)
  - [Projektbeschreibung \[Inhalt\]](#projektbeschreibung-inhalt)
  - [index.html im Detail \[Inhalt\]](#indexhtml-im-detail-inhalt)

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

## index.html im Detail [[Inhalt](#inhalt)]

