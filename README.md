Nintendo Wishlist Card
======================

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

A card that displays Nintendo Switch games that are on sale from your wish list.

*Cover Art Option*
![nintendo-wishlist-card-screenshot](https://github.com/custom-cards/nintendo-wishlist-card/raw/master/cover-art.png)

*Background Art Option*
![nintendo-wishlist-card-screenshot](https://github.com/custom-cards/nintendo-wishlist-card/raw/master/background-art.png)

Install
-------

1) Install the [Nintendo Wishlist Custom Component](https://github.com/custom-components/sensor.nintendo_wishlist).
2) Copy the [nintendo-wishlist-card.js](https://raw.githubusercontent.com/custom-cards/nintendo-wishlist-card/master/nintendo-wishlist-card.js) into your `www/custom-lovelace` folder or install it
   from the [HACS (Home Assistant Community Store)](https://custom-components.github.io/hacs/).
3) Add the following to your `ui-lovelace.yaml` file under `resources`:

```yaml
resources:
  - url: /local/custom-lovelace/nintendo-wishlist-card.js
    type: js
```

4) Add the card to one of your lovelace views.

```yaml
cards:
  - type: custom:nintendo-wishlist-card
    entity: sensor.nintendo_wishlist
    title: Switch Wishlist
    image_style: boxart
```

Configuration
-------------

Credits
-------

The code for this card is a minor modification of [@maykar](https://github.com/maykar)'s
[upcoming-media-card](https://github.com/custom-cards/upcoming-media-card).
