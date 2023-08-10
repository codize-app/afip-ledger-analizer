import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'afip-ledger-analizer';

  REGDIGITAL_CV_CBTE = '';
  REGDIGITAL_CV_ALICUOTAS = '';

  constructor() {}

  ngOnInit(): void {
    const fileSelector = document.getElementById('voucher');
    fileSelector?.addEventListener('change', (event: any) => {
      this.REGDIGITAL_CV_CBTE = '';
      const fileList = event.target.files;
      const read = new FileReader();
      read.readAsBinaryString(fileList[0]);
      read.onloadend = () => {
        console.log(read.result);
        this.REGDIGITAL_CV_CBTE = this.format_REGDIGITAL_CV_CBTE(String(read.result));
      }
    });
  }

  ngDoCheck(): void {}

  format_REGDIGITAL_CV_CBTE(s: string): string {
    let f_string = '';

    for (const i of s.split('\n')) {
      let date = '<span class="red campo1">' + i.substring(0, 8) + '</span>';
      let type = '<span class="green">' + i.substring(8, 11) + '</span>';
      let pdv = '<span class="blue">' + i.substring(11, 16) + '</span>';
      let num = '<span class="yellow">' + i.substring(16, 36) + '</span>';
      let num_partner = '<span class="magent">' + i.substring(52, 54) + '</span>';
      let cuit = '<span class="cyan">' + i.substring(54, 74) + '</span>';
      let name = '<span class="red">' + i.substring(74, 104) + '</span>';
      let total = '<span class="green">' + i.substring(104, 119) + '</span>';
      let campo10 = '<span class="blue">' + i.substring(119, 134) + '</span>';
      let campo11 = '<span class="yellow">' + i.substring(134, 149) + '</span>';
      let campo12 = '<span class="magent">' + i.substring(149, 164) + '</span>';
      let campo13 = '<span class="cyan">' + i.substring(164, 179) + '</span>';
      let campo14 = '<span class="red">' + i.substring(179, 194) + '</span>';
      let campo15 = '<span class="green">' + i.substring(194, 209) + '</span>';
      let campo16 = '<span class="blue">' + i.substring(209, 224) + '</span>';
      let currency = '<span class="yellow">' + i.substring(224, 227) + '</span>';
      let rate = '<span class="magent">' + i.substring(227, 237) + '</span>';
      let ali_qty = '<span class="cyan">' + i.substring(237, 238) + '</span>';
      let campo20 = '<span class="red">' + i.substring(238, 239) + '</span>';
      let campo21 = '<span class="green">' + i.substring(239, 254) + '</span>';
      let campo22 = '<span class="blue">' + i.substring(254, 269) + '</span>';
      let campo23 = '<span class="yellow">' + i.substring(269, 280) + '</span>';
      let campo24 = '<span class="magent">' + i.substring(280, 310) + '</span>';
      let campo25 = '<span class="cyan">' + i.substring(310, 325) + '</span>';

      f_string += date + type + pdv + num + '                ' + num_partner + cuit + name + total +
      campo10 + campo11 + campo12 + campo13 + campo14 + campo15 + campo16 + currency + rate + ali_qty + campo20 + campo21 + campo22 + campo23 + campo24 + campo25 + '\n';
    }

    return f_string;
  }
}