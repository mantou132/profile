<<<<<<< HEAD
var ppf = require('./preprocess/lib/preprocess.js').preprocessFile;
ppf('preprocess/test/fixtures/processFile/processFileTestInclude.html', 'tem', {TEST: '0xDEADBEEF'}, function(){}, {
	srcDir: 'preprocess/test/fixtures/processFile',
	srcEol: '\n'
});
=======
'use strict'

let diff = (text_1, text_2) => {
	const ROWS_1 = text_1.split('\n');
	const ROWS_2 = text_2.split('\n');
	let diff = new Array();
	let l_1 = ROWS_1.length;
	let l_2 = ROWS_2.length;
	let pending;

	for (let row_1 = 0, row_2 = 0; row_1 < l_1 || row_2 < l_2; /*empty*/) {
		if (ROWS_1[row_1] === ROWS_2[row_2]) {
			diff.push(true);
			row_1++, row_1++;
		} else {
			diff.push(false);
			for (let tem = row_1 + 1; tem < l_1; tem++) {
				if (ROWS_1[tem] === ROWS_2[row_2]) {

				}
			}
		}
	}

	return diff;
}

let diff_row = (row_1, row_2) => {

}
>>>>>>> 7fc2b45795b1e90d40398d4b0564a3594ee1c3b9
