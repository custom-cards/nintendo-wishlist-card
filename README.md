# Nintendo Wishlist Card

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

A card that displays Nintendo Switch games that are on sale from your wish list.

| Cover Art                                                                                                               | Background Art                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/custom-cards/nintendo-wishlist-card/raw/master/cover-art.png" alt="Cover Art" width="300"> | <img src="https://github.com/custom-cards/nintendo-wishlist-card/raw/master/background-art.png" alt="Background Art" width="300"> |

## Install

1. Install the [Nintendo Wishlist Custom Component](https://github.com/custom-components/sensor.nintendo_wishlist).
2. Copy the [nintendo-wishlist-card.js](https://raw.githubusercontent.com/custom-cards/nintendo-wishlist-card/master/nintendo-wishlist-card.js) into your `www/custom-lovelace` folder or install it
   from the [HACS (Home Assistant Community Store)](https://custom-components.github.io/hacs/).
3. Add the following to your `ui-lovelace.yaml` file under `resources`:

```yaml
resources:
  - url: /local/custom-lovelace/nintendo-wishlist-card.js
    type: js
```

4. Add the card to one of your lovelace views.

```yaml
cards:
  - type: custom:nintendo-wishlist-card
    entity: sensor.nintendo_wishlist
    title: Switch Wishlist
    image_style: boxart
```

## Configuration

| Name         | Type                        | Default                                                                                             | Description                                                                                                                                              |
| ------------ | --------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type         | string                      | _Required_                                                                                          | `custom:nintendo-wishlist-card`                                                                                                                          |
| entity       | string                      | _Required_                                                                                          | The entity id of the nintendo-wishlist custom component. e.g. `sensor.nintendo_wishlist`                                                                 |
| title        | string                      |                                                                                                     | The title to display at the top of the card.                                                                                                             |
| image_style  | string                      | boxart                                                                                              | The art style to display. Options are `boxart` or `backgroundart`.                                                                                       |
| max          | int                         | 5                                                                                                   | The maximum number of items to show in the card.                                                                                                         |
| accent_color | string                      | `var(--primary-color)` when `image_style` is `boxart`, `#000` when `image_style` is `backgroundart` | Color of the ribbon in boxart image_style and background in backgroundart image_style. Accepts any valid css color e.g. (`red`, `#fff`)                  |
| title_color  | string                      | `var(--primary-color)` when `image_style` is `boxart`, `#fff` when `image_style` is `backgroundart` | Color of the title. Accepts any valid css color e.g. (`red`, `#fff`)                                                                                     |
| line1_color  | string                      | `var(--primary-color)` when `image_style` is `boxart`, `#fff` when `image_style` is `backgroundart` | Color of the pricing text. Accepts any valid css color e.g. (`red`, `#fff`)                                                                              |
| border_color | string                      | `#fff` when `image_style` is `boxart`, `#000` when `image_style` is `backgroundart`                 | Color of the outside border in boxart image_style and border around image in backgroundart image_style. Accepts any valid css color e.g. (`red`, `#fff`) |
| sort_by      | `percent_off`, `sale_price` | No specific order                                                                                   | What field the results should be sorted by.                                                                                                              |
| sort_dir     | `asc`, `desc`               | `desc`                                                                                              | Which direction to sort the results.                                                                                                                     |

## Credits

The code for this card is a minor modification of [@maykar](https://github.com/maykar)'s
[upcoming-media-card](https://github.com/custom-cards/upcoming-media-card).
