import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTitleComponent } from './portfolio-title.component';

describe('PortfolioTitleComponent', () => {
  let component: PortfolioTitleComponent;
  let fixture: ComponentFixture<PortfolioTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
