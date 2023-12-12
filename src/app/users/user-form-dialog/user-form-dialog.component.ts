import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../common/interfaces/IUser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IDialogData {
  title?: string;
  isEdit?: boolean;
  user?: IUser;
}

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss'],
})

export class UserFormDialogComponent implements OnInit {

  userForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData,
              private readonly dialogRef: MatDialogRef<UserFormDialogComponent>,
              private readonly formBuilder: FormBuilder) {
                this.userForm = this.formBuilder.group({
                  firstName: ['', Validators.minLength(2)],
                  lastName: ['', Validators.minLength(2)],
                  email: ['', Validators.required, Validators.email],
                  username: ['', Validators.required, Validators.minLength(2)]
                })
              }

  ngOnInit(){
    
  }

  onNoClick() {
    this.dialogRef.close({ isSuccess: false });
  }

  onSubmit(){
    console.log('\n submited value------------>', this.userForm.getRawValue())
  }

}
