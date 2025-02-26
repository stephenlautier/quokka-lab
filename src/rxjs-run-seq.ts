import { Observable, of, from, concatMap, takeWhile, delay, tap } from 'rxjs';

// Type definition for our run function
type RunFunction = () => Observable<boolean>;

// Main function to execute run functions sequentially
function executeSequentially(runs: RunFunction[]): Observable<boolean> {
	return from(runs).pipe(
		// concatMap ensures sequential execution
		concatMap(run => run()),
		// takeWhile stops the sequence when false is encountered
		takeWhile(result => result === true, true) // true as second param emits the false value before completing
	);
}

// Example usage:
function example() {
	// Sample run functions
	const run1: RunFunction = () => {
		console.log('Running function 1');
		return of(true); // Simulates success
	};

	const run2: RunFunction = () => {
		console.log('Running function 2 x');
		return of(true).pipe(
			delay(1000),
			tap(x => console.warn(">>>> fn2 complete", x)),
		); // Simulates success
	};

	const run3: RunFunction = () => {
		console.log('Running function 3');
		return of(false); // Simulates failure
	};

	const run4: RunFunction = () => {
		console.log('Running function 4');
		return of(true); // Won't run due to previous false
	};

	// Array of run functions
	const runFunctions: RunFunction[] = [run1, run2, run3, run4];

	// Execute and subscribe
	executeSequentially(runFunctions).subscribe({
		next: (result) => console.log(`Result: ${result}`),
		complete: () => console.log('Sequence completed'),
		error: (err) => console.error('Error:', err)
	});
}

// Run the example
example();