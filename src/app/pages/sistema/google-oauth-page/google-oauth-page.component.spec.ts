import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleOauthPageComponent } from './google-oauth-page.component';

describe('GoogleOauthPageComponent', () => {
  let component: GoogleOauthPageComponent;
  let fixture: ComponentFixture<GoogleOauthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleOauthPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleOauthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
