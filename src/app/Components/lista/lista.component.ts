import { Component } from '@angular/core';
import { FILE_LIST, OWNERS } from '../../../data/file.storage';
import { FileItem, FileOwner, FileType } from '../../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, FormComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  unchecks: boolean = false;

  borrarSelected() {
    if (this.filesSelected.length === 0) {
      alert('No hay archivos seleccionados');
      return;
    } else if (this.filesSelected.length === 1) {
      this.filesSelected.forEach((file) => {
        const index = this.FileList.indexOf(file);
        this.FileList.splice(index, 1);
      });
      this.filesSelected = [];
    } else {
      if(confirm('Estás seguro?')) {
        this.filesSelected.forEach((file) => {
          const index = this.FileList.indexOf(file);
          this.FileList.splice(index, 1);
        });
        this.filesSelected = [];
      }
    }
  }

  onCheckboxChange(_t19: FileItem, $event: Event) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.filesSelected.push(_t19);
    } else {
      const index = this.filesSelected.indexOf(_t19);
      this.filesSelected.splice(index, 1);
    }
  }

  filesSelected: FileItem[] = [];

  showForm() {
    this.toggleForm = !this.toggleForm;
  }
  FileList: FileItem[] = FILE_LIST;

  Owners: FileOwner[] = OWNERS;
  fileType = FileType;

  toggleForm: boolean = false;
}
