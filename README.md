Nintendo Wishlist Card
======================

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

A card that displays Nintendo Switch games that are on sale from your wish list.

![nintendo-wishlist-card-screenshot](https://github.com/custom-cards/nintendo-wishlist-card/raw/master/example.png)

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
```

Credits
-------

Thanks to [@maykar](https://github.com/maykar) for inspiration for most of
the layout and code.
