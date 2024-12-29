import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfo } from './pokemon-info.component';

describe('PokeinfoComponent', () => {
  let component: PokemonInfo;
  let fixture: ComponentFixture<PokemonInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
