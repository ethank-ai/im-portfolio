import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio taxonomy and contact link', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Myself');
    expect(compiled.querySelector('#interior-design h2')?.textContent).toContain('Interior');
    expect(compiled.querySelector('#workshops h2')?.textContent).toContain('Workshop');
    expect(compiled.querySelectorAll('.gallery-piece').length).toBe(6);
    expect(compiled.querySelector('.button-link')?.getAttribute('href')).toContain('instagram.com');
  });
});
