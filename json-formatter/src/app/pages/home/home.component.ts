import { Component } from '@angular/core';

import 'brace';
import 'brace/mode/json';
import 'brace/theme/dracula';
import { AceConfigInterface } from 'ngx-ace-wrapper';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public content: string = '{\n  "diga": "Olá dev 👋"\n}';
  public config: AceConfigInterface = {
    mode: 'json',
    theme: 'dracula',
    readOnly: false
  };

  constructor(
    private clipBoard: ClipboardService
  ) { }

  public clear(): void {
    this.content = '';
  }

  public onValueChange(value: string): void {
    console.log('Value change:', value);
    this.formatJson(value);
  }

  public onContentChange(event: any): void {
    console.log('Content change:', event);
  }

  public onSelectionChange(event: any): void {
    console.log('Selection change:', event);
  }

  public copy(): void {
    this.clipBoard.copy(this.content);
  }

  public formatJson(value: string): void {
    try {
      if (this.content) {
        const cleanedValue = value.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
        const formattedJson = JSON.stringify(JSON.parse(cleanedValue), null, 2);
        this.content = formattedJson;
      }
    } catch (error) {
      console.error('Erro ao formatar o JSON:', error);
    }
  }
}
