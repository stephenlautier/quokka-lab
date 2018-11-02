import _ from "lodash";
import { Observable, of } from "rxjs";
import { tap, map } from "rxjs/operators";

export interface Hero {
	key: string;
	name: string;
	role: RoleType;
	damage?: number;
}

export enum RoleType {
	tank = "tank",
	assassin = "assassin",
	specialist = "specialist",
}

export const HEROES: Hero[] = [{
	key: "rexxar",
	name: "Rexxar",
	role: RoleType.tank,
	damage: 50,
}, {
	key: "jaina",
	name: "Jaina",
	role: RoleType.assassin,
	damage: 150
}, {
	key: "valeera",
	name: "Valeera",
	role: RoleType.assassin,
	damage: 140
}, {
	key: "sylvanas",
	name: "Sylvanas",
	role: RoleType.specialist,
	damage: 90
}, {
	key: "malthael",
	name: "Malthael",
	role: RoleType.assassin,
	damage: 160
}];

export class HeroService {

	getAll$(): Observable<Hero[]> {
		return of(HEROES);
	}

	getByKey(key: string): Observable<Hero | undefined> {
		const hero = _.find(HEROES, x => x.key === key);
		return of(hero)
	}

}

const service = new HeroService();

const hero$ = service.getByKey("malthael").pipe(
	tap(x => console.warn(">>>> hero", x)),
).subscribe();

let _filteredHeroes: Hero[];
const heroes$ = service.getAll$().pipe(
	tap(x => console.warn(">>>> heroes", x)),
	map(heroes => _.filter(heroes, x => x.role === RoleType.specialist)),
	tap(x => _filteredHeroes = x)
).subscribe();

_filteredHeroes;