import { NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent implements OnInit {
  // form: FormGroup;
  // constructor(private fb: FormBuilder) {this.form = this.fb.group({
  //   nom: new FormControl(''),
  //   prenom:new FormControl(''),
  //   mail:new FormControl(''),
  //   mdp:new FormControl(''),
  //   tel: new FormControl(''),
  //   add: new FormControl(''),
  //   spec:new FormControl(''),
  //   niveau:new FormControl(''),
  //   diplome:new FormControl(''),
  // })}

  ngOnInit(): void {}

  onSubmit() {
    // if(this.form.valid===true){
    //   alert('done')
    // }
    
  }
}

