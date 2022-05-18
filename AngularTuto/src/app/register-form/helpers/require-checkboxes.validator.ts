// import { FormGroup, Validators,  ValidatorFn } from '@angular/forms';

// export function requireCheckboxesToBeCheckedValidator(minRequired = 1): ValidatorFn  {
//   return function validate (formGroup: FormGroup): ValidatorFn {
//     let checked = 0;

//     Object.keys(formGroup.controls).forEach(key => {
//       const control = formGroup.controls[key];

//       if (control.value === true) {
//         checked ++;
//       }
//     });

//     if (checked < minRequired) {
//       return {
//         requireOneCheckboxToBeChecked: true,
//       };
//     }

//     return null;
//   };
// }

import { FormGroup, ValidatorFn } from '@angular/forms';

export function requireCheckboxesToBeCheckedValidator(minRequired = 1): ValidatorFn | any {
  return function validate (formGroup: FormGroup): any {
    let checked = 0;

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked ++;
        console.log(checked);
      }
    });

    if (checked < minRequired) {
      console.log("less than 1");
      return {
        requireOneCheckboxToBeChecked: true,
      };
    }

    return null;
  };
}