import { Observable, Subject, of, delay, tap, switchMap, EMPTY } from "rxjs";

const effect$ = new Subject();
const service = new Subject();

const example = effect$.pipe(
	delay(1000),
	tap(x => console.log("#1 tick x", x)),
	delay(1000),
	switchMap(x => {
		console.log("#2 tick x", x);
		return of(null);
		// return empty();
	}),
	tap(x => console.log("#3 tick x", x)),
).subscribe();

effect$.next("#1");
service.next("fail");
// service.next("fail");

// service.next("yey");

// timer(1500)
// 	.do(() => service.next("!"))
// 	.subscribe()

// source.next("#2");
// source.next("#3");
// source.next("#4");
// service.next("yrey");

EMPTY
	.subscribe({
		error: () => console.log("next #1 finish"),
		complete: () => console.log("next #2 finish"),
		next: () => console.log("next #3 finish")
	});