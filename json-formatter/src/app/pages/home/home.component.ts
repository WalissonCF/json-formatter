import { Component, ViewChild } from '@angular/core';

import 'brace';
import 'brace/mode/json';
import 'brace/theme/dracula';
import { AceConfigInterface, AceDirective } from 'ngx-ace-wrapper';

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

  @ViewChild(AceDirective, { static: false }) directiveRef?: AceDirective;

  constructor() { }

  public clear(): void {
    this.directiveRef?.clear();
  }

  public onEditorBlur(event: any): void {
    console.log('Editor blur:', event);
  }

  public onEditorFocus(event: any): void {
    console.log('Editor focus:', event);
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

  public formatJson(value: string): void {
    try {
      if (this.content) {
        const cleanedValue = value.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''); // Remove caracteres de controle inválidos
        const formattedJson = JSON.stringify(JSON.parse(cleanedValue), null, 2);
        this.content = formattedJson;
      }
    } catch (error) {
      console.error('Erro ao formatar o JSON:', error);
    }
  }  
}
