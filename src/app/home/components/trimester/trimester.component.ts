import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { HomeService } from '../../services/home.service';
import { Session } from '../../models/trimester.model';

@Component({
  selector: 'app-trimester',
  templateUrl: './trimester.component.html',
})
export class TrimesterComponent implements OnInit, OnDestroy {
  trimesterId!: string;
  data: Array<Session> = [];
  done?: number;
  subscription: Subscription = new Subscription();
  selectedSessionIndex: number = -1;
  toggle: boolean = false;

  readonly MAP_ROUTER = {
    1: 'first',
    2: 'second',
    3: 'third',
  };

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly homeService: HomeService,
    private readonly _location: Location
  ) {}

  ngOnInit(): void {
    this.listenStorage();

    this.subscription = this._route.params.subscribe((params) => {
      this.trimesterId = params['id'];
      const sessions = JSON.parse(
        localStorage.getItem(
          `${this.MAP_ROUTER[this.trimesterId]}-trimester`
        ) || '[]'
      );
      if (sessions.length > 0) {
        this.data = sessions;
        this.done = this.data.filter((data) => data.done).length;
      } else {
        this.homeService
          .getDataByTrimester(this.MAP_ROUTER[this.trimesterId])
          .subscribe((data) => {
            this.data = data;
            this.done = this.data.filter((data) => data.done).length;
            localStorage.setItem(
              `${this.MAP_ROUTER[this.trimesterId]}-trimester`,
              JSON.stringify(this.data)
            );
          });
      }
    });

    this.subscription = this.homeService.toggleConfig$.subscribe(
      (toggle) => (this.toggle = toggle)
    );
  }

  listenStorage(): void {
    window.addEventListener('storage', (event) => {
      if (event.key === 'trimesters' && event.newValue !== null) {
        // Actualiza data si cambia el almacenamiento local.
        const trimesters = JSON.parse(event.newValue);
        const currentTrimester = trimesters.find(
          (tri: any) => tri.id === parseInt(this.trimesterId, 10)
        );
        if (currentTrimester) {
          this.done = currentTrimester.done;
          this.data = currentTrimester;
        }
      }
    });
  }

  toggleSession(index: number): void {
    if (this.selectedSessionIndex === index) {
      // Si se hace clic en el mismo elemento, deselecciónalo
      this.selectedSessionIndex = -1;
    } else {
      // De lo contrario, selecciona el nuevo elemento
      this.selectedSessionIndex = index;
    }
  }

  setSessionDone(session: Session): void {
    this.data.map((_session) => {
      if (_session.id === session.id) {
        _session.done = !_session.done;
      }
    });

    // Obtén el nombre del trimestre correspondiente según el ID del trimestre.
    const trimesterName = `${this.MAP_ROUTER[this.trimesterId]}-trimester`;

    // Obtiene el valor actual del trimestre desde el localStorage.
    const trimesterData = JSON.parse(
      localStorage.getItem(trimesterName) || '[]'
    );

    // Encuentra y actualiza la sesión específica en el trimestre.
    const updatedTrimesterData = trimesterData.map((trimesterSession: any) => {
      if (trimesterSession.id === session.id) {
        return { ...trimesterSession, done: session.done };
      }
      return trimesterSession;
    });

    // Actualiza el valor del trimestre en el localStorage.
    localStorage.setItem(trimesterName, JSON.stringify(updatedTrimesterData));

    // Actualiza el valor de done en el componente.
    this.done = this.data.filter((data) => data.done).length;

    // Actualiza el valor de done en el localStorage del trimestre.
    const trimesterDone = updatedTrimesterData.filter(
      (data: { done: any }) => data.done
    ).length;
    const trimesters = JSON.parse(localStorage.getItem('trimesters') || '[]');
    const updatedTrimesters = trimesters.map((tri: any) => {
      if (tri.id === parseInt(this.trimesterId, 10)) {
        return { ...tri, done: trimesterDone };
      } else {
        return tri;
      }
    });
    localStorage.setItem('trimesters', JSON.stringify(updatedTrimesters));

    // Guarda la última sesión en el localStorage.
    localStorage.setItem('lastSession', JSON.stringify(session));
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
