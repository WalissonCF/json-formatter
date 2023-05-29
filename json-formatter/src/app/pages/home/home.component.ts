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
  public content: string = '';
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
    console.log('Aqui no JsonFormat');
    try {
      this.content = JSON.parse(value);
      console.log('content', this.content);
    } catch(e) {
      console.log('Erro');
    }
  }
}
