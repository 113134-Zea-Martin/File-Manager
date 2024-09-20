import { Component, EventEmitter, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../../data/file.storage';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {

  @Output() formClosed = new EventEmitter<void>();

  cerrarForm() {
    this.formClosed.emit();
  }

  cantDuenios: number[] = [];

  agregarDuenio() {
    this.cantDuenios.push(1);
  }

  fileType = FileType;

  fileOwner: FileOwner[] = OWNERS;

  fileItem: FileItem[] = FILE_LIST;

  name: string = '';
  creation: Date = new Date();
  selectedCarpeta: any;
  selectedTipo: any;
  selectedDuenio: FileOwner[] = [];

  guardar() {
    this.fileItem.push({
      id: '3',
      name: this.name,
      creation: this.creation,
      type: this.selectedTipo,
      owners: this.selectedDuenio,
    });
    console.log(this.fileItem);
    this.name = '';
    this.creation = new Date();
    this.selectedCarpeta = '';
    this.selectedTipo = '';
    this.selectedDuenio = [];
    this.cantDuenios = [];
  }
}
