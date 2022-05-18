import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { requireCheckboxesToBeCheckedValidator } from './helpers/require-checkboxes.validator';

@Component({
    selector: 'app-register',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

        form = new FormGroup({
            // ...more form controls...
            myCheckboxGroup: new FormGroup({
                myCheckbox1: new FormControl(false),
                myCheckbox2: new FormControl(false),
                myCheckbox3: new FormControl(false),
            }, requireCheckboxesToBeCheckedValidator()),
        });

        ngOnInit() {

        }

}

