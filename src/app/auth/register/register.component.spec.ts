import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//test -1
  it('Input elements count',()=>{
    let form = fixture.debugElement.nativeElement.querySelector('#registerForm');
    let allInputs = form.querySelectorAll('input');
    expect(allInputs.length).toBe(8);
  })
//test -2
it('Initial form value for our form',()=>{
   let form = component.register;
   let loginFormInitialValues={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    interest:'',
    gender:'',
    subscribe:''
   }
   expect(form.value).toEqual(loginFormInitialValues);
})
//test 3
it('should have `username` with class firstname',()=>{

  let element = fixture.debugElement.nativeElement.querySelector('.firstname');
  let text = element.textContent;
  expect(text).toEqual('First name')
})

//test 4
    fit('should be invalid if firstname is null',()=>{
   
    let ctrl = component.register.get('firstName');
    ctrl?.setValue(null);
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy()
    
    })
});
