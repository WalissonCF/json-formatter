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
  public isPopUpVisible: boolean = false;
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
  
  public convertToJsonSchema(): void {
    try {
      const json = JSON.parse(this.jsonContent);
      const interfaceContent = this.generateInterface(json);
      this.downloadFile(interfaceContent, 'interface.ts');
    } catch (error) {
      console.error('Erro ao converter para a interface JSON:', error);
    }
  }

  private generateInterface(json: any): string {
    const interfaceProperties = this.generateProperties(json);
    return `interface Arquivo {\n${interfaceProperties}\n}`;
  }

  private generateProperties(obj: any, indent: number = 2): string {
    const indentation = ' '.repeat(indent);
    let properties = '';

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const type = this.getPropertyType(value);

        if (Array.isArray(value) && value.length > 0) {
          const nestedProperties = this.generateProperties(value[0], indent + 2);
          properties += `${indentation}${key}: {\n${nestedProperties}\n${indentation}};\n`;
        } else if (typeof value === 'object' && value !== null) {
          const nestedProperties = this.generateProperties(value, indent + 2);
          properties += `${indentation}${key}: {\n${nestedProperties}\n${indentation}};\n`;
        } else {
          properties += `${indentation}${key}: ${type};\n`;
        }
      }
    }

    return properties;
  }

  private getPropertyType(value: any): string {
    if (Array.isArray(value) && value.length > 0) {
      return `${this.getPropertyType(value[0])}[]`;
    } else {
      return typeof value;
    }
  }

  private downloadFile(content: string, filename: string): void {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  

  public openModal(): void {
    this.isPopUpVisible = true;
  }

  public closePopUp(): void {
    this.isPopUpVisible = false;
  }
}
