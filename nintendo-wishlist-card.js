class NintendoWishlistCard extends HTMLElement {

  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = this.config.title;
      this.content = document.createElement('div');
      this.content.style.padding = '5px 10px';
      card.appendChild(this.content);
      this.appendChild(card);
    }
    // The Great Wall of Config & Defaults™
    const style = document.createElement('style');
    const entity = this.config.entity;
    if (!hass.states[entity]) {
      console.log("entity doesn't exist");
      return;
    }
    const json = hass.states[entity].attributes.on_sale;
    if (!json || !json.length) {
      return
    }
    const view = this.config.image_style || 'poster';
    const dateform = this.config.date || 'mmdd';
    const icon = this.config.icon || json[0]['icon'];
    const icon_hide = this.config.icon == 'none' ? 'display:none;' : '';
    const icon_color = this.config.icon_color || 'white';
    const flag_color = this.config.flag_color || 'var(--primary-color)';
    const flag = this.config.flag == undefined ? true : this.config.flag;
    const timeform = { "hour12": (this.config.clock != 24), "hour": "2-digit", "minute": "2-digit" };
    const title_text = this.config.title_text || 'title';
    const line1_text = this.config.line1_text || json[0]['line1_default'];
    const line2_text = this.config.line2_text || json[0]['line2_default'];
    const line3_text = this.config.line3_text || json[0]['line3_default'];
    const line4_text = this.config.line4_text || json[0]['line4_default'];
    const title_size = this.config.title_size || 'large';
    const line1_size = this.config.line1_size || this.config.line_size || 'medium';
    const line2_size = this.config.line2_size || this.config.line_size || 'small';
    const line3_size = this.config.line3_size || this.config.line_size || 'small';
    const line4_size = this.config.line4_size || this.config.line_size || 'small';
    const tSize = (size) => size == 'large' ? '18' : size == 'medium' ? '14' : '12';
    const size = [tSize(title_size), tSize(line1_size), tSize(line2_size), tSize(line3_size), tSize(line4_size)];
    const defaultClr = (poster, fanart) => view == 'poster' ? poster : fanart;
    const title_color = this.config.title_color || defaultClr('var(--primary-text-color)', '#fff');
    const line1_color = this.config.line1_color || this.config.line_color || defaultClr('var(--primary-text-color)', '#fff');
    const line2_color = this.config.line2_color || this.config.line_color || defaultClr('var(--primary-text-color)', '#fff');
    const line3_color = this.config.line3_color || this.config.line_color || defaultClr('var(--primary-text-color)', '#fff');
    const line4_color = this.config.line4_color || this.config.line_color || defaultClr('var(--primary-text-color)', '#fff');
    const accent = this.config.accent_color || defaultClr('var(--primary-color)', '#000');
    const border = this.config.border_color || defaultClr('#fff', '#000');
    const shadows = (conf) => this.config.all_shadows == undefined ? conf == undefined ? true : conf : this.config.all_shadows;
    const boxshdw = shadows(this.config.box_shadows) ? view == 'poster' ? '5px 5px 10px' : '3px 2px 25px' : '';
    const svgshdw = shadows(this.config.box_shadows) ? 'url(#grad1)' : accent;
    const txtshdw = shadows(this.config.text_shadows) ? '1px 1px 3px' : '';
    const max = Math.min(json.length, this.config.max || 5);
    const dflag = 'display:none;';
    window.cardSize = max;

    if (view == 'poster') {
      style.textContent = `
        .switchwishlist_${view} {
          width:100%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .switchwishlist_${view} ha-icon {
          top: -2px;
          right: 3px;
          z-index: 2;
          width: 17%;
          height: 17%;
          position:absolute;
          color:${icon_color};
          filter: drop-shadow( 0px 0px 1px rgba(0,0,0,1));
          ${icon_hide};
        }
        .switchwishlist_${view} img {
          width:100%;
          visibility:hidden;
        }
        .switchwishlist_svg_${view} {
          width:55%;
          margin-top:5%;
          margin-left:0;
          vertical-align:top;
          overflow:visible;
          z-index:1;
        }
        .switchwishlist_container_${view} {
          position:relative;
          outline: 5px solid #fff;
          width:30%;
          outline:5px solid ${border};
          box-shadow:${boxshdw} rgba(0,0,0,.8);
          float:left;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin:5px 0 15px 5px;
        }
        .switchwishlist_flag_${view} {
          z-index: 1;
          height: 100%;
          width: 100%;
          position: absolute;
          bottom: 0;
          right: 0;
          fill:${flag_color};
        }
        .switchwishlist_flag_${view} svg{
          float:right;
          width: 100%;
          height: 100%;
          margin:0;
          filter: drop-shadow( -1px 1px 1px rgba(0,0,0,.5));
        }
        .switchwishlist_line0_${view} {
          font-weight:600;
          font-size:${size[0]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${title_color};
        }
        .switchwishlist_line1_${view} {
          font-size:${size[1]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line1_color};
        }
        .switchwishlist_line2_${view} {
          font-size:${size[2]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line2_color};
        }
        .switchwishlist_line3_${view} {
          font-size:${size[3]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line3_color};
        }
        .switchwishlist_line4_${view} {
          font-size:${size[4]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line4_color};
          }
      `;
    } else {
      style.textContent = `
        .switchwishlist_${view} {
          width:100%;
          overflow:hidden;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
          background-repeat:no-repeat;
          background-size:auto 100%;
          box-shadow:${boxshdw} rgba(0,0,0,.8);
          position:relative;
        }
        .switchwishlist_${view} ha-icon {
          top: 5px;
          margin-right: -19px;
          right:0;
          z-index: 2;
          width: 15%;
          height: 15%;
          position:absolute;
          color:${icon_color};
          filter: drop-shadow( 0px 0px 1px rgba(0,0,0,1));
          ${icon_hide};
        }
        .switchwishlist_svg_${view} {
          overflow:visible;
          width:55%;
          margin-top:1%;
          margin-left:2.5%;
          alignment-baseline:text-after-edge;
        }
        .switchwishlist_fan_${view} {
          width:100%;
          background:linear-gradient(to right, ${accent} 48%,
          transparent 70%,${accent} 100%);
          margin:auto;
          box-shadow:inset 0 0 0 3px ${border};
        }
        .switchwishlist_flag_${view} {
          z-index: 1;
          height: 100%;
          width: 100%;
          position: absolute;
          margin-top:3px;
          margin-right:3px;
          right: 0;
          fill:${flag_color};
        }
        .switchwishlist_flag_${view} svg{
          float:right;
          width: 100%;
          height: 100%;
          margin:0;
          filter: drop-shadow( -1px 1px 1px rgba(0,0,0,.5));
        }
        .switchwishlist_line0_${view} {
          font-weight:600;
          font-size:${size[0]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${title_color};
        }
        .switchwishlist_line1_${view} {
          font-size:${size[1]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line1_color};
        }
        .switchwishlist_line2_${view} {
          font-size:${size[2]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line2_color};
        }
        .switchwishlist_line3_${view} {
          font-size:${size[3]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line3_color};
        }
        .switchwishlist_line4_${view} {
          font-size:${size[4]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line3_color};
        }
      `;
    }
    this.content.innerHTML = '';

    // Truncate text...
    function truncate(text, chars) {
      // When to truncate depending on size
      chars = chars == 'large' ? 23 : chars == 'medium' ? 28 : 35;
      // Remove parentheses & contents: "Shameless (US)" becomes "Shameless".
      text = text.replace(/ *\([^)]*\) */g, ' ');
      // Truncate only at whole word w/ no punctuation or space before ellipsis.
      if (text.length > chars) {
        for (let i = chars; i > 0; i--) {
          if (text.charAt(i).match(/( |:|-|;|"|'|,)/) && text.charAt(i - 1).match(/[a-zA-Z0-9_]/)) {
            var truncated = `${text.substring(0, i)}...`;
            return truncated;
          }
        }
      } else {
        return text;
      }
    }

    function format_date(input_date) {
      // Match UTC ISO formatted date with time
      if (String(input_date).match(/[T]\d+[:]\d+[:]\d+[Z]/)) {
        var fd_day = new Date(
          input_date).toLocaleDateString([], { day: "2-digit" });
        var fd_month = new Date(
          input_date).toLocaleDateString([], { month: "2-digit" });
      // Match date string. ie: 2018-10-31
      } else if (String(input_date).match(/\d+[-]\d+[-]\d+/)) {
        input_date = input_date.split('-');
        fd_month = input_date[1];
        fd_day = input_date[2];
      } else {
        return '';
      }
      if (dateform == 'ddmm') {
        return `${fd_day}/${fd_month}`;
      } else {
        return `${fd_month}/${fd_day}`;
      }
    }

    for (let count = 0; count < max; count++) {
      const item = (key) => json[count][key];
      console.log(item);
      let image = item('box_art_url');

      // Shifting images for fanart view since we use poster as fallback image.
      let shiftimg = item('fanart') ?
        'background-position:100% 0;' :
        'background-size: 54% auto;background-position:100% 35%;';

      // First item in card needs no top margin.
      if (count == '0') var top = '0px';
      else view == 'poster' ? '20px' : '10px';

      let line = ['title', 'sale_price'];
      let char = [title_size, line1_size];

      // Keyword map for replacement, return null if empty so we can hide empty sections
      let keywords = /title|sale_price/g;
      let keys = {
        title: item('title') || null,
        sale_price: item('sale_price') || null
      };
      let title = item('title');

      // Replace keywords in lines
      for (let i = 0; i < line.length; i++) {
        line[i] = line[i].replace(' - ', '-');
        console.log(line[i], keys)
        // Split at '-' so we can ignore entire contents if keyword returns null
        let text = line[i].replace(keywords, (val) => keys[val]).split('-');
        //let text = item('title').split('-');
        let filtered = [];
        // Rebuild lines, ignoring null
        for (let t = 0; t < text.length; t++) {
          if (text[t].match(null)) continue;
          else filtered.push(text[t]);
        }
        // Replacing twice to get keywords in component generated strings
        text = filtered.join(' - ').replace(keywords, (val) => keys[val]);

        // Shifting header text around depending on view & size
        let svgshift, y;
        if (i == 0) size[i].match(/18/) ? y = '-5' : size[i].match(/14/) ? y = '-2' : y = '0';
        if (view == 'fanart') svgshift = i == 0 ? `x="0" dy="1em" ` : `x="0" dy="1.3em" `;
        else svgshift = i == 0 ? `x="15" y="${y}" dy="1.3em" ` : `x="15" dy="1.3em" `;

        // Build lines HTML or empty line
        line[i] = line[i].match('empty') ?
          `<tspan class="switchwishlist_line${i}_${view}" style="fill:transparent;text-shadow:0 0 transparent;" ${svgshift}>.</tspan>` :
          `<tspan class="switchwishlist_line${i}_${view}" ${svgshift}>${truncate(text,char[i])}</tspan>`;
      }
      if (view == 'poster') {
        this.content.innerHTML += `
          <div id='main' class='switchwishlist_${view}' style='margin-top:${top};'>
             <div class="switchwishlist_container_${view}" style="background-image:url('${image}');">
                <img src="${image}"/>
                <ha-icon icon="${icon}" style="${dflag}"></ha-icon>
                <div class="switchwishlist_flag_${view}" style="${dflag}">
                   <svg style="${dflag}" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <polygon points="100 25,65 0,100 0"></polygon>
                   </svg>
                </div>
             </div>
             <svg class='switchwishlist_svg_${view}' viewBox="0 0 200 100">
                <defs>
                   <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:rgb(20,20,20,1);stop-opacity:1" />
                      <stop offset="2%" style="stop-color:${accent};stop-opacity:1" />
                   </linearGradient>
                </defs>
                <rect width="500px" height="23px" fill="${svgshdw}"/>
                <text>
                   <tspan class="switchwishlist_line0_${view}" x="15" dy="1.3em" y="-5">${truncate(title, 'large')}</tspan>
                   <tspan dy="1.3em" style="font-size:3px;fill:transparent;text-shadow:0 0 transparent;">.</tspan>
                   <tspan class="switchwishlist_line1_${view}" x="15" dy="1.3em"><tspan style="text-decoration:line-through">$${item('normal_price')}</tspan>  $${item('sale_price')} (${item('percent_off')}% off)</tspan>
                </text>
             </svg>
          </div>
        `;
      } else {
        this.content.innerHTML += `
          <div class="switchwishlist_${view} style='${top}'"
             style="${shiftimg}background-image:url('${image}')">
             <div class="switchwishlist_fan_${view}">
                <ha-icon icon="${icon}" style="${dflag}"></ha-icon>
                <div class="switchwishlist_flag_${view}" style="${dflag}">
                   <svg style="${dflag}" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <polygon points="100 30,90 0,100 0"></polygon>
                   </svg>
                </div>
                <svg class="switchwishlist_svg_${view}"viewBox="0 0 200 100">
                   <text>${line[0]}${line[1]}${line[2]}${line[3]}${line[4]}</text>
                </svg>
             </div>
          </div>
        `;
      }
      this.appendChild(style);
    }
  }
  setConfig(config) {
    if (!config.entity) throw new Error('Define entity.');
    this.config = config;
  }
  getCardSize() {
    let view = this.config.image_style || 'poster';
    return view == 'poster' ? window.cardSize * 5 : window.cardSize * 3;
  }
}
customElements.define('nintendo-wishlist-card', NintendoWishlistCard);
