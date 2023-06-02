import { Component } from '@angular/core';

import { AceConfigInterface } from 'ngx-ace-wrapper';
import { ClipboardService } from 'ngx-clipboard';

import 'brace';
import 'brace/mode/json';
import 'brace/theme/dracula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public jsonContent: string = '{\n  "diga": "Olá dev 👋"\n}';
  public config: AceConfigInterface = {
    mode: 'json',
    theme: 'dracula',
    readOnly: false
  };

  constructor(
    private clipBoard: ClipboardService
  ) { }

  public clear(): void {
    this.jsonContent = '';
  }

  public onValueChange(value: string): void {
    this.formatJson(value);
  }

  public copy(): void {
    this.clipBoard.copy(this.jsonContent);
  }

  public formatJson(value: string): void {
    try {
      if (this.jsonContent) {
        const cleanedValue = value.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
        const formattedJson = JSON.stringify(JSON.parse(cleanedValue), null, 2);
        this.jsonContent = formattedJson;
      }
    } catch (error) {
      console.error('Erro ao formatar o JSON:', error);
    }
  }
}
