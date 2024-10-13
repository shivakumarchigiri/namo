import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowadoptionComponent } from './cowadoption.component';

describe('CowadoptionComponent', () => {
  let component: CowadoptionComponent;
  let fixture: ComponentFixture<CowadoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowadoptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CowadoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
