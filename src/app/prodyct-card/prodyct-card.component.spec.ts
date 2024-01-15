import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdyctCardComponent } from './prodyct-card.component';

describe('ProdyctCardComponent', () => {
  let component: ProdyctCardComponent;
  let fixture: ComponentFixture<ProdyctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdyctCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdyctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
