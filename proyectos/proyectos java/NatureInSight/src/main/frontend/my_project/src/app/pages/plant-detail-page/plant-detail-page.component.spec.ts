import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDetailPageComponent } from './plant-detail-page.component';

describe('PlantDetailPageComponent', () => {
  let component: PlantDetailPageComponent;
  let fixture: ComponentFixture<PlantDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantDetailPageComponent]
    });
    fixture = TestBed.createComponent(PlantDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
