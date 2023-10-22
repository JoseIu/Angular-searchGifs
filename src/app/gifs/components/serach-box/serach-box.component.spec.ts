import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachBoxComponent } from './serach-box.component';

describe('SerachBoxComponent', () => {
  let component: SerachBoxComponent;
  let fixture: ComponentFixture<SerachBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerachBoxComponent]
    });
    fixture = TestBed.createComponent(SerachBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
