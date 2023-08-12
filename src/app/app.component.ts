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

  vat = false;

  constructor() {}

  ngOnInit(): void {
    const fileSelectorVoucher = document.getElementById('voucher');
    fileSelectorVoucher?.addEventListener('change', (event: any) => {
      this.REGDIGITAL_CV_CBTE = '';
      const fileList = event.target.files;
      const read = new FileReader();
      read.readAsBinaryString(fileList[0]);
      read.onloadend = () => {
        console.log(read.result);
        this.REGDIGITAL_CV_CBTE = this.format_REGDIGITAL_CV_CBTE(String(read.result));
      }
    });

    const fileSelectorAlicuotas = document.getElementById('ali');
    fileSelectorAlicuotas?.addEventListener('change', (event: any) => {
      this.REGDIGITAL_CV_ALICUOTAS = '';
      const fileList = event.target.files;
      const read = new FileReader();
      read.readAsBinaryString(fileList[0]);
      read.onloadend = () => {
        console.log(read.result);
        this.REGDIGITAL_CV_ALICUOTAS = this.format_REGDIGITAL_CV_ALICUOTAS(String(read.result));
      }
    });
  }

  ngDoCheck(): void {}

  format_REGDIGITAL_CV_CBTE(s: string): string {
    let f_string = '';

    if (!this.vat) {
      for (const i of s.split('\n')) {
        let date = '<span class="red">' + i.substring(0, 8) + '</span>';
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

        f_string += '<span class="line">' + date + type + pdv + num + '                ' + num_partner + cuit + name + total +
        campo10 + campo11 + campo12 + campo13 + campo14 + campo15 + campo16 + currency + rate + ali_qty + campo20 + campo21 + campo22 + campo23 + campo24 + campo25 + '</span>\n';
      }
    } else {
      for (const i of s.split('\n')) {
        let date = '<span class="red">' + i.substring(0, 8) + '</span>';
        let type = '<span class="green">' + i.substring(8, 11) + '</span>';
        let pdv = '<span class="blue">' + i.substring(11, 16) + '</span>';
        let num = '<span class="yellow">' + i.substring(16, 36) + '</span>';
        let num_to = '<span class="magent">' + i.substring(36, 56) + '</span>';
        let num_partner = '<span class="cyan">' + i.substring(56, 58) + '</span>';
        let cuit = '<span class="red">' + i.substring(58, 78) + '</span>';
        let name = '<span class="green">' + i.substring(78, 108) + '</span>';
        let total = '<span class="blue">' + i.substring(108, 123) + '</span>';
        let campo10 = '<span class="yellow">' + i.substring(123, 138) + '</span>';
        let campo11 = '<span class="magent">' + i.substring(138, 153) + '</span>';
        let campo12 = '<span class="cyan">' + i.substring(153, 168) + '</span>';
        let campo13 = '<span class="red">' + i.substring(168, 183) + '</span>';
        let campo14 = '<span class="green">' + i.substring(183, 198) + '</span>';
        let campo15 = '<span class="blue">' + i.substring(198, 213) + '</span>';
        let campo16 = '<span class="yellow">' + i.substring(213, 228) + '</span>';
        let currency = '<span class="magent">' + i.substring(228, 231) + '</span>';
        let rate = '<span class="cyan">' + i.substring(231, 241) + '</span>';
        let ali_qty = '<span class="red">' + i.substring(241, 242) + '</span>';
        let campo20 = '<span class="green">' + i.substring(242, 243) + '</span>';
        let campo21 = '<span class="blue">' + i.substring(242, 257) + '</span>';
        let campo22 = '<span class="yellow">' + i.substring(258, 265) + '</span>';

        f_string += '<span class="line">' + date + type + pdv + num + num_to + num_partner + cuit + name + total + 
        campo10 + campo11 + campo12 + campo13 + campo14 + campo15 + campo16 + currency + rate + ali_qty + campo20 + campo21 + campo22 + '</span>\n';
      }
    }

    return f_string;
  }

  format_REGDIGITAL_CV_ALICUOTAS(s: string): string {
    let f_string = '';

    if (!this.vat) {
      for (const i of s.split('\n')) {
        let type = '<span class="red">' + i.substring(0, 3) + '</span>';
        let pvd = '<span class="green">' + i.substring(3, 8) + '</span>';
        let num = '<span class="blue">' + i.substring(8, 28) + '</span>';
        let num_partner = '<span class="yellow">' + i.substring(28, 30) + '</span>';
        let cuit = '<span class="magent">' + i.substring(30, 50) + '</span>';
        let neto_gravado = '<span class="cyan">' + i.substring(50, 65) + '</span>';
        let vat_code = '<span class="red">' + i.substring(65, 69) + '</span>';
        let vat = '<span class="blue">' + i.substring(69, 84) + '</span>';
  
        f_string += '<span class="line">' + type + pvd + num + num_partner + cuit + neto_gravado + vat_code + vat + '</span>\n';
      }
    } else {
      for (const i of s.split('\n')) {
        let type = '<span class="red">' + i.substring(0, 3) + '</span>';
        let pvd = '<span class="green">' + i.substring(3, 8) + '</span>';
        let num = '<span class="blue">' + i.substring(8, 28) + '</span>';
        let neto_gravado = '<span class="cyan">' + i.substring(28, 43) + '</span>';
        let vat_code = '<span class="red">' + i.substring(43, 47) + '</span>';
        let vat = '<span class="blue">' + i.substring(47, 62) + '</span>';
  
        f_string += '<span class="line">' + type + pvd + num + neto_gravado + vat_code + vat + '</span>\n';
      }
    }

    return f_string;
  }
}