import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardRowComponent } from './keyboard-row.component';

describe('KeyboardRowComponent', () => {
  let component: KeyboardRowComponent;
  let fixture: ComponentFixture<KeyboardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
